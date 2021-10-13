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

function lighten_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  search_bar.style.background="white";
}
function darken_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  search_bar.style.background="#EBECF0";
}
window.onload=function () {
  document.querySelector(".follow_user>button").addEventListener("click", function followed () {
    document.querySelector(".follow_user>button").innerHTML = "Followed";
  })

}
