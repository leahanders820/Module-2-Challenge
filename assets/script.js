const hamburgerBtn = document.getElementById('hamburger')
const navList = document.getElementById('navlist')

function toggleBtn() {
    navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleBtn)

