import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			},
            {
                name: "Redux",
                exercises: 11,
                id: 4
            }
		],
	};
	return (
		<div>
			<Header title={course.name} />
			<Content parts={course.parts} />
            <Total exercises={course.parts} />
			
		</div>
	);
};

export default Course;
