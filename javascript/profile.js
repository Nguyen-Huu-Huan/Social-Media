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
  var signup = document.querySelector(".signup");
  var sign_up_form = document.querySelector(".signup_form");
  var close_signup = document.querySelector(".close_signup");
  var verify_email = document.querySelector(".verify_email");
  var email_sent = document.querySelector(".email_sent");
  var change_background = document.querySelector(".change_background");
  var background = document.querySelector(".background");
  // Follow button
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
  // Change background
  change_background.addEventListener("mouseover", function upload_photo() {
    console.log('fewfew');
    background.style = "filter: blur(5px);cursor: pointer;";
  })
  // Change photo
  change_profile_photo_button.addEventListener("click", function upload_photo() {
    change_profile_photo.style.display="block";
    document.querySelector("body").querySelectorAll("input:not(input.hidden_upload)").forEach((input) => { input.disabled = true; })
    document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = "none"; })
    document.querySelector("body").querySelectorAll("a:not(a.close_change_profile)").forEach((button) => { button.style.pointerEvents = "none"; })
    document.querySelector("body").querySelectorAll("div:not(div.change_profile_photo,div.change_profile_photo *)").forEach((div) => { div.style.opacity = "0.65" })
  })
  upload_button.addEventListener("click", function upload_photo() {
    document.querySelector(".hidden_upload").click();
  })

  close_change_profile.addEventListener("click", function close_profile_change_window() {
    change_profile_photo.style.display = "none";
    document.querySelector("body").querySelectorAll("input:not(input.hidden_upload)").forEach((input) => { input.disabled = false; })
    document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = ""; })
    document.querySelector("body").querySelectorAll("a:not(a.close_change_profile)").forEach((button) => { button.style.pointerEvents = ""; })
    document.querySelector("body").querySelectorAll("div").forEach((div) => { div.style.opacity = "1" })
  })
  // Sign up button
  signup.addEventListener("click", function display_signup_form() {
    sign_up_form.style = "display: block;";
    document.querySelector("body").querySelectorAll("input:not(input.rmit_email)").forEach((input) => { input.disabled = true; })
    document.querySelector("body").querySelectorAll("button:not(button.verify_email)").forEach((button) => { button.style.pointerEvents = "none"; })
    document.querySelector("body").querySelectorAll("a:not(a.close_signup)").forEach((button) => { button.style.pointerEvents = "none"; })
    document.querySelector("body").querySelectorAll("div:not(div.signup_form,div.signup_form *)").forEach((div) => { div.style.opacity = "0.65" })
  })
  close_signup.addEventListener("click", function close_profile_change_window() {
    sign_up_form.style.display = "none";
    document.querySelector("body").querySelectorAll("input:not(input.rmit_email, input.verify_email)").forEach((input) => { input.disabled = false; })
    document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = ""; })
    document.querySelector("body").querySelectorAll("a:not(a.close_signup)").forEach((button) => { button.style.pointerEvents = ""; })
    document.querySelector("body").querySelectorAll("div").forEach((div) => { div.style.opacity = "1" })
  })
  verify_email.addEventListener("click", function display_email_sent() {
    email_sent.style.display= "block";
    console.log("fwefijwe");
  })
  // Escape Binding
  document.onkeydown=function (e) {
    if (e.key === "Escape") {
      change_profile_photo.style.display = "none";
      document.querySelector("body").querySelectorAll("input:not(input.hidden_upload)").forEach((input) => { input.disabled = false; })
      document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("a:not(a.close_change_profile)").forEach((button) => { button.style.pointerEvents = ""; })
      sign_up_form.style.display = "none";
      document.querySelector("body").querySelectorAll("input:not(input.rmit_email, input.verify_email)").forEach((input) => { input.disabled = false; })
      document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("a:not(a.close_signup)").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("div").forEach((div) => { div.style.opacity = "1" })
    }
  }
}
