import axios from "axios"

const getperson =() => {
     return    (
     axios
     .get('http://localhost:3001/api/persons')
     .then(response => {
                return response.data})
)}


export default getperson;