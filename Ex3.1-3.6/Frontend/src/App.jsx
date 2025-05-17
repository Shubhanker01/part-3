import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import FormSubmit from "./components/FormSubmit"
import DisplayContacts from "./components/DisplayContacts"
import { getAllPersons } from "./services/services"
import Success from "./components/Success"
import './index.css'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)
  const [error, setError] = useState(false)
  const [type, setType] = useState("")
  console.log(persons)
  // fetch data from server
  useEffect(() => {
    getAllPersons().then((data) => {
      console.log(data)
      setPersons(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Success successMessage={successMessage} setSuccessMessage={setSuccessMessage} type={type} error={error} setError={setError} />
        <Filter persons={persons} />
        <h2>Add a new</h2>
        <FormSubmit persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} phone={phone} setPhone={setPhone} setSuccessMessage={setSuccessMessage} setType={setType} setError={setError} />
        <h2>Numbers</h2>
        <DisplayContacts persons={persons} setPersons={setPersons} />
      </div>
    </>
  )
}

export default App
