const express = require('express');
const exphbs = require('express-handlebars'); // Import express-handlebars correctly
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));
const hbs = exphbs.create({
  extname: '.hbs',
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
  }});
// Set up Handlebars as the view engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' })); // Use exphbs.engine() for latest versions
app.set('view engine', 'hbs');
app.set('views', './view'); // Ensure this is pointing to your views directory

const routes = require('./routes/userRoutes');
app.use('/',routes);

// Start the server
app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
