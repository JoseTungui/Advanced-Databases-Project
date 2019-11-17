const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transs_Schema = new Schema({
    transactionid : Number,
    dateacquired : Date,
    acquisitionprice : Number,
    askingprice : Number,
    datesold : Date,
    salesprice : Number,
    customerid : Number,
    workid : Number

});

module.exports = mongoose.model('transs', Transs_Schema);