const Total = ({exercises}) => {
	return (
		<div>
			<p>
				Number of exercises{" "}
				{exercises.reduce((total, part) => total + part.exercises, 0)}
			</p>
		</div>
	);
};
export default Total;
