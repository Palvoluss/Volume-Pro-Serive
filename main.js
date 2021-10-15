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

$(".prev-block").click(function() {
  window.alert(`you Clicked the button`);
});

// SIDEBAR CONTROLLER

function openNav() {
  let element = document.getElementById("mySidebar")
  element.classList.toggle("sidebar")
}

function closeNav() {
  console.log("devi implementare closeNav")

}