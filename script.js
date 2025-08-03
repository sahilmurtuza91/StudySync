// menu-toggle.js

function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Optional: hide menu when clicking outside
document.addEventListener('click', function (event) {
    const menuWrapper = document.querySelector('.menu-wrapper');
    const menuDropdown = document.getElementById('menuDropdown');
    if (!menuWrapper.contains(event.target)) {
        menuDropdown.style.display = 'none';
    }
});
