var Question1 = document.getElementById("Question1");
var Question2 = document.getElementById("Javascript");
var Question3 = document.getElementById("Primitive");
var comment = document.getElementById("msg");
var startButton = document.getElementById("start");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 20;
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
var submit3 = document.getElementById("submit3");
var timerInterval;
var grade = 0
var gradeEl = document.getElementById("grade");

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  var card = document.getElementById("VisableQuestions");
  card.style.display = "block";

  function setTime() {
    timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left for Quiz.";
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }

    }, 1000);
  }
  function sendMessage() {
    card.style.display = "none";

  }
  setTime();

});


submit1.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("Question2").style.display = "block";

});

submit2.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("Question3").style.display = "block";

});

submit3.addEventListener("click", function (event) {
  event.preventDefault();
  clearInterval(timerInterval);
  document.getElementById("win").style.display = "block";
  document.getElementById("initials").style.display = "block";
gradeTest ()
});

function gradeTest() {
  if (Question1.value) { grade++ }
  if (Question2 == "Javascript") { grade++ }
  if (Question3.value) { grade++ }
  gradeEl.textContent = grade + " is your score";
}







