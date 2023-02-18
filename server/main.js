import Express from 'express'
import BodyParser from 'body-parser'

import dataRouter from './api/characterData.js'

// Create a main express 'App'
const app = new Express()

// Setup server routes
// - app.use(): map a 'route' to a particular function
//    > matches ANY type of request
app.use(BodyParser.json())
// app.use(BodyParser.urlencoded({ extended: true }))  // Input type not used here, but worth knowing
app.use((req, res, next) => {
  // Request handler: log the request
  console.log(`${req.method} at ${req.path}`)
  next()
})

// Attach our data router 'routes' under '/data'
app.use('/data', dataRouter)

// Statically serve files from 'public'
app.use(Express.static('public'))

// Bind to a port and start listening
app.listen(3000)
console.log('Listening on port 3000')