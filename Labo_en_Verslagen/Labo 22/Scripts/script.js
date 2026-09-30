// Sleutel voor localStorage
const STORAGE_KEY = 'startpage_history';

// Alle ondersteunde commando's
const commands = {
    g: {
        name: 'Google',
        buildUrl: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`,
        cardClass: 'card-google'
    },
    y: {
        name: 'Youtube',
        buildUrl: (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`,
        cardClass: 'card-youtube'
    },
    x: {
        name: 'X',
        buildUrl: (q) => `https://x.com/hashtag/${encodeURIComponent(q.replace(/\s+/g, ''))}`,
        cardClass: 'card-x'
    },
    i: {
        name: 'Instagram',
        buildUrl: (q) => `https://www.instagram.com/explore/tags/${encodeURIComponent(q.replace(/\s+/g, ''))}/`,
        cardClass: 'card-instagram'
    }
};

// History ophalen uit localStorage
function loadHistory() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

// History opslaan in localStorage
function saveHistory(history) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

// Één card aanmaken en teruggeven als HTML element
function createCard(entry) {
    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
    <div class="card h-100 ${entry.cardClass} p-3">
      <div class="card-title">${escapeHtml(entry.title)}</div>
      <div class="card-text">${escapeHtml(entry.text)}</div>
      <div>
        <a href="${escapeHtml(entry.url)}" target="_blank" class="btn">Go!</a>
      </div>
    </div>
  `;
    return col;
}

// Alle cards renderen vanuit localStorage (bij page load)
function renderHistory() {
    const grid = document.getElementById('history-grid');
    grid.innerHTML = '';
    loadHistory().forEach(entry => {
        grid.appendChild(createCard(entry));
    });
}

// Voorkomt XSS: gevaarlijke tekens escapen in HTML
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Hoofdfunctie: verwerkt het ingegeven commando
function handleGo() {
    const raw = document.getElementById('input-command').value.trim();

    // Moet beginnen met /
    if (!raw.startsWith('/')) {
        alert('Invalid command');
        return;
    }

    const parts = raw.split(' ');
    const prefix = parts[0];          // bv. "/g"
    const letter = prefix.slice(1).toLowerCase(); // bv. "g"
    const query = parts.slice(1).join(' ').trim(); // de zoekopdracht

    // Onbekende prefix?
    if (!commands[letter]) {
        alert('Unknown command prefix');
        return;
    }

    // Zoekopdracht ontbreekt?
    if (!query) {
        alert('Invalid command');
        return;
    }

    const cmd = commands[letter];
    const url = cmd.buildUrl(query);

    // Openen in nieuw tabblad
    window.open(url, '_blank');

    // Nieuw history object (zoals gevraagd in de opdracht)
    const entry = {
        title: cmd.name,
        text: query,
        url: url,
        cardClass: cmd.cardClass
    };

    // Opslaan in localStorage
    const history = loadHistory();
    history.push(entry);
    saveHistory(history);

    // Card toevoegen aan de grid
    document.getElementById('history-grid').appendChild(createCard(entry));

    // Input leegmaken
    document.getElementById('input-command').value = '';
}

// Bij laden van de pagina: history tonen + Enter-toets koppelen
document.addEventListener('DOMContentLoaded', () => {
    renderHistory();
    document.getElementById('input-command').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleGo();
    });
});