import React, { useEffect } from "react";
import MembershipContainer from "../../containers/Membership/Membership";
const Membership = () => {
	useEffect(() => {
		document.title = "Member - TROY COFFE & Resturant";
	}, []);
	return <MembershipContainer />;
};

export default Membership;