var rightAnswers = 0
var wrongAnswers = 0
var totalScore = rightAnswers/5

var Q1ANSWER = $("#Q1").value; 
console.log(Q1ANSWER); 

// This function will clear the page and display the user's score when the user clicks the submit button. 
function SubmitAnswers (){
    $("#submit_button").click(function() {
        $("#timeRemaining").text("");
        $("#instructions").text("");
        $("#Q1").text("");
        $("#Q2").text("");
        $("#Q3").text("");
        $("#Q4").text("");
        $("#Q5").text("");
        $("#Q2").text("");
        $("#submit_button").remove();
        clearTimeout(timeoutfive);
        clearTimeout(timeoutten);
        clearTimeout(timeoutfifteen);
        clearTimeout(timeouttwenty);
        clearTimeout(timeouttwentyfive);
        clearTimeout(timeouttimeUp);
        $("#Q1").text("Thanks for playing the Fruits and Vegetables Trivia Game! Your official score is "+ rightAnswers*100+"%.");
        

      });
}

SubmitAnswers(); 


console.log(totalScore); 


// The timer on the page will mark every 5 second interval. 
var timeoutfive = setTimeout(fiveSeconds, 1000 * 5);
var timeoutten = setTimeout(tenSeconds, 1000 * 10);
var timeoutfifteen = setTimeout(fifteenSeconds, 1000 * 15);
var timeouttwenty = setTimeout(twentySeconds, 1000 * 20);
var timeouttwentyfive = setTimeout(twentyfiveSeconds, 1000 * 25);
var timeouttimeUp = setTimeout(timeUp, 1000 * 30);

// Functions to indicate to the user how much time is remaining
function fiveSeconds() {

  // In the element with an id of timeRemaining, add an h4 saying "25 Seconds Left!""
  // Console log 25 seconds left
  $("#timeRemaining").text("");
  $("#timeRemaining").append("<h4>25 Seconds Left!</h4>");
  console.log("25 seconds left");
}

function tenSeconds() {

    // In the element with an id of timeRemaining, add an h4 saying "20 Seconds Left!""
    // Console log 20 seconds left
    $("#timeRemaining").text("");
    $("#timeRemaining").append("<h4>20 Seconds Left!</h4>");
    console.log("20 seconds left");
  }

  function fifteenSeconds() {

    // In the element with an id of timeRemaining, add an h4 saying "15 Seconds Left!""
    // Console log 15 seconds left
    $("#timeRemaining").text("");
    $("#timeRemaining").append("<h4>15 Seconds Left!</h4>");
    console.log("25 seconds left");
  }

  function twentySeconds() {

    // In the element with an id of timeRemaining, add an h4 saying "10 Seconds Left!""
    // Console log 10 seconds left
    $("#timeRemaining").text("");
    $("#timeRemaining").append("<h4>10 Seconds Left!</h4>");
    console.log("10 seconds left");
  }

  function twentyfiveSeconds() {

    // In the element with an id of timeRemaining, add an h4 saying "5 Seconds Left!""
    // Console log 5 seconds left
    $("#timeRemaining").text("");
    $("#timeRemaining").append("<h4>5 Seconds Left!</h4>");
    console.log("5 seconds left");
  }

  function timeUp() {

    // In the element with an id of timeRemaining, add an h4 saying "Time's up!""
    // This function will also clear the page and display the user's score, the same behavior as when you hit the submit button. 
    // Console log 10 seconds left
    $("#timeRemaining").text("");
    $("#timeRemaining").append("<h4>Time's up!</h4>");
    console.log("Time's up!");
    $("#instructions").text("");
    $("#Q1").text("");
    $("#Q2").text("");
    $("#Q3").text("");
    $("#Q4").text("");
    $("#Q5").text("");
    $("#Q2").text("");
    $("#submit_button").remove();
    clearTimeout(timeoutfive);
    clearTimeout(timeoutten);
    clearTimeout(timeoutfifteen);
    clearTimeout(timeouttwenty);
    clearTimeout(timeouttwentyfive);
    clearTimeout(timeouttimeUp);
    $("#Q1").text("Thanks for playing the Fruits and Vegetables Trivia Game! Your official score is "+ totalScore*100+"%.");
  }


// This series of if statements checks each question's answer to see whether or not the user got the question right. Unfortunately, my syntax for grabbing the true or false value from each question is off, and I don't currenlty know how to fix it.  
if (Q1.value == "f") {
    rightAnswers++
} else {
    wrongAnswers++
}; 
console.log("This is the Q1 answer"+Q1.value); 

if (Q2.value == "f") {
    rightAnswers++
} else {
    wrongAnswers++
}; 

if (Q3.value == "t") {
    rightAnswers++
} else {
    wrongAnswers++
}; 

if (Q4.value == "t") {
    rightAnswers++
} else {
    wrongAnswers++
}; 

if (Q5.value == "t") {
    rightAnswers++
} else {
    wrongAnswers++
}; 