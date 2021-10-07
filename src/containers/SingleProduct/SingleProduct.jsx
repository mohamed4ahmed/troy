import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchSingleProduct } from "../../api";
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
import { setProductsList, setProductSpecial } from "../../app/slice/fetchApi";
import { SingleProduct, SpinnerBook } from "../../components";

const SingleProductContainer = () => {
	const [singleProduct, setSingleProduct] = useState(null);
	const [spinner, setSpinner] = useState(true);

	const special = useSelector((state) => state.api.products.special);

	const { slug } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!special) {
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
	}, [dispatch, special]);

	useEffect(() => {
		fetchSingleProduct(slug)
			.then((data) => {
				setSingleProduct(data[0]);
			})
			.catch((error) => console.log("error: ", error));
	}, [slug]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<div className="">
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<SingleProduct product={singleProduct} special={special} />
				</>
			)}
		</div>
	);
};

export default SingleProductContainer;