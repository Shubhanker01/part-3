import axios from "axios";

const url = '/api'

export const getAllPersons = async () => {
    try {
        let response = await axios.get(`${process.meta.env.VITE_PROD_SERVER}/persons`)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addNewPerson = async (person) => {
    try {
        let response = await axios.post(`${process.meta.env.VITE_PROD_SERVER}/addcontact`, person)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateExistingPerson = async (id, updatedUser) => {
    try {
        let response = await axios.put(`${process.meta.env.VITE_PROD_SERVER}/${id}`, updatedUser)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deletePerson = async (id) => {
    try {
        let response = await axios.delete(`${process.meta.env.VITE_PROD_SERVER}/${id}`)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}