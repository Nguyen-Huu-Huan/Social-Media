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
function CurrentChatBox(){
  var chat_box_collections = document.querySelectorAll(".chat_box");
  chat_box_collections.forEach((item, i) => {
    if (item.style.display == "block"){
      save_chat_box = item
      return save_chat_box
    }
  })
}
var image_upload = document.querySelector(".image_upload");
function Openimagefile(){
  image_upload.click();
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
        post_action_button[0].style.transform = "rotate(0deg)"
      }else{
        upload_function_div[i].style="display:block";
        post_action_button[0].style.transform = "rotate(45deg)"
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
  }
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
      }
  }
  //logic to make linear-gradient background
  function active_change_color(elemt){
    var change_box_color = document.getElementById("change_box_color");
    var change_box_color1 = document.getElementById("change_box_color1");
    change_box_color.addEventListener("input", function(){
      elemt.style.background = `linear-gradient(to right, ${change_box_color.value},${change_box_color1.value})`;
    })
    change_box_color1.addEventListener("input", function(){
      elemt.style.background = `linear-gradient(to right, ${change_box_color.value},${change_box_color1.value})`;
    })
  }
  //help to show group name when hover on group logo
  function hover_show_items(){
    var group_name_elms = document.querySelectorAll(".group_name");
    var group_logo_elms = document.querySelectorAll(".group_logo");
    var side_group_icon = document.querySelector(".side_group_icon");
    group_logo_elms.forEach((item, i) => {
      group_logo_elms[i].addEventListener("mouseover", function(){
        group_name_elms[i].style.opacity = "1"
        side_group_icon.style = "flex-basis: 20%"
        group_details.style = "flex-basis: 20%"
      })
      group_logo_elms[i].addEventListener("mouseout", function(){
        group_name_elms[i].style.opacity = "0"
        side_group_icon.style = "flex-basis: 5%"
        group_details.style = "flex-basis: 30%"
      })

    })
    var chat_box_elms = document.querySelectorAll(".chat_box");
    var logo_background = document.querySelectorAll(".group_list");
    group_logo_elms.forEach((item, i) => {
      group_logo_elms[i].addEventListener("click", function(){
        group_current_index = i+1;
        logo_background[i].style.background = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        chat_box_elms[i].style.display = "block"; 
        active_change_color(chat_box_elms[i])
        logo_background.forEach((item, j) => {
          if (i != j){
            logo_background[j].style.background = "none";
            chat_box_elms[j].style.display = "none"; 
          }
        })
      })
    })
  }
  hover_show_items()
  
  //create group function when click on "+" button
  var add_group = document.querySelector("#add_group_button");
  var add_group_box = document.querySelector(".group_dialog");
  var error_notification = document.querySelector(".add_group_error");
  var input_group_name = document.querySelector(".input_group_name");
  var input_group_description = document.querySelector(".input_group_description");
  var commit_button = document.querySelector(".commit_button>button");
  var image_review = document.querySelector(".show_image *");
  add_group.addEventListener("click", function(){
    add_group_box.style.display = "block";
  })
  document.querySelector(".exit_creategroup").addEventListener("click", function(){
    add_group_box.style.display = "none"
    input_group_name.value = ""
    input_group_description.value = ""
    error_notification.textContent= ""
  })
  commit_button.addEventListener("click", function(){
    if ((input_group_name.value.length > 15) || (input_group_description.value > 15)){
      error_notification.textContent = "Invalid! No more than 15 characters"
      console.log("error")
    }
    else{
      var image_commit = document.querySelector(".show_image *").getAttribute('src');
      document.querySelector(".group_collections").insertAdjacentHTML("beforeend", `<div class="group_list"><div><img src="${image_commit}" alt="" class="group_logo"><img src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v2.png" class="online_status_2" style="width: 15px; height: 15px;"><span class="group_name">${input_group_name.value}</span></div></div>`)
      var new_group_index = document.querySelectorAll('.group_list').length;
      document.querySelector(".chat_box_container").insertAdjacentHTML("beforeend", `<div class="chat_box`+` chat_box_${new_group_index}"></div>`)
      error_notification.textContent= ""
      input_group_name.value = ""
      input_group_description.value = ""
      add_group_box.style.display = "none"
      hover_show_items()
    }
  })
  image_upload.addEventListener("change", function(){
    var image_list = this.files[0]
    if (image_list){
      var reader = new FileReader()
      reader.onload = function(){
        image_review.src = reader.result
      }
      reader.readAsDataURL(image_list)
    }
  })
}

