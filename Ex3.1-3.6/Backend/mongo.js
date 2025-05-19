const mongoose = require('mongoose')

const connectToMongo = async () => {
    try {
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`Mongo db connection host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo