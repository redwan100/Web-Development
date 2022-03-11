const toggleBtn = document.querySelector('.toggle__btn');
const sideNav = document.querySelector('.side__nav')
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sideNav.classList.toggle('show')
    })
}

const lists = document.querySelectorAll('.nav__link');

lists.forEach((list) => {
    list.addEventListener('click', () => {
        removeActiveLink(lists)
        sideNav.classList.remove('show')
        list.classList.add('active')
    })
})


function removeActiveLink(list) {
    list.forEach((item) => {
        item.classList.remove('active')
    })
}


