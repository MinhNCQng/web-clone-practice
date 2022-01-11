
var caurousel_image_modal_count = 0;
const imgs = document.querySelectorAll(".carousel-model-image img")
const carouselModal = document.querySelector(".carousel-modal")
const left = document.querySelector(".carousel-modal .fa-chevron-left")
const right = document.querySelector(".carousel-modal .fa-chevron-right")
const full_screen_icon = document.getElementsByClassName(".full-screen-mode");
const close_carousel_button = carouselModal.querySelector(".fa-times")
const cake_collection_title = document.querySelector(".cake-collection-title")
function setUpDefaultCarousel(){
    caurousel_image_modal_count = 0;
    hideAllCarouselImage();
    removeHideClass(imgs[caurousel_image_modal_count])
}
function showCarouselModal(){
    removeHideClass(carouselModal);
}
function hideAllCarouselImage(){
    imgs.forEach((element,index) => {
        element.classList.add('hide')
        element.addEventListener('animationend', function(){
            if (index != caurousel_image_modal_count) this.classList.add('hide')
        })
    })
}
function setUpCarouselModal(){
    setUpDefaultCarousel()
    right.addEventListener('click',function(){
        leftCarouselClick()
        
    })
    left.addEventListener('click',function(){
        rightCarouselClick()
    })
    close_carousel_button.addEventListener('click',function(){
        closeCarouselModal()
        cake_collection_title.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })

    
}

function scrollToJustAbove(element, margin=20) {
    let dims = element.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims.top - margin);
}

function closeCarouselModal(){
    addHideClass(carouselModal);

}


function leftCarouselClick(){
    imgs[caurousel_image_modal_count++].style.animation = "fadeOutBright 0.5s linear"
    caurousel_image_modal_count = (caurousel_image_modal_count+ imgs.length)%imgs.length
    imgs[caurousel_image_modal_count].classList.remove("hide")
    imgs[caurousel_image_modal_count].style.animation = "fadeInBright 0.6s linear"
}

function rightCarouselClick(){
    imgs[caurousel_image_modal_count--].style.animation = "fadeOutBright 0.5s linear"
    caurousel_image_modal_count = (caurousel_image_modal_count+ imgs.length)%imgs.length
    imgs[caurousel_image_modal_count].classList.remove("hide")
    imgs[caurousel_image_modal_count].style.animation = "fadeInBright 0.6s linear"
}



function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    }

}