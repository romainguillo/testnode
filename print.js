//_____________________________ package.json
{
    "name": "mon-app",
    "version": "1.1.0",
    "dependencies": {
        "ejs": "^2.5.7",
        "express": "~4.16.2",
        "nodemon": "~1.14.11"
    }
}
//_____________________________ server.js

var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs'); // EJS va directement chercher dans le dossier views

// TP Créer un menu avec plusieurs pages
app.get('/', function (req, res) {
  res.render('./pages/home.ejs');
})

app.get('/contact', function (req, res) {
    res.render('./pages/contact.ejs');
})

app.get('/news/:title', function (req, res) {
    var description = "Retrouvez toute l'information sur le thème : "+req.params.title;
    var category = ['france', 'europe', 'meteo'];
    if( category.includes(req.params.title) ){
      res.render('./pages/news.ejs', {title: req.params.title, description : description});
    }else{
      res.status(404).send('page introuvable');
    }

})

app.get('/histoire/', function (req, res) {
    var infos = [
        { date: 1789, evenement: "Révolution française" },
        { date: 1945, evenement: "Fin de la seconde guerre mondiale" },
        { date: 1981, evenement: "Abolition de la peine de mort" }
    ];
    res.render('./pages/histoire.ejs', {infos : infos});
})

app.get('*', function(req, res){
  res.status(404).send('page introuvable');
});

app.listen(8080)

//_____________________________ view / partials / header.ejs
/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mon App Web</title>
  </head>
  <body>
    <!-- TP : Créer un menu pour naviguer dans l'APP : -->
    <a href="/">Accueil</a>
    <a href="/contact">Contact</a>
    <a href="/news/france">News France</a>
    <a href="/histoire">histoire</a>*/
//_____________________________ view / partials / footer.ejs
/*</body>
</html>*/

//_____________________________ view / pages / home.ejs
/*<%- include ../partials/header.ejs %>
<h1> Welcome to Web App </h1>
<%- include ../partials/footer.ejs %>*/
//_____________________________ view / pages / contact.ejs
/* ... */
//_____________________________ view / pages / news.ejs
/*<%- include ../partials/header.ejs %>
<h1> News / <%= title %> </h1>
<p> <%= description %> </p>
<%- include ../partials/footer.ejs %> */
//_____________________________ view / pages / histoire.ejs
/*<%- include ../partials/header.ejs %>
<h1> Histoire </h1>
<ul>
    <% infos.forEach(function(info) { %>
        <li><%= info.date %> - <%= info.evenement %></li>
    <% }); %>
</ul>
<%- include ../partials/footer.ejs %>*/
