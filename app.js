const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/contacts', (req, res, next) => {
  res.json([
    {
      name: 'Ron',
      email: 'ron@example.com',
      phone: '555-555-5555',
      department: 'Coaching',
      position: 'Coach'
    },
    {
      name: 'Daquel',
      email: 'daquel@example.com',
      phone: '555-555-5555',
      department: 'IT',
      position: 'Network Admin'
    },
    {
      name: 'Samie',
      email: 'samie@example.com',
      phone: '555-555-5555',
      department: 'Marketing',
      position: 'Marketing Manager'
    },
    {
      name: 'Dom',
      email: 'Dom@example.com',
      phone: '555-555-5555',
      department: 'HR',
      position: 'HR Manager'
    },
    {
      name: 'Aric',
      email: 'aric@example.com',
      phone: '555-555-5555',
      department: 'Sales',
      position: 'Sales Manager'
    },
    {
      name: 'Ray',
      email: 'ray@example.com',
      phone: '555-555-5555',
      department: 'Finance',
      position: 'Finance Manager'
    },
  ]);
})

// serve client app
app.use(express.static('dist'));

// for react router: send back index.html when requesting any route
// react-router will pick up the route and render the correct component
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;
