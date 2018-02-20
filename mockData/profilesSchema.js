const profileSchema = require('./profileSchema')

const profilesSchema = {
  type: 'array',
  minItems: 60,
  maxItems: 80,
  items: profileSchema
}

module.exports = profilesSchema