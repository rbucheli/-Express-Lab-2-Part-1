const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) => {
  // console.log('There you are!')
  res.send("What's up " + req.params.name);
});

app.listen(3000);

// // Are we supposed to decalre port as a variable? If so, why?

// app.get('/tip/:total/:tip', (req, res) => {
//   res.send()
// }
// // 
