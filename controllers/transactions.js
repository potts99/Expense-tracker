// Imports the Schema model that your db follows
const Transaction = require('../models/Transaction');


// The below are the api promises and results it puts out when it is called by Routes/transactions file


// Get all transactions
// @route /api/v1/transactions
// @access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return  res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            err: 'Server Error'
        })
    }
}


// Get add transactions
// @route  Post /api/v1/transactions
// @access public
exports.addTransaction = async (req, res, next) => {
    try {
      const { text, amount } = req.body;
  
      const transaction = await Transaction.create(req.body);
    
      return res.status(201).json({
        success: true,
        data: transaction
      }); 
    } catch (err) {
      if(err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
  
        return res.status(400).json({
          success: false,
          error: messages
        });
      } else {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
    }
  }


// Get       Delete transactions
// @route    Delete /api/v1/transactions
// @access   public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}