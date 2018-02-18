const jsf = require('json-schema-faker')
const fs = require('fs')

jsf.extend('faker', function () {
  return require('faker')
})

const profilesSchema = require('./profilesSchema')

const profiles = jsf(profilesSchema)

fs.writeFile('./mockData/db.json', JSON.stringify({ profiles }), function (err) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Mock data generated.')
  }
})