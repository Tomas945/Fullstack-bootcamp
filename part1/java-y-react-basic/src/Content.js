import Part from "./Part";


const Content = (props) => {
	return (
		<div>
			<Part part={props.parts.courses[0].title} exercises={props.parts.courses[0].exercises}  />
			<Part part={props.parts.courses[1].title} exercises={props.parts.courses[1].exercises}  />
			<Part part={props.parts.courses[2].title} exercises={props.parts.courses[2].exercises}  />
		
		</div>
	);
};

export default Content;
