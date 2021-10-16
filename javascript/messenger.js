function lighten_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  var search_bar_div = document.querySelector(".search_bar_div");
  search_bar.style="background:white;border-color:red;width:100%;";
}
function darken_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  var search_bar_div = document.querySelector(".search_bar_div");
  search_bar.style="background: #EBECF0;border-color:black;width: 10rem;";
}
function OpenChangeBox() {
  document.querySelector(".change_logic").style.display = 'block';
  document.querySelector("body").querySelectorAll("input:not(input.change_input)").forEach((input) => { input.disabled = true; })
  document.querySelector("body").querySelectorAll("button:not(button#change_input)").forEach((button) => { button.style.pointerEvents = "none"; })
  document.querySelector("body").querySelectorAll("a").forEach((button) => { button.style.pointerEvents = "none"; })
  document.querySelector("body").querySelectorAll("div:not(div.change_logic, div.change_logic *)").forEach((div) => { div.style.opacity = "0.5" })
}
function CloseChangeBox(){
  var nickname = document.querySelector('.change_input');
  var error = document.querySelector('.nickname_error');
  if (nickname.value.length > 15){
    error.innerHTML ="No more than 15 characters!";
    return;
  }
  document.getElementById("nickname").innerHTML = nickname.value ;
  document.querySelector(".change_logic").style.display = 'none';
  document.querySelector("body").querySelectorAll("input:not(input.change_input)").forEach((input) => { input.disabled = false; })
  document.querySelector("body").querySelectorAll("button:not(button#change_input)").forEach((button) => { button.style.pointerEvents = ""; })
  document.querySelector("body").querySelectorAll("a").forEach((button) => { button.style.pointerEvents = ""; })
  document.querySelector("body").querySelectorAll("div:not(div.change_logic,div.change_logic *)").forEach((div) => { div.style.opacity = "1" })
  error.innerHTML = ""
}
window.onload=function () {
  var post_action_click_count = Array.apply(null, Array(document.querySelectorAll(".post_action_button").length)).map(Number.prototype.valueOf,0);
  var details_toggle_click_count = 0;
  var post_action_button = document.querySelectorAll(".post_action_button");
  var upload_function_div = document.querySelectorAll(".upload_function_div");
  var details_toggle = document.querySelector(".details_toggle");
  var group_details = document.querySelector(".group_details");
  post_action_button.forEach((item, i) => {
    post_action_button[i].addEventListener("click", function () {
      post_action_click_count[i]+=1;
      if (post_action_click_count[i]%2==0){
        upload_function_div[i].style="display:none";
      }else{
        upload_function_div[i].style="display:block";
      }
    })
  });
  document.onkeydown=function (e) {
    if (e.key === "Escape") {
      document.querySelector(".change_logic").style.display = 'none';
      document.querySelector("body").querySelectorAll("input:not(input.change_input)").forEach((input) => { input.disabled = false; })
      document.querySelector("body").querySelectorAll("button:not(button#change_input)").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("a").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("div:not(div.change_logic,div.change_logic *)").forEach((div) => { div.style.opacity = "1" })
    }
  }
  let colorpicker = document.getElementById("colorpicker");
  let background_message_sent = document.querySelectorAll("div.m_sent>.content");
  let text = document.querySelectorAll("div.m_sent>.content>p")

  background_message_sent.forEach((item, i) => {
    background_message_sent[i].style.background = colorpicker.value;
    colorpicker.addEventListener("input", function(event){
      hex = colorpicker.value;
      hex_to_rgb = [parseInt(hex.charAt(1)+hex.charAt(2), 16), parseInt(hex.charAt(3)+hex.charAt(4), 16), parseInt(hex.charAt(5)+hex.charAt(6), 16)]
      background_message_sent[i].style.background = event.target.value;
      if (Math.round(hex_to_rgb[0] * 0.299+hex_to_rgb[1] * 0.587+hex_to_rgb[2] * 0.114)>125){
        text[i].style.color = "black";
      }else{
        text[i].style.color = "white";
      }
    });
  });
  details_toggle.addEventListener("click", function toggle_details() {
    console.log("fehwofewoi");
    details_toggle_click_count+=1;
    if (details_toggle_click_count%2==1){
      group_details.style = "flex-basis: 0%";
    }else{
      group_details.style = "flex-basis: 30%";
    }
  })
}
