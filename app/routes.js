const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching
router.post('/v1/sector-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const whichsector = req.session.data['which-sector']

  if (whichsector === 'schools') {
    res.redirect('/v1/schools/optional')
  } else {
    res.redirect('/v1/fe/optional')
  }
});

router.post('/v2/sector-answer', function (req, res) {
  const whichsector = req.session.data['which-sector']
  if (whichsector === 'schools') {
    res.redirect('/v2/schools/optional')
  } else {
    res.redirect('/v2/fe/optional')
  }
});

module.exports = router
