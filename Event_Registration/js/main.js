const burgerBtn = document.querySelector('.burger_button');
const checkbox = document.querySelector('#check');
const links = document.querySelector('#myLinks');
const spans = burgerBtn.querySelectorAll('span');
burgerBtn.addEventListener('click', burger);

function burger() {
    if(checkbox.checked) {
        links.style.display = "flex";
    } else {
        links.removeAttribute('style');
        for (let i = 0; i < spans.length; i++) {
            spans[i].removeAttribute('style');
        }
    }
}
// if(links.style.display == 'flex' || links.hasAttribute('style')) {
//     spans[0].style.transform = 'rotatez(45deg) translate(8px, 0px)';
//     spans[1].style.transform = 'rotatez(-45deg)';
//     spans[2].style.transform = 'translate(30px, -11px) rotatez(45deg)';
//     spans[2].style.width = '50%';
// }