// SWIPER CONTROLLER

var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: false,
        slideshow: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    $(".prev-block-copy").click(function() {
      console.log("clickeeeed");
      document.getElementById("contact").scrollIntoView();
    });
    
    $(".prev-block").click(function() {
      console.log("clickeeeed");
      document.getElementById("contact").scrollIntoView();
    });


// SIDEBAR CONTROLLER

function openNav() {
  let element = document.getElementById("mySidebar")
  element.classList.toggle("sidebar")
}

function closeNav() {
  console.log("devi implementare closeNav")

}