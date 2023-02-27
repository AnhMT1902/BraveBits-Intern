const links = document.querySelectorAll('nav .nav-btn');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        links.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
    });
});