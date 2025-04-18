const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

let persons = [
	{
		name: "Arto Hellas",
		number: "040-123456",
		id: 1,
	},
	{
		name: "Ada Lovelace",
		number: "39-44-5323523",
		id: 2,
	},
	{
		name: "Dan Abramov",
		number: "12-43-234345",
		id: 3,
	},
	{
		name: "Mary Poppendieck",
		number: "39-23-6423122",
		id: 4,
	},
];

app.get("/", (request, response) => {
	response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
	response.json(persons);
});

app.get("/info", (request, response) => {
	response.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`);
});

const ids = persons.map((person) => {
	return person.id;
});

app.get("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	const person = persons.find((person) => person.id === id);
	if (person) {
		response.json(person);
	} else {
		response.status(404).end();
	}
});

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id !== id)
    response.status(200).end();
});
 

app.post("/api/persons", (request, response) => {
    const body = request.body;
    const is = persons.some(person => person.name.toLocaleLowerCase().includes(body.name.toLocaleLowerCase()));

    if (!body.name || !body.number || is) {
        return response.status(400).json({
            error: "name or number missing"
        });
    }
    const person = {
        name: body.name,
        number: body.number,
        id: Math.max(...ids) + 1
    };
    persons = persons.concat(person);
    response.json(person);
});


const PORT = 3001;
app.listen(PORT, () => {
	
	console.log(`Server running on port ${PORT}`);
	
});
