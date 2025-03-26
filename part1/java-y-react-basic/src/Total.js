const Total = (props) => {
	return (
		<div>
			<p>
				Number of exercises{" "}
				{props.exercises.courses[0].exercises + props.exercises.courses[1].exercises + props.exercises.courses[2].exercises}
			</p>
		</div>
	);
};
export default Total;
