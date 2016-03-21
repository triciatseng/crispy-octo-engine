import express = require('express');  //required
const app = express();  //required

//config
app.set('views','./views'); // . means current directory
app.engine('html',require('ejs').renderFile); //tells express how to handle html
app.set('view engine', 'html'); //turns index.html = index

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

app.get('/*', (req,res,next) => {  //any time someone contacts us at the route, do the following, this particular needs to be at the bottom
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
}); //anything that hits port3000, run this server. required line to start server. use 3000 or 8080.
