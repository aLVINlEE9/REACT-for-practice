import React from "react";

const students = [
	{
		id: 1,
		name: "Alvin",
	},
	{
		id: 2,
		name: "Steve",
	},
	{
		id: 3,
		name: "Jacob",
	},
	{
		id: 4,
		name: "paul",
	},
];

function AttendanceBook(props) {
	return (
		<ul>
			{students.map((student) => {
				return <li key={student.id}>{student.name}</li>;
			})}
		</ul>
	);
}

export default AttendanceBook