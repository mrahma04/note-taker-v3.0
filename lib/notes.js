const fs = require('fs')
const path = require('path')

const filterByQuery = (query, notesArr) => {
    let filteredResults = notesArr
    if (query.id) {
        filteredResults = notesArr.filter(note => note.id === query.id)
    }
    if (query.title) {
        filteredResults = notesArr.filter(note => note.title === query.title)
    }
    if (query.text) {
        filteredResults = notesArr.filter(note => note.text === query.text)
    }
    return filteredResults
}

const findById = (id, notesArr) => {
    const result = notesArr.filter(element => element.id === id)[0]
    return result
}

const createNewNote = (incomingData, notesArr) => {
    const note = incomingData
    notesArr.push(note)
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ "notes": notesArr }, null, 2),
        err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Database updated successfully!')
            }
        }
    )
    return notesArr
}

const validateNote = (note) => {
    if (!note.title || typeof note.title !== 'string') {
        return false
    }
    if (!note.text || typeof note.text !== 'string') {
        return false
    }
    return true
}

module.exports = {
    findById,
    filterByQuery,
    createNewNote,
    validateNote
}