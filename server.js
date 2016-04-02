var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var blogPosts = [
    {
        'id': '1',
        'title': 'Home',
        'body': 'Eaque ipsa quae ab illo inventore veritatis et quasi. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat. At vero eos et accusamus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
    },
    {
        'id': '2',
        'title': 'About',
        'body': 'Qui officia deserunt mollit anim id est laborum. Nihil molestiae consequatur, vel illum qui dolorem eum. Esse cillum dolore eu fugiat nulla pariatur. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.'
    },
    {
        'id': '3',
        'title': 'Features',
        'body': 'Nihil molestiae consequatur, vel illum qui dolorem eum. Esse cillum dolore eu fugiat nulla pariatur. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.'
    },
    {
        'id': '4',
        'title': 'Contact',
        'body': 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nihil molestiae consequatur, vel illum qui dolorem eum. Corrupti quos dolores et quas molestias excepturi sint occaecati.'
    }
];


app.get('/posts', function(req, res) {
    console.log('GET From SERVER');
    res.send(blogPosts);
});

app.post('/posts', function(req, res) {
    var blogPost = req.body;
    console.log(req.body);
    posts.push(blogPost);
    res.status(200).send('Successfully posted page content');
});

app.listen(6060);
