const profileSchema = require('./profileSchema')

const profilesSchema = {
  type: 'array',
  minItems: 70,
  maxItems: 120,
  items: profileSchema
}

module.exports = profilesSchema