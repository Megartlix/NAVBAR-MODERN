// Hamburger menü işlevselliği
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Linkler tıklandığında menüyü kapat
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll olayını dinle - Navbar'ı otomatik gizle/göster
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Aşağı scroll
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Yukarı scroll
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});