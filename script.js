window.addEventListener('load' ,()=>{
    var nav = document.getElementById('nav');
    document.addEventListener('scroll' , ()=>{
        if(scrollY > 50) {
            nav.classList.add('scrolling')
        }else{
            nav.classList.remove('scrolling')
        }
    });
});