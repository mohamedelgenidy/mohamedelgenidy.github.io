// --- Mobile Menu Toggle ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


// --- Active Link on Scroll ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // --- Sticky Header ---
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // --- Close menu when a link is clicked or scrolling ---
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


// --- Typing Animation using Typed.js ---
const typed = new Typed('.typing-text span', {
    strings: ['Computer Science Graduate', 'AI/ML Engineer', 'NLP Developer', 'Generative AI Explorer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});