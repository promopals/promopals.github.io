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

/************ Typing **************/
function typeText(message) {
  var textWrapper = document.querySelector(".ml11 .letters");
  textWrapper.innerHTML = message;
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml11",
      opacity: 1,
      duration: 500,
      easing: "easeOutExpo",
    })
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml11 .line",
      translateX: [
        0,
        document.querySelector(".ml11 .letters").getBoundingClientRect().width +
          10,
      ],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100,
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: ".ml11",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  //TODO gör så denna över överlappande. kan skriver över kanten på sektionen?
  var interval = 5000;
  typeText("Taco Tuesday");
  setTimeout(() => typeText("2 for 1 Pizza"), interval);
  setTimeout(() => typeText("Happy Hour 2 for 1"), interval * 2);
  setTimeout(() => typeText("Breakfast 50% Off"), interval * 3);
  setTimeout(() => typeText("40k Burger"), interval * 4);
  setTimeout(() => typeText("20% Off Dinner Menu"), interval * 5);
  setTimeout(() => typeText("All Tacos 20k"), interval * 6);
  setTimeout(() => typeText("All Tacos 20k"), interval * 7);
  setTimeout(() => typeText("All You Aan Eat Pancakes"), interval * 8);
  setTimeout(() => typeText("Free-Flow Cocktails"), interval * 9);
  setTimeout(() => typeText("55K Pasta Wednesday"), interval * 10);
  setTimeout(() => typeText("2 For 1 Beers"), interval * 11);
  setTimeout(() => typeText("60K Brunch"), interval * 12);
  setTimeout(() => typeText("Saturday Pizza Party"), interval * 13);
  setTimeout(() => typeText("2 for 1 Ramen"), interval * 14);
  setTimeout(() => typeText("Ramen Thursday"), interval * 15);
  setTimeout(() => typeText("50% Off Daily Baked"), interval * 16);
  setTimeout(() => typeText("60K Vegan Buffet"), interval * 17);

  //Hur ska jag använda detta nu?

  //nej ha det som exempel promos:
  //exmepel på promos man kan hitta i appen.

  //rubrik behövs inte kaankse? "Deals waiting for you.." "What to expect.."
  //2 for 1 pizza
  //40k burger
  //All you can eat pancakes
  //2 for 1 coocktails
  //5 bintang 100k
  //20% off Dinner menu
  //All Tacos 20k
  //Margarita 50k
  //
  //...osv

  //! VORE ju coolt att ha ett litet promo_card och det är texten på det kortet som ändras??
  //Alltså ta fram en bild på ett genreisk promo card utan title och skriv ut dessa? blir för mycket overhead att uppdatera kanske..?
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
