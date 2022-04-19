const mongoose = require('mongoose')

const connectDB = async() => {

console.log('database is connected')    
await mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
})

}


module.exports = connectDB