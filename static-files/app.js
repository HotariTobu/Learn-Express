const express = require('express')
const app = express()
const port = 3000

// build-in middleware
app.use(express.static('public'))

// Create a virtual prefix
app.use('/static', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
