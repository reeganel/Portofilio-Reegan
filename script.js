const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

// Amati semua elemen dengan kelas 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Toggle hamburger menu untuk mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Opsional: Animasi hamburger (misalnya, ubah menjadi X)
    hamburger.classList.toggle('active');
});