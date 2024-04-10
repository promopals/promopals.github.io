$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 90);
});

/**********Features********  */
$(".features-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/********** screenshots*********** */
$(".screenshots-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

/********* Testimonials********* */
$(".testimonials-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/********** team-carousel ************* */
$(".team-carousel").owlCarousel({
  loop: true,
  margin: 10,
  // autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

/****************** page scrolling ***************/
$.scrollIt({
  topOffset: -50,
});

/************ Navbar collapse**************/

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
});
//TODO ta in rätt screenshots...
// ta in rätt font till app name navbar..
// lägg till knappar till officiella butiksknapparna
//fixa copy.
//ha med logon i navbaren eller någonstanns? i fottern kanske?
//kanske ta in någon cool js/css för att visa app screenshots. Interaktivt? Lite so nookapp.io auto scroll
//kanske visa upp själva promo-card bilder och inte rena screenshots. Några såna i stycket fun facts?

//GÖR DEN EXTREMT MYCKET Mindre... skippa allt onödigt..
//fottern ska vara minimal. länkar till appstores igen, instagram, email.
//skit i faq just nu. skit i navbar...
//slå ihop awseom features och fun facts till ett stycke med lite screen shots och förklarande text.
//Ha med lite text från onboarding.. kring att det är community based osv..
