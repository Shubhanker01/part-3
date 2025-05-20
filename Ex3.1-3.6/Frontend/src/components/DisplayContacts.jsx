import React from 'react'
import Delete from './Delete'

function DisplayContacts({ persons, setPersons,setSuccessMessage,setType }) {

    return (
        <>
            {
                persons.map((person) => {
                    return (
                        <div key={person._id}>
                            <p>{person.name} {person.number}</p>
                            <Delete setSuccessMessage={setSuccessMessage} setType={setType} person={person} persons={persons} setPersons={setPersons}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DisplayContacts