$(window).on('load', function() {
  let btn = $('.navbar-toggle'),
    nav = $('.nav'),
    li = $('.nav ul li'),
    offset = $('nav').offset().top;

  // ==================== nav ============================= \\
  $(window).on('scroll', function() {
    if (window.pageYOffset > 600) $('nav').addClass('bgt');
    else $('nav').removeClass('bgt');
  })

  btn.on('click', function() {
    $(nav).animate({
      width: 'toggle'
    });
    $(nav).css('display', 'flex');
  });
  // nav li active
  $(li).mouseover(function() {
    $(li).removeClass('active');
    $(this).addClass('active');
  });
  // ==================== typed js ============================= \\
  $(".typed").typed({
    strings: ["Developer.", "Designer.", "Freelancer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 20,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 9,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|"
  });
  // ==================== Scroll behaviour ============================= \\
  $('a').on('click' ,function(){
    let ref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(ref).offset().top
    }, 500);
  });
  
  // ==================== Gallery ============================= \\
    var gallery = $('#gallery'),
    close = $('#gallery button'),
    open = $('.open-gallery'),
    label_src = $("[data-label]"),
    label = $("#heading");
    
    label_src.click(function(){
      let image_data = $(this).attr('data-label');
      let targetH2 = $(`h2[data-label = ${image_data}]`).html();
      
      label.html(targetH2);
    });

    open.click(function(e){
      gallery.fadeIn(1000)
      e.preventDefault();
    });

    close.click(function (e) {
      gallery.slideUp();
      e.preventDefault();
    });
  // ==================== Owl Carousel ============================= \\
  $('.carousel').carousel('pause');
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  
});

new WOW().init();