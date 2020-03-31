// routes for transactions api
// express.Router - https://expressjs.com/en/guide/routing.html

/*
Use the express.Router class to create modular, 
mountable route handlers. 
A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
*/

// Dependencies
const express = require('express');
const router = express.Router(); // Assigning express.router to variable router

// Imports what the router handlers functions which tell the handlers what to do
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions'); 

// Router handlers which tell the requests what functions to call
router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction)

module.exports = router; 