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
  var post_action_button = document.querySelectorAll(".post_action_button");
  var post_action_div = document.querySelectorAll(".post_action_div");
  
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
  document.onkeydown=function (e) {
    if (e.key === "Escape") {
      document.querySelector(".change_logic").style.display = 'none';
      document.querySelector("body").querySelectorAll("input:not(input.change_input)").forEach((input) => { input.disabled = false; })
      document.querySelector("body").querySelectorAll("button:not(button#change_input)").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("a").forEach((button) => { button.style.pointerEvents = ""; })
      document.querySelector("body").querySelectorAll("div:not(div.change_logic,div.change_logic *)").forEach((div) => { div.style.opacity = "1" })
    }
  }

}
