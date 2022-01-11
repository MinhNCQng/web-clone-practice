function main(){
    initial()
    
}

function initial(){
    setUpSlider()
    setUpInsModal()
    setUpNav()
    setUpCarouselModal();
}


function getFormData(form){
    const formData = {}
    const list_input = form.target.querySelectorAll("input")
    list_input.forEach((ele)=>{
        formData[[ele.name]] = ele.value
    })
    const message = form.target.querySelector("textarea")
    
    formData[[message.name]] = message.value
    console.log(formData)
}


function addHideClass(element){
    if (!element.classList.contains("hide")) element.classList.add('hide');
}
function removeHideClass(element){
    if (element.classList.contains("hide")) element.classList.remove('hide');
}






main()