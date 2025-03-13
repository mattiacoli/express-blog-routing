
const express = require('express')
const router = express.Router()

// import array of posts
const postsArray = require('../posts')

// index
router.get('/', (req,res)=>{
  res.json(postsArray)
})

//show
router.get('/:slug', (req, res)=>{
  const postSlug = req.params.slug

  const post = postsArray.find(post => postSlug === post.slug)

  if (post){
   res.json(post)
  } else {
    res.send('post not found')
  }

})

// sort
router.post('/', (req, res)=>{
  res.send('Add new post')
})

// Update
router.put('/:slug', (req, res)=>{
  const postSlug = req.params.slug
  res.send(`update entire post with slug: ${postSlug}` )
})

// modify
router.patch('/:slug', (req, res)=>{
  const postSlug = req.params.slug
  res.send(`modify post with slug: ${postSlug}` )
})

// delete
router.delete('/:slug', (req, res)=>{
  const postSlug = req.params.slug
  res.send(`remove post with slug: ${postSlug}` )
})

module.exports = router