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
  var close_change_profile = document.querySelector(".close_change_profile")
  var follow_button = document.querySelector(".follow_user>button");
  var change_profile_photo = document.querySelector(".change_profile_photo");
  var change_profile_photo_button = document.querySelector(".change_profile_photo_button");
  var upload_button = document.querySelector(".upload_file");
  follow_button.addEventListener("click", function followed () {
    click_count+=1;
    if (click_count%2==0){
      follow_button.innerHTML = "Follow";
      follow_button.style.background="white";
      follow_button.style.color="#ff2400";
    }else{
      follow_button.innerHTML = "Followed";
      follow_button.style.background="#ff2400";
      follow_button.style.color="white";
    }
  })
  change_profile_photo_button.addEventListener("click", function upload_photo() {
    change_profile_photo.style.display="block";
    document.querySelector("body").querySelectorAll("input:not(input.hidden_upload)").forEach((input) => { input.disabled = true; })
    document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = "none"; })
    document.querySelector("body").querySelectorAll("a:not(a.close_change_profile)").forEach((button) => { button.style.pointerEvents = "none"; })
    window.scrollTo(window.pageXOffset || document.change_profile_photo.scrollTop, window.pageYOffset || document.change_profile_photo.scrollTop)
  })
  upload_button.addEventListener("click", function upload_photo() {
    document.querySelector(".hidden_upload").click();
  })
  document.onkeydown=function (e) {
    if (e.key === "Escape") {
      change_profile_photo.style.display = "none";
      document.querySelector("body").querySelectorAll("input:not(input.hidden_upload)").forEach((input) => { input.disabled = false; })
      document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("a:not(a.close_change_profile)").forEach((button) => { button.style.pointerEvents = ""; })
    }
  }
  close_change_profile.addEventListener("click", function close_profile_change_window() {
    change_profile_photo.style.display = "none";
    document.querySelector("body").querySelectorAll("input:not(input.hidden_upload)").forEach((input) => { input.disabled = false; })
    document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = ""; })
    document.querySelector("body").querySelectorAll("a:not(a.close_change_profile)").forEach((button) => { button.style.pointerEvents = ""; })
  })
}



// var blur_elements = document.querySelector("body").querySelectorAll("div:not(div.cookie,div.cookie>*)")
// if (cookie_consent == 'true') {
//     document.querySelector(".cookie").style.display = "none"
//     blur_elements.forEach((div) => { div.style.opacity = "1" })
//     document.querySelector("body").querySelectorAll("a").forEach((button) => { button.style.pointerEvents = "auto"; })
//     document.querySelector("body").querySelectorAll("input").forEach((button) => { button.disabled = ""; })
//     console.log("You have agreed to the cookie policy")
//     localStorage.setItem('cookie-consent', true);
// } else {
//     blur_elements.forEach((div) => { div.style.opacity = "0.65" })
//     document.querySelector("body").querySelectorAll("a:not(a.learn-more)").forEach((button) => { button.style.pointerEvents = "none"; })
//     document.querySelector("body").querySelectorAll("input:not(input.agree)").forEach((button) => { button.disabled = "true"; })
// }
