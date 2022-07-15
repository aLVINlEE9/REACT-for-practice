import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
	{
		id: 1,
		message: "hello, this is your today's schedule.",
	},
	{
		id: 2,
		message: "it's lunch time.",
	},
	{
		id: 3,
		message: "the meeting will begin soon."
	},
];

var timer;

class NotificationList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notifications: [],
		};
	}
	componentDidUpdate(){
		console.log(
			"list update"
		);
	}
	componentDidMount() {
		const { notifications } = this.state;
		
		console.log("list did mount");
		timer = setInterval(() => {
			console.log(notifications.length, reservedNotifications.length)
			if (notifications.length < reservedNotifications.length) {
				const index = notifications.length;
				notifications.push(reservedNotifications[index]);
				this.setState({
					notifications: notifications,
				});
			} else {
				this.setState({
					notifications: [],
				});
				console.log(notifications[0]);
				clearInterval(timer);
			}
		}, 1000);
	}

	componentWillUnmount(){
		console.log("list will unmount")
	}



	render() {
		console.log("rendering");
		return (
			<div>
				{this.state.notifications.map((notification) => {
					return (<Notification 
							key={notification.id}
							id={notification.id}
							message={notification.message} 
							/>
					);
				})}
			</div>
		);
	}
}

export default NotificationList