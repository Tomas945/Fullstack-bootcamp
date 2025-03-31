import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const handleChange = (event) => {
		setNewName(event.target.value);
		persons.forEach((person) => {
			if (person.name === event.target.value) {
				alert(person.name + " is already added to phonebook");
				setNewName("");
			}
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
		};

		setPersons(persons.concat(personObject));
		setNewName("");
		setNewNumber("");
	};

	const handleNumber = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleSubmit}>
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
			{persons.map((person) => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	);
};

export default App;
