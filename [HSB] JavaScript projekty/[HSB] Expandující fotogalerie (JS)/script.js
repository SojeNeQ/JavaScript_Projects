const slides = document.querySelectorAll(".slide");

slides.forEach(function(oneslide){
    oneslide.addEventListener("click", function () {
        // active vymaže vše
        deleteActivClass()
        oneslide.classList.add("active")
        
    })
})

function deleteActivClass(){
    slides.forEach(function(mySlide){
        mySlide.classList.remove("active")
    })
}