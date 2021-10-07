import React, { useEffect } from "react";
import BlogContainer from "../../containers/Blog/Blog";
const Blog = () => {
	useEffect(() => {
		document.title = "Blog - TROY COFFE & Resturant";
	}, []);

	return (
		<div>
			<BlogContainer />
		</div>
	);
};

export default Blog;
