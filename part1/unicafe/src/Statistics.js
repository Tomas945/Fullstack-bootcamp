import StatisticsLine from "./StaticksLine";

const Statistics = ({ good, neutral, bad, all, avg, show }) => {
	return (
		<div>
			<h2>Statistics</h2>
			{!show ? 
				<h2>No feedback given</h2>
			 : 
				<table>
					<tbody>
						<StatisticsLine text={"Good"} value={good} />
						<StatisticsLine text={"Neutral"} value={neutral} />
						<StatisticsLine text={"Bad"} value={bad} />
						<StatisticsLine text={"all"} value={all} />
						<StatisticsLine text={"Average"} value={avg / all} />
						<StatisticsLine
							text={"Positive"}
							value={(good / all) * 100 + "%"}
						/>
					</tbody>
				</table>
			}
		</div>
	);
};

export default Statistics;
