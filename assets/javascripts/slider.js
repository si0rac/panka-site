function sliderFadeIn() {
  const slider = document.querySelectorAll(".next-slide > a");
  for (i = 0; i < slider.length; i++) {
    slider[i].addEventListener('click', function() {
      document.getElementById("slide-0").classList.toggle('invisible-slide', true), document.getElementById("slide-alt").classList.toggle('invisible-slide', true);
    })
  }
}
sliderFadeIn();