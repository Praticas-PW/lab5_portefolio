const hdr = document.querySelector('hdr');
const toggle = document.getElementById('toggle');

function toggleDarkMode(){
    toggle.classList.toggle('active');
    hdr.classList.toggle('active');
}