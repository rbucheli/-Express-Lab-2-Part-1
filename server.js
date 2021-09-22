const express = require('express');
const app = express();

const port = 3000;

// app.get('/greeting/:name', (req, res) => {
//   // console.log('There you are!')
//   res.send("What's up " + req.params.name);
// });

app.listen(3000);

// // Are we supposed to decalre port as a variable? If so, why?

// ':' values after colon are parameters
app.get('/tip/:total/:tipPercentage', (req, res) => {
  let totalX = req.params.total
  let tipPercentageX = req.params.tipPercentage
// define variables to put into equation later 
  const totalTip = Number(totalX / 100) * Number(tipPercentageX);
  
  res.send("Tip is " + totalTip);
});

