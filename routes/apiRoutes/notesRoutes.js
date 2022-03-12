const router = require('express').Router()
const { notes } = require('../../db/db.json')
const { findById } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes)
})

router.get('/notes/:id', (req, res) => {
    res.json(findById(req.params.id, notes))
})

module.exports = router