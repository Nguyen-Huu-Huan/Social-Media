function lighten_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  search_bar.style="background:white;border-color:red;";
}
function darken_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  search_bar.style="background: #EBECF0;border-color:black;";
}
window.onload=function () {
  var follow_click_count = 0;
  var heart_click_count = Array.apply(null, Array(document.querySelectorAll(".heart_icon").length)).map(Number.prototype.valueOf,0);
  console.log(heart_click_count);
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
  var milestone_button = document.querySelector(".change_milestone");
  var edit_milestone = document.querySelector(".edit_milestone");
  var close_milestone = document.querySelector(".close_milestone");
  var change_background = document.querySelector(".change_background");
  var background = document.querySelector(".background");
  var heart_icon = document.querySelectorAll(".heart_icon");
  var comment_icon = document.querySelectorAll(".comment_icon");
  var share_icon = document.querySelectorAll(".share_icon")
  // Follow button
  follow_button.addEventListener("click", function followed () {
    follow_click_count+=1;
    if (follow_click_count%2==0){
      follow_button.innerHTML = "Follow";
      follow_button.style.background="white";
      follow_button.style.color="#ff2400";
    }else{
      follow_button.innerHTML = "Followed";
      follow_button.style.background="#ff2400";
      follow_button.style.color="white";
    }
  })
  heart_icon.forEach((item, i) => {
    heart_icon[i].addEventListener("click", function (target) {
      heart_click_count[i]+=1;
      var hex_color = "";
      if (heart_click_count[i]%2==0){
        hex_color = "000000";
      }else{
        hex_color = "ff0000";
      }
      heart_icon[i].src = "https://img.icons8.com/external-justicon-lineal-justicon/64/"+hex_color+"/external-heart-notifications-justicon-lineal-justicon.png";
    })
  });
  // comment_icon.addEventListener("click", function turn_red() {
  //   comment_icon.src = "https://img.icons8.com/ios/50/000000/chat-message.png";
  // })
  // share_icon.addEventListener("click", function turn_red() {
  //   share_icon.src = "https://img.icons8.com/ios/50/000000/share-3.png";
  // })
  // Change background
  change_background.addEventListener("mouseover", function upload_photo() {
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
  })
  // Edit milestone button
  milestone_button.addEventListener("click", function display_change_milestone() {
    edit_milestone.style = "display: block;";
    // document.querySelector("body").querySelectorAll("input:not(input.rmit_email)").forEach((input) => { input.disabled = true; })
    // document.querySelector("body").querySelectorAll("button:not(button.verify_email)").forEach((button) => { button.style.pointerEvents = "none"; })
    // document.querySelector("body").querySelectorAll("a:not(a.close_signup)").forEach((button) => { button.style.pointerEvents = "none"; })
    document.querySelector("body").querySelectorAll("div:not(div.edit_milestone,div.edit_milestone *)").forEach((div) => { div.style.opacity = "0.65" })
  })
  close_milestone.addEventListener("click", function close_milestone_window() {
    edit_milestone.style.display = "none";
    // document.querySelector("body").querySelectorAll("input:not(input.rmit_email, input.verify_email)").forEach((input) => { input.disabled = false; })
    // document.querySelector("body").querySelectorAll("button:not(button.upload_file)").forEach((button) => { button.style.pointerEvents = ""; })
    // document.querySelector("body").querySelectorAll("a:not(a.close_signup)").forEach((button) => { button.style.pointerEvents = ""; })
    document.querySelector("body").querySelectorAll("div").forEach((div) => { div.style.opacity = "1" })
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
