

function setUpNav(){
    const navs = document.querySelectorAll(".header-nav a")
    navs.forEach((ele)=>{
        ele.addEventListener('click',function(e){
            e.preventDefault();
            routerTo(this);
            goToTopWindow();
        })

    })
}

function routerTo(target){
    const navigation_wrappers = document.querySelectorAll(".navigation-wrapper")
    navigation_wrappers.forEach((ele)=>{
        addHideClass(ele)
    })
    const target_wrapper = document.getElementById(target.name);
    removeHideClass(target_wrapper)
}

function goToTopWindow(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
