// Slider slides logic
const Slides = document.querySelectorAll(".slides");
var count = 0;
console.log(Slides);

Slides.forEach(
    (slide, index) => {
        slides.style.left = '${index*100}%'
    }
)
// Slider button logic
let flag = 0;
function controlar(x) {
    flag = flag + x;
    showslide(flag);
}
showslide(flag);
function showslide(num) {
    let slides = document.getElementsByClassName('slide');
    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num == -1) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = 'none';
    }
    slides[num].style.display = "block";
}
