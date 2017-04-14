
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
    cloze[5] = new ClozeCard("The most popular newspaper is the NY Times", "NY Times");
function PlayGame(){

    inquirer.prompt({
      type: "list",
      message: "Would you like to play with Basic Cards or Cloze Cards? Press Ctrl+C to stop game.",
      choices: ["Basic Cards", "Cloze Cards"],
      name: "cards"
    }).then(function(answers){
      if(answers.cards === "Basic Cards"){
       var choice = Math.floor(Math.random() * ((4-0)+1) + 0);
       inquirer.prompt({
        type: "input",
        name: "question",
        message: [cards[choice].front]
       }).then(function(answers){
        if(answers.question === cards[choice].back){
          console.log("Correct!");
          PlayGame();}
        else if (answers.question !== cards[choice].back) {
        console.log("Incorrect!");
        PlayGame();
       }

       }); 
      }else{
        var choice = Math.floor(Math.random() * ((5-0)+1) + 0);
        inquirer.prompt({
          type: "input",
          name: "question",
          message: [cloze[choice].partial]
        }).then(function(answers){
          if(answers.question === cloze[choice].close){
            console.log("Correct!");
            PlayGame();
          } else if(answers.question !== cloze[choice].close){
            console.log("Incorrect!");
            PlayGame();
          }
        });
      }

    });

}

PlayGame();
