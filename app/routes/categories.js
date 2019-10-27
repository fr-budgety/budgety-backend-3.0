const controller = require('../controllers/categories')
const validate = require('../controllers/categories.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

/*
 * Categories routes
 */

/*
 * Get all items route
 */
router.get('/all', controller.getAllItems)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  trimRequest.all,
  validate.createItem,
  controller.createItem
)

module.exports = router
