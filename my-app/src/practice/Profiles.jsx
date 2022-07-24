import React from "react";

function Profiles(props)
{
	return (
		<div>
			NAME: {props.name}
			INTRODUCTION: {props.introduction}
			VIEW: {props.viewCount}
		</div>
	)
}

export default Profiles;