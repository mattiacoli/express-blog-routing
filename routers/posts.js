
const express = require('express')
const router = express.Router()

// import array of posts
const postsArray = require('../posts')

// index
router.get('/', (req,res)=>{
  res.json(postsArray)
})

//show
router.get('/:title', (req, res)=>{
  const postTitle = req.params.title
  res.send(`this is post with title: ${postTitle}` )


})

// sort
router.post('/', (req, res)=>{
  res.send('Add new post')
})

// Update
router.put('/:title', (req, res)=>{
  const postTitle = req.params.title
  res.send(`update entire post with title: ${postTitle}` )
})

// modify
router.patch('/:title', (req, res)=>{
  const postTitle = req.params.title
  res.send(`modify post with title: ${postTitle}` )
})

// delete
router.delete('/:title', (req, res)=>{
  const postTitle = req.params.title
  res.send(`remove post with title: ${postTitle}` )
})

module.exports = router