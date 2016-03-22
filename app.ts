//import express = require('express');
//import express from 'express'; sometimes works
//import * as express from 'express'; always works

import * as express from 'express';  //required
const app = express();  //required

//config
app.set('views','./views'); // . means current directory
app.engine('html',require('ejs').renderFile); //tells express how to handle html
app.set('view engine', 'html'); //turns index.html = index

// app.use(bodyParser.json());

app.use('/',express.static('./ngApp'));
app.use('/scripts',express.static('./bower_components'));



// app.get('/about', (req,res,next) => {
//   res.send('<h1>About Me!</h1>');
// });

app.get('/aboutMe', (req,res,next) => {
  let obj = {
    message: 'About Me',
    isCool: true
  }
  res.render('about.ejs',obj);
});

app.get('/contact', (req,res,next) => {
  res.render('contact.jade');
});

app.use('/api/v1/cars',require('./routes/carRoutes'));

app.get('/*', (req,res,next) => {  //any time someone contacts us at the route, do the following, this particular needs to be at the bottom
  res.render('index');
});

app.use((req,res,next) => {
  let err= {status: 404, message:'Page not found.'};
  next(err);
});

app.use((err: any, req: express.Request, res: express.Response, next: Function) => {
  res.status(err.status || 500).send({message: err.message, err: err});
});

export = app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
}); //anything that hits port3000, run this server. required line to start server. use 3000 or 8080.
