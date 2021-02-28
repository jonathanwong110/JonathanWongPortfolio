// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-65px";
//   }
//   prevScrollpos = currentScrollPos;
// }

$(window).scroll(function () {
  var position = window.pageYOffset;
  $('.section').each(function () {
    var target = $(this).offset().top;
    var id = $(this).attr('id');
    var navLinks = $('.navbar-nav.ml-auto li a');
    if (position >= target) {
      navLinks.removeClass('active');
      $('.navbar-nav.ml-auto li a[href*=\\#' + id + ']').addClass('active');
    }
  });
});

$('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

function changeNavbarIcon(x) {
  x.classList.toggle("change");
}