//set counter value
let counter = 0;

//query id='value' and the classes for each buttons
let value = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn"); //matches all values of class = 'btn ...' within the html file

//forEach element in the HTML file that contians class = 'btn ...'
buttons.forEach((btn) => {
  //adding an eventlistener to the callback function
  btn.addEventListener("click", (clicked) => {
    let action = clicked.currentTarget.classList; //this line returns list = ["btn", anybutton clicked, value: "btn decrease"]
    if (action.contains("decrease")) {
      counter--;
      //console.log(action); debugging
    } else if (action.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
      value.textContent = counter;
      if (counter < 0) {
        value.style.color = "red";
      } else if (counter > 0) {
          value.style.color = "green";
      } else {
          value.style.color = 'var(--clr-grey-1)';
      }
  });
});
