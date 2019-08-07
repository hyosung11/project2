// DEPENDENCIES
const express = require('express')
const router = express.Router()
const Movement = require('../models/movements.js')

// ROUTES
// Seed Route - just use once to seed data
router.get('/seed', (req, res) => {
    Movement.create(
      [
        {
            name: 'Pull',
            image: '/images/pullup.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'pullup',
            moreExamples: 'renegade row, lat pulldown, seated cable rows'
        },
        {
            name: 'Push',
            image: '/images/pushup.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'pushup',
            moreExamples: 'bench press, military press, one-arm press'
        },
        {
            name: 'Hinge',
            image: '/images/deadlift.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'kettlebell deadlift',
            moreExamples: 'kettlebell swing, barbell hip thrust, Romanian single leg deadlift'
        },
        {
            name: 'Squat',
            image: '/images/squat.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'goblet squat',
            moreExamples: 'safety bar box squat, single leg squat, sumo squat'
        }
    ], (error, data) => {
        res.redirect('/movements')
    })
})

// 2. New/GET Route
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// 5. Edit/GET Route
router.get('/:id/edit', (req, res) => {
  Movement.findById(req.params.id, (error, foundMovement) => {
    res.render(
      'edit.ejs',
      {
          movements: foundMovement
      }
    )
  })
})

// 1. Index/GET Route
router.get('/', (req, res) => {
  Movement.find({}, (error, allMovements) => {
    console.log(allMovements);
    res.render('index.ejs', {
      movements: allMovements
    })
  })
})

// 3. Create/POST Route
router.post('/', (req, res) => {
  Movement.create(req.body, (error, createdMovement) => {
    res.redirect('/movements')
  })
})

// 4. Show/GET Route
router.get('/:id', (req, res) => {
  Movement.findById(req.params.id, (error, foundMovement) => {
    res.render('show.ejs', {
      movements: foundMovement
    })
  })
})

// 6. Update/PUT Route
router.put('/:id', (req, res) => {
  Movement.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => {
    res.redirect('/movements')
  })
})

// 7. Destroy/DELETE Route
router.delete('/:id', (req, res) => {
  Movement.findByIdAndRemove(req.params.id, (error, deletedMovement) => {
    res.redirect('/movements')
  })
})

module.exports = router
