import axios from "axios";

const deleteperson = (personid) => {
    if (window.confirm("Delete this person?"))
    axios
    .delete(`http://localhost:3001/persons/${personid}`)       
    .then(response => {
        return response
    })
    
}


export default deleteperson;