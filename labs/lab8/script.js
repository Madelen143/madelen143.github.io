function toggleTheme() {
    let bodyElem = document.body;
    bodyElem.classList.toggle("dark-mode");
}

let buttonElem = document.getElementById("toggleButton");
// does not need the quotes i guess

buttonElem.onclick = toggleTheme;