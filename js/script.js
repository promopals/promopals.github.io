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
//! Ta bort screenshots sektionen. Ha bara en screen shot på startsidan och sen ta fram flera bilder på promo-cards..
//  Ha features listan.
//sno lite copy från appbutikens text?
// lägg till knappar till officiella butiksknapparna
//fixa copy.
//ha med logon i navbaren eller någonstanns? i fottern kanske?
//Om man är inne på en stor webläsare så visa qrkod för playstore/appstore.. dölj den i repsonse/css läge.

//TODO kolla på notion vad jag behöver inför release... gå igeom o verkligen välj vad som behöver göras i vilken ordning..
//TODO lås ner api... det fungerade inte längre? elelr vad var problemet?
//Features: delning och fråga om app review kommer seanre..
//kör ut till riktiga butikerna... var inte rädd för det..

//TODO stickers kolla med nookapp.. tokopedia?
//designa en sticker med QR-länk till playstore/appstore.
//stickerns ska ha qr code. namn: Promo Pals Bali. slogan: Maximize Bali, minimize costs.
//kanske min logo? i mitten av qr koden kanske?
//Tänker mig qr kod till vänster med ikon i mitten av koden. sen till höger två rader text App namn + slogan.
//kanske också inkludera instagram/landingpage url under qr.koden
//https://me-qr.com/qr-code-generator/qr#shape

//fottern ska vara minimal. länkar till appstores igen, instagram, email, donation? (om donation så ha en liten för-text i footern om att vi är litet som bara gör det här vid sidan av. Om du känner att du fått värde så uppskattar vi en donation för att kunna fortsätta förbättra promo pals)

//Instagram kan innehålla lite posts från min vardag när jag är ute på cafe/restarungar. Nya promos som kommit upp.
// - nya promos som kommit upp
// - nya features som släpps
// - Be om feedback
// - Fråga vad ni skulle vilja se?
// - Be om fler tips
// - Post om hur många taco tuesdays vi har.
// - Lite insider statisitk. Antal användare, antal promos, antal dagliga användare, mest besökta promon etc..
