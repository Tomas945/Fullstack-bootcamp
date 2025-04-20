import axios from "axios";

const deleteperson = (personid) => {
    return(
    axios
    .delete(`https://phone-book-backend-y621.onrender.com/api/persons/${personid}`)       
    .then(response => {
        return response.data
    })
)
    
}


export default deleteperson;