const express = require('express')
const app = express()
const PORT = 3001
const morgan = require('morgan')
app.use(express.json())
app.use(morgan.token('type', function (req, res) { return res }))
let phoneBook = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

let generateRandom = () => {
    return String(Math.floor(Math.random() * (100000 - 5)) + 5)
}
// fetching all the person records
app.get('/api/persons', (req, res) => {
    res.json(phoneBook)
})

// fetching info
app.get('/api/info', (req, res) => {
    let date = new Date()
    res.send(`Phonebook has info for ${phoneBook.length} people,\n${date}`)
})

// displaying single phonebook
app.get('/api/persons/:id', (req, res) => {
    let id = req.params.id
    let person = phoneBook.find((person) => person.id === id)
    if (!person) {
        return res.status(404).send("Person not found")
    }
    return res.json(person)
})

// deleting single phonebook
app.delete('/api/delete/:id', (req, res) => {
    let id = req.params.id
    let ind = phoneBook.findIndex((person) => person.id === id)
    if (ind == -1) {
        return res.status(404).send("Person not found")
    }
    phoneBook.splice(ind, 1)
    console.log(phoneBook)
    return res.send("Successfully deleted")
})

function checkDuplicateName(name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return true
        }
    }
    return false
}
// adding a new contact
app.post('/api/addcontact', (req, res) => {
    let body = req.body
    if (!body.name || !body.number) {
        return res.status(400).send("Please enter full information")
    }
    if (checkDuplicateName(body.name)) {
        return res.status(400).send("Name must be unique")
    }
    let id = generateRandom()
    let contact = {
        id: id,
        name: body.name,
        number: body.number
    }
    phoneBook.push(contact)
    return res.json(contact)
})

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})

