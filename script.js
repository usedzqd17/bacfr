function loadPDF(file) {
    document.getElementById("viewer").src = file;
}

function toggleSubMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
