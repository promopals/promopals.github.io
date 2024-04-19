$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

/****************** page scrolling ***************/
$.scrollIt({
  topOffset: -50,
});

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

function loopTexts(texts) {
  for (let i = 0; i < texts.length; i++) {
    setTimeout(() => typeText(texts[i]), 4800 * i);
  }
  setTimeout(() => loopTexts(texts), 4800 * texts.length);
}

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  let texts = [
    "2 for 1 Pizza",
    "Happy Hour 2 for 1",
    "40k Burger",
    "30% Off Dinner Menu",
    "All Tacos 20k",
    "20K Sushi Saturday",
    "60K Vegan Buffet",
    "All You Can Eat Pancakes",
    "Free-Flow Cocktails",
    "55K Pasta Wednesday",
    "2 For 1 Beers",
    "60K Brunch",
    "Sunday Pizza Party",
    "2 for 1 Ramen",
    "50% Off Daily Baked",
  ];

  loopTexts(texts);
});
