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


// Affiche la popup au chargement de la page
window.onload = function () {
    showPopup();
};

// Fonction pour afficher la popup
function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden"); // Supprime la classe "hidden" pour afficher la popup
}

// Fonction pour fermer la popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden"); // Ajoute la classe "hidden" pour masquer la popup
}


function loadPDF(pdfPath) {
    document.getElementById('viewer').src = pdfPath;
}

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}


function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const announcement = document.getElementById("announcement");

    // Afficher l'annonce
    announcement.classList.remove("hidden");

    // Masquer l'annonce après 5 secondes
    setTimeout(() => {
        announcement.classList.add("hidden");
    }, 8000);
});
