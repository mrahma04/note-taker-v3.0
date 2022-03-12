const findById = (id, notesArr) => {
    const result = notesArr.filter(element => element.id === id)[0]
    return result
}

module.exports = {
    findById
}