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
    var logo = document.querySelector('.brand img');
    var brandName = document.querySelector('.brand .brand-name');
    var toggleMenu = document.getElementById('toggle');
    var toggleSvg = document.querySelector('.nav-item.menu-toggler img');
    toggleBtn.addEventListener('click' , ()=>{
        if(toggleMenu.classList.contains('menu-toggle')) {
            logo.classList.remove('toggle')
            brandName.classList.remove('toggle')
            toggleMenu.classList.remove('menu-toggle') ;
            toggleSvg.attributes.src.nodeValue = './ico/menu.svg' ;
            if(scrollY <= 50 ) nav.classList.remove('scrolling');
            return;
        }  
        toggleMenu.classList.add('menu-toggle') ;
        nav.classList.add('scrolling');
        toggleSvg.attributes.src.nodeValue = './ico/close.svg' ;
        logo.classList.add('toggle')
        brandName.classList.add('toggle')


        
    });
    //  window.addEventListener('resize' , ()=>{
    //     if(document.body.clientWidth > 950) {
    //         console.log('yup')
    //         logo.classList.remove('toggle');
    //         brandName.classList.remove('toggle');
    //         toggleMenu.classList.remove('menu-toggle') ;
    //         toggleSvg.attributes.src.nodeValue = './ico/menu.svg' ;
    //         if(scrollY <= 50 ) nav.classList.remove('scrolling');
    //     }
    // })
    



    var path = document.location.pathname.split('/')[1];
    var active;
    
    if(active = document.querySelector('nav .active')) active.classList.remove('active');
    if(active = document.querySelector('#'+path.split('.')[0].toLowerCase())) active.classList.add('active');

});