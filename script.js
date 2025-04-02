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


window.onload = function () {
    showPopup();
};

function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden"); 
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden"); 
}
