var myIndex = 0;
backgroundCarousel();

function backgroundCarousel() {
  var i;
  var x = document.getElementsByClassName("backgroundSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(backgroundCarousel, 3000);
}