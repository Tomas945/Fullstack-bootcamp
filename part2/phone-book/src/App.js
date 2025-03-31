import { useState } from "react";

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
	const filterpersons = () => {
		return persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
	}
	return (
		<div>
			<h2>Phonebook</h2>

			<p> filter shown with <input  onChange={handleFilter}/></p>
			<form onSubmit={handleSubmit}>
				<h2>Add a new</h2>
				<div>
					Name: <input value={newName} onChange={handleChange} />
				</div>
				<div>
					{" "}
					Number <input value={newNumber} onChange={handleNumber} />
				</div>
				<div>
					<button>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			
			{filterpersons().map((person) => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	);
};

export default App;
