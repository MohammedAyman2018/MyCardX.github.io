$(window).on('load', function() {
  let btn = $('.navbar-toggle'),
    nav = $('.nav'),
    li = $('.nav ul li'),
    offset = $('nav').offset().top;

  $(window).on('scroll', function() {
    console.log($('nav')[0].classList, window.pageYOffset, `offset ${offset}`)
    if (window.pageYOffset > offset) $('nav').addClass('bgt');
    else $('nav').removeClass('bgt');
  })

  btn.on('click', function() {
    $(nav).animate({
      width: 'toggle'
    });
    $(nav).css('display', 'flex');
  });

  $(li).mouseover(function() {
    $(li).removeClass('active');
    $(this).addClass('active');
  });

  $(".typed").typed({
    strings: ["Developer.", "Designer.", "Freelancer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|"
  });

  // ==================== Debug Me ============================= \\ 
  $('a[href="#aboutMe"]').on('click' , function(){
    $('html, body').animate({
      scrollTop: $('#aboutMe').offset().top
    }, 500);
  });

  
});

new WOW().init();
