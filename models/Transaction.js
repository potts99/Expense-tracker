// MongoDB Schema for transactions db

/*
The database schema of a database is its structure described in a formal language supported by the database management system (DBMS). 
The term "schema" refers to the organization of data as a blueprint of how the database is constructed.
*/

// https://mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);