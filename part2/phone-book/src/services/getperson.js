import axios from "axios"

const getperson =() => {
     return    (
     axios
     .get('https://phone-book-backend-y621.onrender.com/api/persons')
     .then(response => {
                return response.data})
)}


export default getperson;