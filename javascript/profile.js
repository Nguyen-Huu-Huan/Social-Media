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
  click_count = 0;
  document.querySelector(".follow_user>button").addEventListener("click", function followed () {
    click_count+=1;
    if (click_count%2==0){
      document.querySelector(".follow_user>button").innerHTML = "Follow";
      document.querySelector(".follow_user>button").style.background="white";
      document.querySelector(".follow_user>button").style.color="#ff2400";
    }else{
      document.querySelector(".follow_user>button").innerHTML = "Followed";
      document.querySelector(".follow_user>button").style.background="#ff2400";
      document.querySelector(".follow_user>button").style.color="white";
    }
  })

}
