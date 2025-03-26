import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";
function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [avg, setAvg] = useState(0);
	const [show, setShow] = useState(false);
	const all = good + neutral + bad;

	const goodHandler = () => {
		setGood((prevgood) => prevgood + 1);
		setAvg((prevavg) => prevavg + 1);
		if (!show) setShow(true);
	};

	const neutralHandler = () => {
		setNeutral((prevneutral) => prevneutral + 1);
		if (!show) setShow(true);
	};

	const badHandler = () => {
		setBad((prevbad) => prevbad + 1);
		setAvg((prevavg) => prevavg - 1);
		if (!show) setShow(true);
	};
	return (
		<div>
			<h1>GIVE FEEDBACK</h1>
			<Button onClick={goodHandler} text={"Good"}></Button>
			<Button onClick={neutralHandler} text={"Neutral"}></Button>
			<Button onClick={badHandler} text={"Bad"}></Button>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={all}
				avg={avg}
				show={show}
			/>
		</div>
	);
}

export default App;
