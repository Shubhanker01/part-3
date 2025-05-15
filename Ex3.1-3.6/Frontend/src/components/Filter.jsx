import React, { useState } from 'react'

function Filter({ persons }) {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const filteredResults = (search) => {
        let results = persons.filter((person) => person.name.toLowerCase().startsWith(search))
        return results
    }
    const handleResultChange = (e) => {
        setSearch(e.target.value)
        let res = filteredResults(e.target.value)
        setResults(res)
    }
    return (
        <>
            <div>
                <p>Filter shown with...</p>
                <input type="text" onChange={handleResultChange} value={search}></input>
            </div>
            <div>
                <h2>Filtered Results</h2>
                {
                    results.map((person) => {
                        return <p key={person.name}>{person.name} {person.phone}</p>
                    })
                }
            </div>
        </>
    )
}

export default Filter