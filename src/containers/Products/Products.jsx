import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct, fetchProduct } from "../../api";
import {
	Salads,
	Appetizers,
	Sandwiches,
	Meals,
	Crepe,
	Desserts,
	Hotdrinks,
	Hotcoffee,
	Icecoffee,
	Freshjuices,
	Milkshake,
	Cocktail,
	Softdrinks,
} from "../../app/ItemTypes";
import {
	setProductSpecial,
	setHeroProduct,
	setProductsList,
} from "../../app/slice/fetchApi";
import { SpinnerBook, HeroPage, ProductsList } from "../../components";

const Products = () => {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.api.productsList);
	const heroProduct = useSelector((state) => state.api.heroProduct);

	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		if (!productsList) {
			fetchProduct()
				.then((products) => {
					const special = [];

					const salads = [];
					const appetizers = [];
					const sandwiches = [];
					const meals = [];
					const crepe = [];
					const desserts = [];
					const hotdrinks = [];
					const hotcoffee = [];
					const icecoffee = [];
					const freshjuices = [];
					const milkshake = [];
					const cocktail = [];
					const softdrinks = [];

					products.map((product, index) => {
						if (product.projectType === Salads) salads.push(product);
						else if (product.projectType === Appetizers) appetizers.push(product);
						else if (product.projectType === Sandwiches) sandwiches.push(product);
						else if (product.projectType === Meals) meals.push(product);
						else if (product.projectType === Crepe) crepe.push(product);
						else if (product.projectType === Desserts) desserts.push(product);
						else if (product.projectType === Hotdrinks) hotdrinks.push(product);
						else if (product.projectType === Hotcoffee) hotcoffee.push(product);
						else if (product.projectType === Icecoffee) icecoffee.push(product);
						else if (product.projectType === Freshjuices) freshjuices.push(product);
						else if (product.projectType === Milkshake) milkshake.push(product);
						else if (product.projectType === Cocktail) cocktail.push(product);
						else if (product.projectType === Softdrinks) softdrinks.push(product);

						product.special && special.push(product);

						return null;
					});
					let action;
					const object = {
						special: special,
						salads: salads,
						appetizers: appetizers,
						sandwiches: sandwiches,
						meals: meals,
						crepe: crepe,
						desserts: desserts,
						hotdrinks: hotdrinks,
						hotcoffee: hotcoffee,
						icecoffee: icecoffee,
						freshjuices: freshjuices,
						milkshake: milkshake,
						cocktail: cocktail,
						softdrinks: softdrinks,
					};
					action = setProductsList(object);
					dispatch(action);
					action = setProductSpecial(special);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, productsList]);

	useEffect(() => {
		if (!heroProduct) {
			fetchHeroProduct()
				.then((data) => {
					const action = setHeroProduct(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, heroProduct]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					{" "}
					<HeroPage slides={heroProduct} idScrollTo="productList" />
					<ProductsList products={productsList} />
				</>
			)}
		</>
	);
};

export default Products;