// Obj: See what it do  --> eventListeners
//----------------------------------------- TestEvents:
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key

// arrow Syntax === const whateverFunctionName = () => {}

// -------------------------------------------
// .addEventListener([whatTypeOfEvent] , functionToBeExecuted)
// -------------------------------------------

let mainScreen = document.querySelector(".screen");

const showMeClick = () => {
  let ourButton = document.querySelector(".btnSm");
  // Target the RECIPIENT of the event
  ourButton.addEventListener("click", () => {
    mainScreen.innerHTML = "You aint messing with my click";
  });
};

showMeClick();
// ---is how you call/ initiate the function in js

const showMeMouseOver = () => {
    let ourButton = document.querySelector(".gridSq");
    // Target the RECIPIENT of the event
    ourButton.addEventListener("mouseover", () => {
      ourButton.style.backgroundColor = "pink"
    });
  };

  showMeMouseOver()