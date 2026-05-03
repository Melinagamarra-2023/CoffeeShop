const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        // 'toggle' quita la clase si está, o la pone si no está
        navbar.classList.toggle('active');
    });

    const lightSections = document.querySelectorAll('.products-content, .reviews-content, .work-content, .products-container');

    const options = {
        threshold: 0.2 
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hamburger.classList.add('black-version');
            } else {
                hamburger.classList.remove('black-version');
            }
        });
    }, options);
    
    lightSections.forEach(section => {
        observer.observe(section);
    });

    const headerScroll = document.getElementById('header-scroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        headerScroll.classList.add('show');
    } else {
        headerScroll.classList.remove('show');
    }
});
