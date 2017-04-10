
var inquirer = require("inquirer");


function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  }

function ClozeCard(text, close) {
  this.text = text;
  this.close = close;
  
  if(text.includes(close)){
    this.partial = text.replace(close, "...");
  }
  else{ 
    this.error = "Oops, wrong answer";
  }
}

    var cards = [];

    cards[0] = new BasicCard("Who wrote the album called 'Dark Side of the Moon?'", 
      "Pink Floyd");
    cards[1] = new BasicCard("What is the speed of light?", "186,282 miles per second");
    cards[2] = new BasicCard("Who was the 43rd president of the United States?", 
      "George W. Bush");
    cards[3] = new BasicCard("What is the most read book of all time?", "The Koran");
    cards[4] = new BasicCard('Who wrote the screenplay for "Lord of the Rings"?', "Peter Jackson");

    var cloze = [];

    cloze[0] = new ClozeCard("Thomas Jefferson was the 3rd president of the US?", "Thomas Jefferson");
    cloze[1] = new ClozeCard("Apollo 11 was the first successful apollo mission", "Apollo 11");
    cloze[2] = new ClozeCard("Sgt Peppers Lonely Hearts Club Band was written by The Beatles", "The Beatles");
    cloze[3] = new ClozeCard("Taxi was directed by Martin Scorcese", "Martin Scorcese");
    cloze[4] = new ClozeCard("World War 2 ended on the year 1945", "1945");
    cloze[5] = new ClozeCard("The most popular newspaper is the NY Times", "Wall Street Journal");
function PlayGame(){

    inquirer.prompt({
      type: "list",
      message: "Would you like to play with Basic Cards or Cloze Cards?",
      choices: ["Basic Cards", "Cloze Cards"],
      name: "cards"
    }).then(function(answers){
      if(answers.cards === "Basic Cards"){
       var choice = Math.floor(Math.random() * ((4-0)+1) + 0);
       console.log(choice);
       console.log(cards[choice]);
      }else{
        var choice = Math.floor(Math.random() * ((4-0)+1) + 0);
        console.log(cloze[5]);
      }

    });


//   for(i = 0; i < cards.length; i++){

//   if(cards <= 5){
//     inquirer.prompt({
//       name: "cardOne",
//       message: card1.front
//     }).then(function(answers){
//       if(answers.cardOne === card1.back) {
//         cards.push[i];
//         score++;
//         console.log("Your answer was: " + answers.cardOne);
//         console.log("The correct answer was: " + card1.back);
//         console.log("Nice! Your score is now " + score);
//         PlayGame();

//     } else {
//       cards.push[i];
//       score--;
//       console.log("Sorry! Your score is now " + score);
//       PlayGame();
//     }

//     });
//   } 

//   if(cards>=1 && cards < 5){
//     inquirer.prompt({
//       name: "cardTwo",
//       message: card2.front
//     }).then(function(answers){
//       if(answers.cardTwo === card2.back){
//         cards.push[i];
//         score++;
//         console.log("Your answer was: " + answers.cardTwo);
//         console.log("The correct answer was: " + card2.back);
//         console.log("Nice! Your score is now: " + score);
//         PlayGame();
//       } else {
//         cards.push[i];
//         score--;
//         console.log("Sorry! Your score is now: " + score);
//         PlayGame();
//       }
//     });   
//   }

//   if(cards>=2 && cards < 5){
//     inquirer.prompt({
//       name: "cardTwo",
//       message: card2.front
//     }).then(function(answers){
//       if(answers.cardTwo === card2.back){
//         responses.push[i];
//         score++;
//         cards++;
//         console.log("Your answer was: " + answers.cardTwo);
//         console.log("The correct answer was: " + card2.back);
//         console.log("Nice! Your score is now: " + score);
//         PlayGame();
//       } else {
//         cards.push[i];
//         console.log("Sorry! Your score is now: " + score);
//         PlayGame();
//       }
//     });
//   }

//   if(cards>=3 && cards < 5){
//     inquirer.prompt({
//       name: "cardThree",
//       message: card3.front
//     }).then(function(answers){
//       if(answers.cardThree === card3.back){
//         cards.push[i];
//         score++;
//         console.log("Your answer was: " + answers.cardTwo);
//         console.log("The correct answer was: " + card2.back);
//         console.log("Nice! Your score is now: " + score);
//         PlayGame();
//       } else {
//         cards.push[i];
//         score--;
//         console.log("Sorry! Your score is now: " + score);
//         PlayGame();
//       }
//     });
//   }

//   if(cards>=4 && cards < 5){
//     inquirer.prompt({
//       name: "cardFour",
//       message: card4.front
//     }).then(function(answers){
//       if(answers.cardFour === card4.back){
//         cards.push[i];
//         score++;
//         console.log("Your answer was: " + answers.cardTwo);
//         console.log("The correct answer was: " + card2.back);
//         console.log("Nice! Your score is now: " + score);
//         PlayGame();
//       } else {
//         cards.push[i];
//         score--;
//         console.log("Sorry! Your score is now: " + score);
//         PlayGame();
//       }
//     });  
//   }

//     if(cards === 5){
//     inquirer.prompt({
//       name: "cardFive",
//       message: card5.front
//     }).then(function(answers){
//       if(answers.cardFive === card5.back){
//         cards.push[i];
//         score++;
//         console.log("Your answer was: " + answers.cardTwo);
//         console.log("The correct answer was: " + card2.back);
//         console.log("Nice! Your score is now: " + score);
//         PlayGame();
//       } else {
//         cards.push[i];
//         score++;
//         console.log("Sorry! Your score is now: " + score);
//         PlayGame();
//       }
//     });
//   }
// }
// }
}

PlayGame();
