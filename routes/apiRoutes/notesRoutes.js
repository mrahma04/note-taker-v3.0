const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')

const { notes } = require('../../db/db.json')
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    let results = notes
    if (req.query) {
        results = filterByQuery(req.query, notes)
    }
    res.json(results)
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes)
    if (result) {
        res.json(result)
    } else {
        res.send(404)
    }
})

router.post('/notes', (req, res) => {
    // adds a random uuid to incoming data
    req.body.id = uuidv4()

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.')
    } else {
        const note = createNewNote(req.body, notes)
        res.json(note)
    }
})

module.exports = router