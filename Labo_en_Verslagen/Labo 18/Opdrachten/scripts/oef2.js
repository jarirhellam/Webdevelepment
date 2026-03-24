const setup = () => {
    let list = document.querySelectorAll("li");

    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("list item");
    }

    let img = document.createElement("img");
    img.setAttribute("src", "sunset.jpg")
    img.setAttribute("alt", "sunset");
    document.body.appendChild(img);


}
window.addEventListener("load", setup);