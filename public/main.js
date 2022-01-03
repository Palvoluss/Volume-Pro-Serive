// SWIPER CONTROLLER




const $ = (element) => document.querySelector(element)
$('.contact-form').addEventListener('submit',  (e) => {
  e.preventDefault()

  let data = Object.fromEntries(new FormData(e.target).entries())

  const maillist = [
    data.email,
    "shadow_lugia@hotmail.it",
    "pablomctt@gmail.com",
  ];

  maillist.forEach(mail =>{
    sendThisMail(mail, data.subject, data.firstname)
  })
})


const sendThisMail = async (mail, subject, name) =>{
  let result = await fetch(`http://volumeproservice.it/flamingoh.php?mailto=${mail}&subject=${name}&message=${subject}`);
}

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
    
    $(".prev-block, .prev-block-copy").click(function() {
      const id = 'contact';
      const yOffset = -100; 
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    });


// SIDEBAR CONTROLLER

function openNav() {
  let element = document.getElementById("mySidebar")
  element.classList.toggle("sidebar")
}

function closeNav() {
  console.log("devi implementare closeNav")

}