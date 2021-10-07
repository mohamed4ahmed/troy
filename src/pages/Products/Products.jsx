import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
	useEffect(() => {
		document.title = "Menu - TROY COFFE & Resturant";
	}, []);

	return (
		<>
			<ProductsContainer />
		</>
	);
};

export default Products;
