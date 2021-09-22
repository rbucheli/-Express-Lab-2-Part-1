const express = require('express');
const app = express();

const port = 3000;

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

// app.get('/greeting/:name', (req, res) => {
//   // console.log('There you are!')
//   res.send("What's up " + req.params.name);
// });

app.listen(3000);

// // Are we supposed to decalre port as a variable? If so, why?

// ':' values after colon are parameters
// app.get('/tip/:total/:tipPercentage', (req, res) => {
//   let totalX = req.params.total
//   let tipPercentageX = req.params.tipPercentage
// // define variables to put into equation later 
//   const totalTip = Number(totalX / 100) * Number(tipPercentageX);

//   res.send("Tip is " + totalTip);
// });

// app.get('/magic/:indexOfResponses', (req, res) => {
//   // function that stores user answer and sends it again
//   res.send(responses[req.params.indexOfResponses]);
// });
// Above code gives me access to indices by 3000/magic/0

app.get('/magic/:question', (req, res) => {
  let response = magicBall[Math.floor(Math.random() * magicBall.length)];
  res.send(req.params.question + "<h1>" + response + "</h1>");
});

// URL Query?
// Random
// Access the data by passing in the index as a part of the request URL
// res.send must include question + an index from the array?