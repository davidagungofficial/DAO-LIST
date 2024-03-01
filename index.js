    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    const port = 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));

    let tasks = [];

    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

    app.get('/getTasks', (req, res) => {
      res.json(tasks);
    });

    app.post('/addTask', (req, res) => {
      const task = req.body.task;
      tasks.push(task);
      res.redirect('/');
    });

    app.post('/removeTask', (req, res) => {
      const index = req.body.index;
      tasks.splice(index, 1);
      res.redirect('/');
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
