
const menuBtn = document.querySelector('.checkbtn');
const menuDiv = document.querySelector('.menu-div');

menuBtn.addEventListener('click', () => {
    menuDiv.classList.toggle('show');
});