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
  var post_action_click_count = Array.apply(null, Array(document.querySelectorAll(".post_action_button").length)).map(Number.prototype.valueOf,0);
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
  var heart_icon = document.querySelectorAll(".heart_icon");
  var comment_icon = document.querySelectorAll(".comment_icon");
  var share_icon = document.querySelectorAll(".share_icon");
  var login_input = document.querySelectorAll(".login_input");
  var login_placeholder = document.querySelectorAll(".placeholder");
  var bookmark_uncheck = document.querySelectorAll(".bookmark_uncheck");
  var bookmark_check = document.querySelectorAll(".bookmark_check");
  var signin_option = document.querySelector(".signin_option");
  var login_form = document.querySelector(".login_form");
  var post_action_button = document.querySelectorAll(".post_action_button");
  var post_action_div = document.querySelectorAll(".post_action_div");
  var post_action_option = document.querySelectorAll(".post_action_div div"); // will be used later
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
    heart_icon[i].addEventListener("click", function () {
      heart_click_count[i]+=1;
      if (heart_click_count[i]%2==0){
        heart_icon[i].style="color:black;font-size: 3rem;text-align:center;transition: 0.3s ease all;";
      }else{
        heart_icon[i].style="color:red;font-size: 3.1rem;text-align:center;transition: 0.3s ease all;";
      }
    })
  });
  post_action_button.forEach((item, i) => {
    post_action_button[i].addEventListener("click", function () {
      post_action_click_count[i]+=1;
      if (post_action_click_count[i]%2==0){
        post_action_div[i].style="display:none";
      }else{
        post_action_div[i].style="display:block";
      }
    })
  });
  // fewofewiofjewoifjwefoiewjfweio
  login_input.forEach((item, i) => {
      login_input[i].addEventListener("focus", function () {
        login_placeholder[i].style="margin-top: -4.5rem;margin-left: 0.6rem;font-size: 0.7rem;color: red;";
      })
      login_input[i].addEventListener("blur", function () {
        if (login_input[i].value!=""){
          login_placeholder[i].style="margin-top: -4.5rem;margin-left: 0.6rem;font-size: 0.7rem;color: red;";
        }else if (login_input[i].value=="") {
          login_placeholder[i].style="margin-top: -3.9rem;margin-left: 1rem;color: grey;transition: 0.2s ease all;";
        }
      })
  });
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
    document.querySelector("body").querySelectorAll("input:not(div.signup_form input)").forEach((input) => { input.disabled = true; })
    document.querySelector("body").querySelectorAll("button:not(div.signup_form button)").forEach((button) => { button.style.pointerEvents = "none"; })
    document.querySelector("body").querySelectorAll("a:not(div.signup_form a)").forEach((button) => { button.style.pointerEvents = "none"; })
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

  // Bookmark
  bookmark_check.forEach((item, i) => {
    bookmark_check[i].addEventListener("click", function bookmark_checked() {
      bookmark_uncheck[i].style="display:block;font-size: 3rem;transition: 0.3s ease all;";
      bookmark_check[i].style="display:none;font-size: 3.1rem;transition: 0.3s ease all;";
    })
  });
  bookmark_uncheck.forEach((item, i) => {
    bookmark_uncheck[i].addEventListener("click", function bookmark_unchecked() {
      bookmark_check[i].style="display:block;font-size: 3.1rem;color:orange;transition: 0.3s ease all;";
      bookmark_uncheck[i].style="display:none;font-size: 3rem;transition: 0.3s ease all;";
    })
  });
  signin_option.addEventListener("click", function display_signin_form() {
    login_form.style="display:block;";
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
