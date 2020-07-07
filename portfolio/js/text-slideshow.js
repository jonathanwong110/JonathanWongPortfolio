var myIndex = 0;
textCarousel();

function textCarousel() {
  var i;
  var x = document.getElementsByClassName("image-text-heading-2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(textCarousel, 1700);
}