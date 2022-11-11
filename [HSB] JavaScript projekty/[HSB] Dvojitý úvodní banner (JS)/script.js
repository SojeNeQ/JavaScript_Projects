const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUP = document.querySelector(".arrow-up");
const slidesLength = slideRight.querySelectorAll("div").length;

let numberActiveSlide = 0;

// Barva na levé straně sjíždění
slideLeft.style.top = `-${(slidesLength-1) * 100}vh`;

arrowUP.addEventListener("click", function(){
    changeSlide("up");
});

arrowDown.addEventListener("click", function(){
    changeSlide("down");
});


function changeSlide(direction){
    // Hlídá to aktuální výšku něco jako flexbox    
    const sliderHeight = containerSlider.clientHeight;
    // console.log(sliderHeight);
    if(direction === "up"){
        numberActiveSlide++;
        if(numberActiveSlide > slidesLength - 1){
        numberActiveSlide = 0;
        }
    } else {
        numberActiveSlide--;
        if(numberActiveSlide < 0){
        numberActiveSlide = slidesLength - 1;
        }
    }

    // Zapnutí hejbání
    slideRight.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`;
};