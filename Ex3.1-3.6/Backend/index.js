require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const connectToMongo = require('./mongo')
app.use(express.json())
app.use(cors())
const phoneBook = require('./schema')
const errorHandler = require('./errorHandler')

// fetching all the person records
app.get('/api/persons', async (req, res) => {
    let data = await phoneBook.find({})
    res.json(data)
})

// fetching info
app.get('/api/info', (req, res) => {
    let date = new Date()
    res.send(`Phonebook has info for ${phoneBook.length} people,\n${date}`)
})

// displaying single phonebook
app.get('/api/persons/:id', async (req, res) => {
    try {
        let id = req.params.id
        let person = await phoneBook.findById(id)
        if (!person) {
            return res.status(404).send("Person not found")
        }
        return res.json(person)
    } catch (error) {
        console.log(error)
    }

})

// deleting single phonebook
app.delete('/api/delete/:id', async (req, res) => {
    try {
        let id = req.params.id
        await phoneBook.findByIdAndDelete(id)
        return res.send("Successfully deleted")
    } catch (error) {
        console.log(error)
    }

})

// adding a new contact
app.post('/api/addcontact', async (req, res) => {
    let body = req.body
    if (!body.name || !body.number) {
        return res.status(400).send("Please enter full information")
    }

    let contact = {
        name: body.name,
        number: body.number
    }
    let data = await phoneBook.create(contact)
    return res.json(data)
})

// update existing account
app.put('/api/update/:id', async (req, res) => {
    try {
        let id = req.params.id
        let number = req.body.number
        let user = await phoneBook.findById(id)
        if (!user) {
            return res.status(404).send("User not found")
        }
        user.number = number
        await user.save()
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
})

app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})

connectToMongo()

