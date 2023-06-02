$(document).ready(function () {
    //za link na kome se nalazimo
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
    });
}
)