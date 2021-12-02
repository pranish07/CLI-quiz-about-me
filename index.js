var readlineSync = require('readline-sync');
 //introduction
 var intro = readlineSync.question("what is your name? ")
 console.log("welcome" + intro + " I'm so glad you're here.");

 //score
 var score =0;

var highScore = [
  {
    name:"pranish",
    score: 5
  },
];

 //function 
 function quiz(question,answer){
   var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right");
    score++;
  }else{
    console.log("wrong");
   
  }
  console.log("Your current score is : " + score);
  console.log("-----------");
  
 }

//object
var questions = [
  {
    question:"where country is pranish is from? ",
    answer:"Nepal"
  },
  {
    question:"what is pranish's favorite color? ",
    answer:"white"
  },
   {
    question:"what is pranish's favorite food? ",
    answer:"pizza"
  },
   {
    question: "what is pranish's favorite sport? " ,
    answer:"football"
  },
   {
    question:"what is pranish's favorite anime? " ,
    answer:"Naruto"
  }
];

//for loop
function game(){
for(var i=0; i<questions.length;i++){
  var userQuestions = questions[i];
  quiz(userQuestions.question,userQuestions.answer);

}
}

function showScores(){
  console.log("Your final score is : " + score);

  console.log("-------");
  console.log("PS: if you got the high score, screenshot it and send it to me.i'll update it as soon as possible")
  console.log("High Scorers: ")
 highScore.map(score=>console.log(score.name,":", score.score));
}

game();
showScores();


