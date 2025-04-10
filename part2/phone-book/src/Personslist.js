import deleteperson from "./services/deleteperson";

const Personslist = ({persons, newFilter}) => {
    
   
        
   
    const filterpersons = () => {
		return persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
	}
        return (
            <div>
                {filterpersons().map(person => <p key={person.name}>{person.name} {person.number} <button onClick={() => deleteperson(person.id)}>delete</button></p>)}
            </div>
        )
    }
   
export default Personslist;