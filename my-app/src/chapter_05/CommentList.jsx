import React from "react";
import Comment  from "./Comment";

const commnets = [
	{
		name: "alvin",
		comment: "hello my name is alvin",
	},
	{
		name: "alvin",
		comment: "why nobody answer me",
	},
	{
		name: "jacob",
		comment: "hi hi!",
	},
];

function CommentList(props) {
	return (
		<div>
			{commnets.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
}

export default CommentList;