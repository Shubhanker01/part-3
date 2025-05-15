import React from 'react'
import { deletePerson } from '../services/services'

function Delete({ person, persons, setPersons }) {
    const deleteContact = (id, name) => {
        if (window.confirm(`Delete ${name}`)) {
            deletePerson(id).then((data) => {
                setPersons(persons.filter((person) => person.id !== data.id))
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            console.log("operation cancelled")
        }
    }
    return (
        <>
            <button onClick={() => deleteContact(person.id, person.name)}>Delete</button>
        </>
    )
}

export default Delete