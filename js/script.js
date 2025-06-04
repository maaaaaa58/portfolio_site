// ***ハンバーガーメニュー***
const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function openDrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", openDrawer);
// ***ここまでハンバーガーメニュー***