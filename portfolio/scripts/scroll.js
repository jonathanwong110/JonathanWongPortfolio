function scrollToSection(x) {
  let elementPosition = document.getElementById(x).offsetTop;
  window.scrollTo(0, elementPosition);
}