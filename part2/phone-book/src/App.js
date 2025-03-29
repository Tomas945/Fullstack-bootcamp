import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	const handleChange = (event) => {
		setNewName(event.target.value);
		persons.forEach((person) => {
			if (person.name=== event.target.value) {
				alert(person.name + " is already added to phonebook");
				setNewName("");
			}
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
		};

		setPersons(persons.concat(personObject));
		setNewName("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={handleChange} />
				</div>
				<div>
					<button>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key={person.name}>{person.name}</p>
			))}
		</div>
	);
};

export default App;
