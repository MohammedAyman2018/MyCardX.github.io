
$(window).on('load', function () {
    let btn = $('.navbar-toggle'),
    nav = $('.nav'),
    li = $('.nav ul li'),
    offset = $('nav').offset().top;

    
    
    $(window).on('scroll' , function (){
        console.log( $('nav')[0].classList , window.pageYOffset , `offset ${offset}`)
        if (window.pageYOffset > offset) $('nav')[0].classList.add("sticky");
        else $('nav')[0].classList.remove("sticky");
    })

    btn.on('click' , function(){
        $(nav).animate({
            width: 'toggle'
        });
        $(nav).css('display', 'flex');
    });

    $(li).mouseover(function () {
        $(li).removeClass('active');
        $(this).addClass('active');
    });
});

new WOW().init();
