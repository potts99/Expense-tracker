const Transactions = require('../models/Transaction');


// Get all transactions
// @route /api/v1/transactions
// @access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transactions.find();

        return  res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.send(500).json({
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

    return res.send(201).json({
        success: true,
        data: transaction
    })

    } catch (err) {
        console.log(err);
    }
}


// Get       Delete transactions
// @route    Delete /api/v1/transactions
// @access   public
exports.deleteTransaction = async (req, res, next) => {
    res.send('Delete transactions');
}