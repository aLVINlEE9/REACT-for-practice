import React from "react";
import Comment  from "./Comment";

const commnets = [
	{
		id: 1,
		name: "alvin",
		comment: "hello my name is alvin",
	},
	{
		id: 2,
		name: "alvin",
		comment: "why nobody answer me",
	},
	{
		id: 3,
		name: "jacob",
		comment: "hi hi!",
	},
];

function CommentList(props) {
	return (
		<div>
			{commnets.map((comment) => {
				return (
					<Comment key={comment.id} name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
}

export default CommentList;