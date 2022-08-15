

let btn = document.getElementById('projects-btn')
let home = document.getElementById('home');
let homebtn = document.getElementById('home-btn')
let projs = document.getElementById('projs');
let abprojs = document.getElementById('altbike-projs')
let about = document.getElementById('about');
let contact = document.getElementById('contact');
let aboutbtn = document.getElementById('about-btn');
let contactbtn = document.getElementById('contact-btn');

document.addEventListener('DOMContentLoaded', (event) => {
    home.style.display = 'flex';
    projs.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
});

homebtn.addEventListener('click', () => {
    home.style.display = 'flex';
    projs.style.display = 'none';
    abprojs.style.display= 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
});

btn.addEventListener('click', () => {
    home.style.display = 'none';
    projs.style.display = 'flex';
    abprojs.style.display= 'flex';
    about.style.display = 'none';
    contact.style.display = 'none';
});

aboutbtn.addEventListener('click', () => {
    home.style.display = 'none';
    projs.style.display = 'none';
    abprojs.style.display= 'none';
    about.style.display = 'flex';
    contact.style.display = 'none';
});

contactbtn.addEventListener('click', () => {
    home.style.display = 'none';
    projs.style.display = 'none';
    abprojs.style.display= 'none';
    about.style.display = 'none';
    contact.style.display = 'flex';
});



