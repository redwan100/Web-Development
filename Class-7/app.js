const toggleBtn = document.querySelector('#toggle');
const  navItems =  document.querySelector('.nav__items')
toggleBtn.addEventListener('click', () => {
    navItems.classList.toggle('active');
})