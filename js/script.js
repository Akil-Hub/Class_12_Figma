$(document).ready(function () {
  var TOTAL_DURATION = 3000;

  // First pass: calculate and set fixed widths
  $(".counter").each(function () {
    var $this = $(this);
    var target = parseInt($(this).text().replace(/,/g, "")) || 0;
    var formattedTarget = target.toLocaleString();

    // Temporarily show final number to measure its width
    $this.css("visibility", "hidden");
    var originalText = $this.text();
    $this.text(formattedTarget);

    // Get the width and add some padding
    var width = $this.width() + 10; // +10px padding

    // Restore original text
    $this.text(originalText);
    $this.css("visibility", "visible");

    // Apply fixed width
    $this.css({
      display: "inline-block",
      width: width + "px",
      "text-align": "center",
    });
  });

  // Small delay to ensure widths are applied
  setTimeout(function () {
    // Second pass: animate the numbers
    $(".counter").each(function () {
      var $this = $(this);
      var target = parseInt($(this).text().replace(/,/g, "")) || 0;

      // Reset to 0
      $this.text("0");

      // Animate
      var start = 0;
      var steps = 100;
      var stepTime = TOTAL_DURATION / steps;
      var stepValue = target / steps;

      var counter = setInterval(function () {
        start += stepValue;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        $this.text(Math.floor(start).toLocaleString());
      }, stepTime);
    });
  }, 100);

  $(".multiple-items").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,

    rtl: false,
    prevArrow: '<i class="fa-solid fa-circle-arrow-left slick-prev"></i>',
    nextArrow: '<i class="fa-solid fa-circle-arrow-right slick-next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
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
  });
})

//Jquerry button animation

// code for slide show

// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 3
// });
