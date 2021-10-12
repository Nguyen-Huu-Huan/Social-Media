var prevScrollpos = window.pageYOffset;
function hide_horizontal_navbar() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".horizontal_navbar").style.top = "0";
  } else {
    document.querySelector(".horizontal_navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;  
}
