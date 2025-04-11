const Personslist = ({persons, newFilter,deleteHandler}) => {
    
   
        
   
    const filterpersons = () => {
		return persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
	}
        return (
            <div>
                {filterpersons().map(person => <p key={person.name}>{person.name} {person.number} <button onClick={() => deleteHandler(person.id)}>delete</button></p>)}
            </div>
        )
    }
   
export default Personslist;