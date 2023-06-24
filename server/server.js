const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Task = require('./models/task');
const bodyParser = require('body-parser');
const port = 3000;

const url_database = "mongodb+srv://essam:essam@cluster0.keq6tjs.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/all', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/all.html'))
});

app.get('/tasks',(req,res) => {
  Task.find()
  .then(tasks  => {
    res.json(tasks)
  })
  .catch(err  => {
    console.log(err);
    res.status(500).send('ERROR FETCHING')
  })
})

app.post('/submit',(req,res) => {
  const task = new Task(req.body);
 
  console.log(req.body);
 
  task
    .save()
    .then( result => {
      res.redirect("/all");
      res.status(200).send('success');
    })
    .catch( err => {
      console.log(err);
    });
})

app.delete('/tasks/:id',(req,res) => {
  Task.findByIdAndDelete(req.params.id)
  .then(() => {      
    res.sendStatus(204); // Send a 204 No Content status code indicating successful deletion
})
  .catch((err) => {
    console.log(err);
  });
})

mongoose.connect(url_database)
  .then( result => {
    app.listen(port);
    console.log(`Server running on port ${port}`);
  })
  .catch( err => {
    console.log(err);
  }); 
