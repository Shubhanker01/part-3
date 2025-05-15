import React from 'react'
import Delete from './Delete'

function DisplayContacts({ persons, setPersons }) {

    return (
        <>
            {
                persons.map((person) => {
                    return (
                        <div key={person.id}>
                            <p>{person.name} {person.number}</p>
                            <Delete person={person} persons={persons} setPersons={setPersons}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DisplayContacts