import axios from "axios";


export const getAllPersons = async () => {
    try {
        let response = await axios.get(`${import.meta.env.VITE_PROD_SERVER}/persons`)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addNewPerson = async (person) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_PROD_SERVER}/api/addcontact`, person)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateExistingPerson = async (id, updatedUser) => {
    try {
        let response = await axios.put(`${import.meta.env.VITE_PROD_SERVER}/update/${id}`, updatedUser)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deletePerson = async (id) => {
    try {
        let response = await axios.delete(`${import.meta.env.VITE_PROD_SERVER}/api/${id}`)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}