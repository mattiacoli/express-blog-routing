const express = require('express')
const router = express.Router()

// index
router.get('/', (req,res)=>{
  res.send('Post List here')
})

//show
router.get('/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`this is post with id: ${postId}` )
})

// sort
router.post('/', (req, res)=>{
  res.send('Add new post')
})

// Update
router.put('/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`update entire post with id: ${postId}` )
})

// modify
router.patch('/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`modify part of post with id: ${postId}` )
})

// delete
router.delete('/:id', (req, res)=>{
  const postId = req.params.id
  res.send(`remove post with id: ${postId}` )
})

module.exports = router