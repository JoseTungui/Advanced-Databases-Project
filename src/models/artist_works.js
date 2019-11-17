const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Artist_works_Schema = new Schema({
    artistid: Number,
    lastname: String,
    firstname: String,
    nationality: String,
    dateofbirth: Number,
    datedeceased: Number,
    works: Array
});

module.exports = mongoose.model('artist_works', Artist_works_Schema);