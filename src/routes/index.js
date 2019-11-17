const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('welcome')});


// Todo esto para artist-works---------------------------------------------------------------------------------------
const Artist_works = require('../models/artist_works');

router.get('/artists', async (req, res) => {
    const artists = await Artist_works.find();
    res.render('index', {
        artists
    });
});

router.post('/add', async (req, res) => {
    const artist_works = new Artist_works(req.body);
    await artist_works.save();
    res.redirect('/artists');
});

// for edit button
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const artist = await Artist_works.findById(id);
    res.render('edit', {
        artist
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Artist_works.update({_id: id}, req.body);
    res.redirect('/artists');
});

// for delete button
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Artist_works.remove({_id: id});
    res.redirect('/artists');
});


//Todo esto para customers---------------------------------------------------------------------------------------
const Customers = require('../models/customers');

router.get('/customers', async (req, res) => {
    const customers = await Customers.find();
    res.render('customers', {
        customers
    });
});

router.post('/add_costumer', async (req, res) => {
    const customers = new Customers(req.body);
    await customers.save();
    res.redirect('/customers');
});

// for edit button
router.get('/edit_customer/:id', async (req, res) => {
    const { id } = req.params;
    const customer = await Customers.findById(id);
    res.render('edit_customers', {
        customer
    });
});

router.post('/edit_customer/:id', async (req, res) => {
    const { id } = req.params;
    await Customers.update({_id: id}, req.body);
    res.redirect('/customers');
});

// for delete button
router.get('/delete_customer/:id', async (req, res) => {
    const { id } = req.params;
    await Customers.remove({_id: id});
    res.redirect('/customers');
});


//Todo esto para transs---------------------------------------------------------------------------------------
const Transs = require('../models/transs');

router.get('/', async (req, res) => {
    const transs = await Transs.find();
    res.render('index', {
        transs
    });
});

router.post('/add', async (req, res) => {
    const transs = new Transs(req.body);
    await transs.save();
    res.redirect('/');
});

// for edit button
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const trans = await Transs.findById(id);
    res.render('edit', {
        trans
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Transs.update({_id: id}, req.body);
    res.redirect('/');
});

// for delete button
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Transs.remove({_id: id});
    res.redirect('/');
});


module.exports = router;