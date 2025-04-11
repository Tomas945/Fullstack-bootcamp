import { useEffect, useState } from "react";
import Filter from "./Filter";
import Personform from "./Personform";
import Personslist from "./Personslist";
import getperson from "./services/getperson";
import postperson from "./services/postperson";
import deleteperson from "./services/deleteperson";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");
	
 

	useEffect(()=> {
		getperson()
		.then(response => {
		setPersons(response)
	})}, [])
	

	const deleteHandler = (id) => {
		if(window.confirm("Delete " + persons.find(person => person.id === id).name + "?"))
		{deleteperson(id)
		.then(response => {
		setPersons(persons.filter(person => person.id !== id))
	})}
	}

	const handleChange = (event) => {
		setNewName(event.target.value);
	
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
		};

		if (persons.some((person) => person.name.toLowerCase().includes( personObject.name.toLowerCase()))) {
			alert(personObject.name + " is already added to phonebook");
			return;
		}
		
		postperson({personobject:personObject})
		.then(response => {
		setPersons(persons.concat(response))
	})
		setNewName("");
		setNewNumber("");
	};

	const handleNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const handleFilter = (event) => {
		setNewFilter(event.target.value);
	}
	
	return (
		<div>
			<h2>Phonebook</h2>

			<Filter newFilter={newFilter} handleFilter={handleFilter} />
			<Personform addName={handleSubmit} newName={newName} handleName={handleChange} newNumber={newNumber} handleNumber={handleNumber} />
			<h2>Numbers</h2>
			<Personslist persons={persons} newFilter={newFilter} deleteHandler={deleteHandler} />
			
		</div>
	);
};

export default  App;