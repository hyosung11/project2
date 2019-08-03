// DEPENDENCIES
const express = require('express')
const router = express.Router()
const Movement = require('../models/movements.js')

// ROUTES
// Seed Route
router.get('/seed', (req, res)=>{
    Movement.create(
      [
        {
            name: 'Pull',
            image: 'pullup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'pullup'
        },
        {
            name: 'Push',
            image: 'pushup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'pushup'
        },
        {
            name: 'Hinge',
            image: 'deadlift',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'deadlift'
        },
        {
            name: 'Squat',
            image: 'goblet squat',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            example: 'goblet squat'
        }
    ], (error, data) => {
        res.redirect('/movements')
    })
})


// 1. Index/GET Route
router.get('/', (req, res) => {
  Movement.find({}, (error, allMovements) => {
    res.render('index.ejs', {
      movements: allMovements
    })
  })
})
// 2. New/GET Route

// 3. Create/POST Route

// 4. Show/GET Route

// 5. Edit/GET Route


// 6. Update/PUT Route

// 7. Destroy/DELETE Route


module.exports = router
