import axios from "axios";

const postperson = ({personobject}) => {
    return (
        axios
        .post('http://localhost:3001/api/persons',personobject)
        .then(response => {
                return response.data
        })
)}

export default postperson;