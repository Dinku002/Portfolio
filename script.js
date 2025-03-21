function toggleMenu() {
    const navBarContent = document.getElementById('nav-bar-content');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    navBarContent.classList.toggle('active');
    hamburgerIcon.classList.toggle('rotated');
}