window.addEventListener('load' ,()=>{
    var nav = document.getElementById('nav');
    document.addEventListener('scroll' , ()=>{
        if(scrollY > 50) {
            nav.classList.add('scrolling')
        }else{
            nav.classList.remove('scrolling')
            if(toggleMenu.classList.contains('menu-toggle') && scrollY == 50) {
                toggleMenu.classList.remove('menu-toggle') ;
            }  
        }
    });
    var toggleBtn = document.getElementById('toggler');
    var toggleMenu = document.getElementById('toggle');
    var toggleSvg = document.querySelector('.nav-item.menu-toggler img');
    toggleBtn.addEventListener('click' , ()=>{
        if(toggleMenu.classList.contains('menu-toggle')) {

            toggleMenu.classList.remove('menu-toggle') ;
            toggleSvg.attributes.src.nodeValue = './ico/menu.svg' ;
            if(scrollY <= 50 ) nav.classList.remove('scrolling');
            return;
        }  
        toggleMenu.classList.add('menu-toggle') ;
        nav.classList.add('scrolling');
        toggleSvg.attributes.src.nodeValue = './ico/close.svg' ;


        
    });

    
});