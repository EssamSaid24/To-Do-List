const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 3000;



app.use(express.static(path.join(__dirname, '../client')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  '../client/index.html'));
});

app.post('/',(req,res) => {
  
})

mongoose.connect("mongodb+srv://essam:essam@cluster0.keq6tjs.mongodb.net/?retryWrites=true&w=majority")
  .then( result => {
    app.listen(port);
    console.log(`Server running on port ${port}`);

  })
  .catch( err => {
    console.log(err);
  }); 