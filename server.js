const express = require('express')
const path = require('path')

const htmlRoutes = require('./routes/htmlRoutes')
const notesRoutes = require('./routes/apiRoutes')

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.static('public'))
app.use('/', htmlRoutes)
app.use('/api', notesRoutes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})