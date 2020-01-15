/* Functies om login/filter/zoekbalk te weergeven */

function toggleLogin() {
    toggleSection('login');
    toggleOff('filter');
    toggleOff('search');
}

function toggleFilter() {
    toggleSection('filter');
    toggleOff('login');
    toggleOff('search');
}

function toggleSearch() {
    toggleSection('search');
    toggleOff('filter');
    toggleOff('login');
}

/* Sections laten zien */

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

/* Sections weghalen */

function toggleOff(sectionId) {
    var section = document.getElementById(sectionId);

    section.style.display = "none";
}

/* Section buttons functies */

document.getElementById("loginButton").onclick = function () {
    toggleLogin()
};

document.getElementById("filterButton").onclick = function () {
    toggleFilter()
};

document.getElementById("searchButton").onclick = function () {
    toggleSearch()
};

/* Close filter & search dropdown */

function closeFilter() {
    toggleOff('filter');
}

function closeSearch() {
    toggleOff('search');
}

document.getElementById("closeFilter").onclick = function () {
    closeFilter()
};

document.getElementById("closeSearch").onclick = function () {
    closeSearch()
};

/* Like button */

var likeElement = document.getElementById("likeButton");

function like() {
    if (likeElement.innerHTML = "&#9825;") {
        likeElement.innerHTML = "&#9829;"
    } else {
        likeElement.innerHTML = "&#9825;"
    }
};

likeElement.addEventListener('click', like);

/* Bron: https://codepen.io/FED_HERK04/pen/wvBBOqN */

/* On load Hide all */

function init() {
    toggleOff('login');
    toggleOff('filter');
    toggleOff('search');
}

window.onload = init;
