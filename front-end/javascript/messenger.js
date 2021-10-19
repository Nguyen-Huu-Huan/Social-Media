function lighten_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  var search_bar_div = document.querySelector(".search_bar_div");
  var utility_button = document.querySelector(".utility_button");
  search_bar_div.style="width: 100%;";
  search_bar.style="background:white;border-color:red;width:100%;";
  utility_button.style="display:none;";
}
function darken_search_bar() {
  var search_bar = document.querySelector(".search_bar_input");
  var search_bar_div = document.querySelector(".search_bar_div");
  var utility_button = document.querySelector(".utility_button");
  search_bar.style="background: #EBECF0;border-color:black;width: 7.5rem;";
  utility_button.style="display:flex;justify-content: space-around;width: 40%;";
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
  var details_toggle = document.querySelector(".icon_button_wrapper");
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

  details_toggle.addEventListener("click", function toggle_details() {
    details_toggle_click_count+=1;
    if (details_toggle_click_count%2==1){
      group_details.style = "flex-basis: 0%";
    }else{
      group_details.style = "flex-basis: 30%";
    }
  })
  let menu_button = document.querySelector('.bi-brush');
  let drop_menu = document.querySelector('.color_menu');
  var counter = 0;
  menu_button.addEventListener("click", function () {
    counter += 1;
    if (counter%2 ==1){
      drop_menu.style.opacity = 1;
    }
    else {
      drop_menu.style.opacity = 0;
    }
  });
  document.onclick = function(check){
    if (check_outside_click(check, drop_menu)){
      drop_menu.style.opacity = 0;
      counter = 0;
    }
  };
  function check_outside_click(event, elements) {
      elements = document.querySelectorAll('.bi-brush, .color_menu *, color_menu');
      var len = elements.length;
      var check_click = true;
      for (let i = 0; i<len; i++){
        if (elements[i].contains(event.target) || event.target == elements[i]) {
          check_click = false;
        }
      }
      if (check_click) {
        return true;
      }
      else {
        return false;
      };
  };
  var change_box_color = document.getElementById("change_box_color");
  var change_box_color1 = document.getElementById("change_box_color1");
  change_box_color.addEventListener("input", function(){
    document.getElementsByClassName("chat_box")[0].style.background = `linear-gradient(to right, ${change_box_color.value},${change_box_color1.value})`
  })
  change_box_color1.addEventListener("input", function(){
    document.getElementsByClassName("chat_box")[0].style.background = `linear-gradient(${change_box_color.value},${change_box_color1.value})`
  })
}
