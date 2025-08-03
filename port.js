window.addEventListener('scroll', function(){
    const about = document.getElementById('hero2');
    if(window.scrollY > 500){
        about.classList.add("about");
    }
})

window.addEventListener('scroll', function(){
    const cont = document.getElementById('hero3');
    if(window.scrollY > 950){
        cont.classList.add("con");
    }
})