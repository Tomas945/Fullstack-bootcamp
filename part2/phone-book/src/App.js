import { useState } from "react";
import Filter from "./Filter";
import Personform from "./Personform";
import Personslist from "./Persons";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	  ])
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newFilter, setNewFilter] = useState("");

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

		setPersons(persons.concat(personObject));
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
			<Personslist persons={persons} newFilter={newFilter} />
			
		</div>
	);
};

export default App;
