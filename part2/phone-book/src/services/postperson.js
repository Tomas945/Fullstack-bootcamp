import axios from "axios";

const postperson = ({personobject}) => {
    return (
        axios
        .post('https://phone-book-backend-y621.onrender.com/api/persons',personobject)
        .then(response => {
                return response.data
        })
)}

export default postperson;