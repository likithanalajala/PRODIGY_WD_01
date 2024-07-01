window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.background = 'linear-gradient(to right, #00008b, #00bfff)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #0000ff, #00ffff)';
    }
});