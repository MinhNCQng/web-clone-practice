var load_more_button = document.querySelector(".button.load-more-button");
const ins_images = document.querySelectorAll('.grid-layout-instagram .instagram-item');
const modal_tag = document.querySelector(".cake-info-tags p");
const modal =  document.querySelector(".detail-cake-modal");
const modal_close_button = document.querySelector(".detail-cake-modal .fa-times");
const modal_left_button = document.querySelector(".detail-cake-modal .fa-chevron-left");
const modal_right_button = document.querySelector(".detail-cake-modal .fa-chevron-right");
var modal_ins_image_counter  = 0;

function setUpInsModal(){

    setUpInsButton()
    setUpInstagramImageClickEvent();
    setUpLoadMoreButton()
    
}

function setUpLoadMoreButton(){

    load_more_button.addEventListener('click',()=>{
        displayAllImage()
        addHideClass(load_more_button)
    })
}

function displayAllImage(){
    ins_images.forEach((item)=>{
        removeHideClass(item);
    })
}


function setUpInstagramImageClickEvent(){
    
    ins_images.forEach((img,index)=>{
        img.addEventListener("click", ()=>{
            modal_ins_image_counter = index;
            showInsModal(index);
        });
    })
}


function setUpInsButton(){
    modal_close_button.addEventListener('click',() =>{
        disableModal()
    })
    modal_left_button.addEventListener('click',()=>{
        clickInsLeftButton()
    })
    modal_right_button.addEventListener('click',()=>{
        clickInsRightButton()
    })
}


function clickInsLeftButton(){
    showInsModal(--modal_ins_image_counter);
}

function clickInsRightButton(){
    showInsModal(++modal_ins_image_counter);
}

function disableModal(){
    addHideClass(modal);
}

function showInsModal(targetIndexInsImg){

    changeCurrentInsImg(targetIndexInsImg)
    if (modal.classList.contains('hide')) modal.classList.remove('hide');
    setBoundSlideModal()

}

function setBoundSlideModal(){
    removeHideClass(modal_left_button)
    removeHideClass(modal_right_button)
    
    if (modal_ins_image_counter == 0) addHideClass(modal_left_button)

    if (modal_ins_image_counter == ins_images.length-1) addHideClass(modal_right_button)
}



function changeCurrentInsImg(targetIndexImg){
    const modal_img = document.querySelector(".detail-cake-image"); 

    let currentImg = getInsImageWithIndex(targetIndexImg);
    let currentImgStyle = getStyleImg(currentImg)
    let absoluteUrl = getAbsoluteBGUrl(currentImgStyle)
    modal_img.firstElementChild.src = absoluteUrl;
}



function getAbsoluteBGUrl(style){
    return style.backgroundImage.slice(4, -1).replace(/"/g, "");
}

function getStyleImg(img){
    return img.currentStyle || window.getComputedStyle(img, false);
}

function getInsImageWithIndex(index){
    return ins_images[index];
}