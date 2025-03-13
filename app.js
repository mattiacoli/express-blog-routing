const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000

// initialize server
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);

})