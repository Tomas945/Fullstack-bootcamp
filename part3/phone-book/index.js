require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Phone = require("./models/Phone");
const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());



app.get("/", (request, response) => {
	response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
	Phone.find({}).then(persons => {
		response.json(persons)
		
	})
});


app.get("/api/persons/:id", (request, response) => {
	Phone.findById(request.params.id).then(person => {
		response.json(person)
	})
});

app.delete("/api/persons/:id", (request, response) => {
	Phone.findByIdAndDelete(request.params.id).then(() => {
		response.status(204).end()
	})
});
 

app.post("/api/persons", (request, response) => {
    const body = request.body;
	
    const person = {
        name: body.name,
        number: body.number,
    };
    
	Phone.create(person).then(person => {
		response.json(person)
	})
});


const PORT = process.env.PORT ;
app.listen(PORT, () => {
	
	console.log(`Server running on port ${PORT}`);
	
});
