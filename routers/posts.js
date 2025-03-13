const express = require('express')
const router = express.Router()

// index
router.get('/posts', (req,res)=>{
  res.send('Post List here')
})

//show
router.get('/posts/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`this is post with id: ${postId}` )
})

// sort
router.post('/posts', (req, res)=>{
  res.send('Add new post')
})

// Update
router.put('/posts/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`update entire post with id: ${postId}` )
})

// modify
router.patch('/posts/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`modify part of post with id: ${postId}` )
})

// delete
router.delete('/posts/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`modify part of post with id: ${postId}` )
})

module.exports = router