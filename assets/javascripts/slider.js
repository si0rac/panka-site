function toggleInvisibleSlide() {
  document.getElementById("slide-0").classList.toggle('invisible-slide', true), document.getElementById("slide-alt").classList.toggle('invisible-slide', true);
}

function sliderFadeIn() {
  const slider = document.querySelectorAll(".next-slide > a");
  let sliderArray = Array.from(slider);
  sliderArray.forEach(function(item) {
    item.addEventListener('click', toggleInvisibleSlide);
  })
}
sliderFadeIn();