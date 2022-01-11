// define some variable
const carousel_container = document.querySelector(".carousel-slide") 
const carousel_image = document.querySelectorAll(".carousel-slide .carousel-image-wrapper")
const default_margin_right = 27;
const image_width = carousel_image[0].offsetWidth +default_margin_right;
const num_image = carousel_image.length;
var counter=0;

function setUpSlider(){
    setUpSlideInitial()
    setUpClickOnImage()
    setInterval(function (){
        setCarouselTranslate()
    },3000)
    
}

function setUpClickOnImage(){
    carousel_image.forEach((element)=>{
        element.addEventListener('click',()=>{
            showCarouselModal();
        })
    })
}

function setUpSlideInitial(){
    carousel_container.style.transition = 'none';
    counter = 0;
    carousel_container.style.transform  = 'translateX('+(-image_width*counter) + 'px)';
}

function setCarouselTranslate(){

    
    counter++;
    carousel_container.style.transition = 'transform ease 0.4s';
    carousel_container.style.transform  = 'translateX('+(-image_width*counter) + 'px)';
    if (counter == num_image/2+1 ) {
        setUpSlideInitial();
    } 
}