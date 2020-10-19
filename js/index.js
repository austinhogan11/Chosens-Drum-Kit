// Detecting Button Presses
var drum_buttons = document.querySelectorAll(".drum");
for(var i = 0; i < drum_buttons.length; i++) {

    drum_buttons[i].addEventListener("click", function () {

      var button_innerHTML = this.innerHTML

      make_sound(button_innerHTML);

      button_animation(button_innerHTML);
  });
}

// Detetcing Key Presses
document.addEventListener("keydown", function(e) {
  make_sound(e.key);
  button_animation(e.key);
});

function make_sound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "d":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "j":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;
    case "k":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;
    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    default: console.log(key);

  }
}

function button_animation(current_key) {
  var active_button = document.querySelector("." + current_key);
  active_button.classList.add("pressed");
  setTimeout(function() {
    active_button.classList.remove("pressed");
  }, 100);


}
