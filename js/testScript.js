// Fix the countdown timer first
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/5/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    
        const now = new Date().getTime(),
              distance = countDown - now;

        // Add null checks
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");
        
        if (daysEl) daysEl.innerText = Math.floor(distance / (day));
        if (hoursEl) hoursEl.innerText = Math.floor((distance % (day)) / (hour));
        if (minutesEl) minutesEl.innerText = Math.floor((distance % (hour)) / (minute));
        if (secondsEl) secondsEl.innerText = Math.floor((distance % (minute)) / second);

        // Change from 0 to 1000 to prevent rapid updates
      }, 1000); // Fixed: Changed from 0 to 1000
})();

// Wait for DOM to be ready
$(document).ready(function() {
  
  // jQuery animations
  $("#hide").click(function(){
    $('.box').hide(1000);
  });

  $('#show').click(function(){
    $('.box').show(1000);
  });

  $('#toggle').click(function(){
    $('.box').toggle(1000);
  });

  $('#slideUp').click(function(){
    $('.box').slideUp(1000);
  });

  $('#slideDown').click(function(){
    $('.box').slideDown(1000);
  });

  $('#toggleSlide').click(function(){
    $('.box').slideToggle(1000);
  });

  $('#fadeIn').click(function(){
    $('.box').fadeIn(3000);
  });

  $('#fadeOut').click(function(){
    $('.box').fadeOut(3000);
  });

  $('#fadeToggle').click(function(){
    $('.box').fadeToggle(3000);
  });

  $('#addClass').click(function(){
    $('.box').addClass('greenBox');
  });

  $('#removeClass').click(function(){
    $('.box').removeClass('greenBox');
  });

  $('#toggleClass').click(function(){
    $('.box').toggleClass('greenBox');
  });

  $('.py-2').click(function(){
    $('.changeColor').toggleClass('changeColor1');
  });

  // Initialize slick slider
  $('.parent').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: true,
  
    rtl: false,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]

 
  });
  
  









  
});


/// Back to top button
$(window).on('scroll',function(event){
  if ($(this).scrollTop()>600) {  
    $('.back-to-top').fadeIn(200)
    
  }else{
    $('.back-to-top').fadeOut(200)
  }
})

// Animate the scroll
$('.back-to-top').on('click',function(event){
  event.preventDefault()

  $('html,body').animate({
    scrollTop:0,
  },1000);
})

AOS.init()