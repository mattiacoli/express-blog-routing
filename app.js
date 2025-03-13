
const express = require('express')
const app = express()
const port = 3000

// import rotuers module
const postsRouter = require('./routers/posts')

// middleware for posts routers
app.use('/posts', postsRouter)

// basic route
app.get('/', (req, res)=>{
  res.send('Welcome on this server')
})

// initialize server
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);

})