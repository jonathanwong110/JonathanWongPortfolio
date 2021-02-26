var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}

$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});

function changeNavbarIcon(x) {
  x.classList.toggle("change");
}