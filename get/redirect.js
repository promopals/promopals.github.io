function load() {
  if (navigator.userAgent.match(/Android/i)) {
    // use Android's redirect
    document.location =
      "https://play.google.com/store/apps/details?id=kodsnickerboa.promopalsbali";
  } else {
    // use iOS redirect
    window.location.replace("https://apps.apple.com/app/id6480505108");
  }
}
window.onload = load;
