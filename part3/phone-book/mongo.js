require('dotenv').config()
const mongoose = require('mongoose')



const url = process.env.MONGODB_URI

mongoose.connect(url)

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phone = mongoose.model('Number', phoneSchema)

const phone = new   Phone({
  name: process.argv[2],
  number: process.argv[3]
})

phone.save().then(result => {
  console.log('phone saved!')
  
})

Phone.find({}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})

