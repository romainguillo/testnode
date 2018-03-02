var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

// EJS va directement chercher dans le dossier views

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

/**/

app.listen(8080)
