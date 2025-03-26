import { useState } from "react";
import "./App.css";

function App() {
	const anecdotes = [
		{anecdote:"If it hurts, do it more often.", vote:0},
		{anecdote:"Adding manpower to a late software project makes it later!", vote:0},
		{anecdote:"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", vote:0},
		{anecdote:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", vote:0},
    {anecdote:"Premature optimization is the root of all evil.", vote:0},
		{anecdote:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", vote:0},
		{anecdote:"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.", vote:0},
		{anecdote:"The only way to go fast, is to go well.",vote :0},
	];

	const [selected, setSelected] = useState(0);
  const [anecdote,setAnecdote] = useState(anecdotes);
  const [high, setHigh] = useState(0);
  const [highAnecdote, setHighAnecdote] = useState([]);
  const nextHandler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteHandler = () => {
    const copy = [...anecdote];
   
    copy[selected].vote += 1;
    setAnecdote(copy);
    if (copy[selected].vote >= high)
      return(
        setHigh(copy[selected].vote),
        setHighAnecdote(copy[selected])
      )
      
  }

  return (
    
    <div>
    <p>{anecdote[selected].anecdote} </p>
    <p>has {anecdote[selected].vote} votes</p>
    <button onClick={voteHandler}>vote</button>
    <button onClick={nextHandler}>next</button>
    {high === 0 ? <p>No votes yet</p> : <p>{highAnecdote.anecdote} has {highAnecdote.vote} votes </p>}
    </div>
  )}

export default App;
