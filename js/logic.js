// affix the navbar after scroll below header 
$('nav').affix({
      offset: {
        top: $('header').height()-$('nav').height()
      }
});	

// highlight the top nav as scrolling occurs 
$('body').scrollspy({ target: 'nav' })

// smooth scrolling for nav sections 
$('nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// smooth scrolling for work-xp section
$('section .col-md-6 > a[href^="#work-xp"]').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})


// smooth scrolling for contact section
$('section .col-md-6 p > a[href^="#contact"]').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})

