
var inquirer = require("inquirer");


function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  }

function ClozeCard(front, back) {
  this.front = front;
  this.back = back;
  this.full = full;
  this.partial = partial;
}

    

function PlayGame(){

  var card1 = new BasicCard("Who wrote the album called 'Dark Side of the Moon?'", 
      "Pink Floyd");
    var card2 = new BasicCard("What is the speed of light?", "186,282 miles per second");
    var card3 = new BasicCard("Who was the 43rd president of the United States?", 
      "George W. Bush");
    var card4 = new BasicCard("What is the most read book of all time?", "The Koran");
    var card5 = new BasicCard("Who wrote the screenplay for 'Lord of the Rings'?", "Peter Jackson");

    var score = 0;
    var cards = [];

  for(i = 0; i < cards.length; i++){

  if(cards <= 5){
    inquirer.prompt({
      name: "cardOne",
      message: card1.front
    }).then(function(answers){
      if(answers.cardOne === card1.back) {
        cards.push[i];
        console.log("Your answer was: " + answers.cardOne);
        console.log("The correct answer was: " + card1.back);
        console.log("Nice! Your score is now " + score);
        PlayGame();

    } else {
      cards.push[i];
      score--;
      console.log("Sorry! Your score is now " + score);
      PlayGame();
    }

    });
  } 

  if(cards>=1 && cards < 5){
    inquirer.prompt({
      name: "cardTwo",
      message: card2.front
    }).then(function(answers){
      if(answers.cardTwo === card2.back){
        cards.push[i];
        score++;
        console.log("Your answer was: " + answers.cardTwo);
        console.log("The correct answer was: " + card2.back);
        console.log("Nice! Your score is now: " + score);
        PlayGame();
      } else {
        cards.push[i];
        score--;
        console.log("Sorry! Your score is now: " + score);
        PlayGame();
      }
    });   
  }

  if(cards>=2 && cards < 5){
    inquirer.prompt({
      name: "cardTwo",
      message: card2.front
    }).then(function(answers){
      if(answers.cardTwo === card2.back){
        responses.push[i];
        score++;
        cards++;
        console.log("Your answer was: " + answers.cardTwo);
        console.log("The correct answer was: " + card2.back);
        console.log("Nice! Your score is now: " + score);
        PlayGame();
      } else {
        cards.push[i];
        console.log("Sorry! Your score is now: " + score);
        PlayGame();
      }
    });
  }

  if(cards>=3 && cards < 5){
    inquirer.prompt({
      name: "cardThree",
      message: card3.front
    }).then(function(answers){
      if(answers.cardThree === card3.back){
        cards.push[i];
        score++;
        console.log("Your answer was: " + answers.cardTwo);
        console.log("The correct answer was: " + card2.back);
        console.log("Nice! Your score is now: " + score);
        PlayGame();
      } else {
        cards.push[i];
        score--;
        console.log("Sorry! Your score is now: " + score);
        PlayGame();
      }
    });
  }

  if(cards>=4 && cards < 5){
    inquirer.prompt({
      name: "cardFour",
      message: card4.front
    }).then(function(answers){
      if(answers.cardFour === card4.back){
        cards.push[i];
        score++;
        console.log("Your answer was: " + answers.cardTwo);
        console.log("The correct answer was: " + card2.back);
        console.log("Nice! Your score is now: " + score);
        PlayGame();
      } else {
        cards.push[i];
        score--;
        console.log("Sorry! Your score is now: " + score);
        PlayGame();
      }
    });  
  }

    if(cards === 5){
    inquirer.prompt({
      name: "cardFive",
      message: card5.front
    }).then(function(answers){
      if(answers.cardFive === card5.back){
        cards.push[i];
        score++;
        console.log("Your answer was: " + answers.cardTwo);
        console.log("The correct answer was: " + card2.back);
        console.log("Nice! Your score is now: " + score);
        PlayGame();
      } else {
        cards.push[i];
        score++;
        console.log("Sorry! Your score is now: " + score);
        PlayGame();
      }
    });
  }
}
}

PlayGame();
