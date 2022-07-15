import React from "react";
import Book from "./Book";

const BookList = [
	{
		id: 1,
		name: "파이썬",
		numOfPage: 200,
	},
	{
		id: 2,
		name: "AWS",
		numOfPage: 300,
	},
	{
		id: 3,
		name: "리엑트",
		numOfPage: 400,
	},
]

function Library(props) {
	return (
		<div>
			{BookList.map((book) => {
				return (
					<Book key={book.id} name={book.name} numOfPage={book.numOfPage}></Book>
				)
			})}
		</div>
	);
}

export default Library;
