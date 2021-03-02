const express = require('express');

const {
  getDevelopers,
  getDeveloperProfile,
  addDevProfile,
  searchDevProfile,
  deleteDevprofile,
} = require('../controllers/devProfiles');

const router = express.Router();

router.route('/').get(getDevelopers).post(addDevProfile);
router.route('/:id').get(getDeveloperProfile).delete(deleteDevprofile);
router.route('/search/:id').get(searchDevProfile);

module.exports = router;
