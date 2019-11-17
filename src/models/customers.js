const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customers_Schema = new Schema({
    customerid : Number,
    lastname : String,
    firstname : String,
    emailaddress : String,
    encryptedpassword : String,
    street : String,
    city : String,
    state : String,
    ziporpostalcode : String,
    country : String,
    areacode : String,
    phonenumber : String,
    transids : Array

});

module.exports = mongoose.model('customers', Customers_Schema);