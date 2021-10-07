import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
	useEffect(() => {
		document.title = "Comment - TROY COFFE & Resturant";
	}, []);
	return <FeedbackContainer />;
};

export default Feedback;
