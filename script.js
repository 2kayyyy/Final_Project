document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.nav-menu .icon');
    const navLinks = document.querySelector('.nav-menu ul');

    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('show-menu');
    });
});

console.log('Menu button:', menuBtn);
console.log('Nav links:', navLinks);
