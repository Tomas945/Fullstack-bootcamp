import axios from "axios";

const deleteperson = (personid) => {
    return(
    axios
    .delete(`http://localhost:3001/persons/${personid}`)       
    .then(response => {
        return response.data
    })
)
    
}


export default deleteperson;