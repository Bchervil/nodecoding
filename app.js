const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

// start express library
const app = express();

const postsRouter = require('./routes/postsRoute');
const aboutmeRouter = require('./routes/aboutmeRoute');

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// setup for views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup logger
app.use(logger('dev'));

/* set up app connect with css file */
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);

app.use('/aboutme', aboutmeRouter);

// setup home index page
app.get('/', (req, res) => {
  res.render('index');
});

// error check for anything entered other than proper routes
app.use('*', (req, res) => {
  res.render('error');
});

// setup server to listen on port
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
