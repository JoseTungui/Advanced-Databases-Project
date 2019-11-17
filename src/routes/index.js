const express = require('express');
const router = express.Router();

const Artist_works = require('../models/artist_works');

router.get('/', async (req, res) => {
    const artists = await Artist_works.find();
    res.render('index', {
        artists
    });
});

router.post('/add', async (req, res) => {
    const artist_works = new Artist_works(req.body);
    await artist_works.save();
    res.redirect('/');
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
    res.redirect('/');
});

// for delete button
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Artist_works.remove({_id: id});
    res.redirect('/');
});

module.exports = router;