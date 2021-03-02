const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const devProfileRoutes = require('./routes/devProfileRouters');

const app = express();

// CORS
app.use(cors());
app.options('*', cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

console.log(process.env.NODE_ENV);

// Access Public files
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname, '/client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Body parser
app.use(express.json());

// Routes
app.use('/api/v1/developers', devProfileRoutes);

module.exports = app;
