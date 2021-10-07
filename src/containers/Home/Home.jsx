import React, { useEffect, useState } from "react";
import {
	FullPage,
	HighlightPosts,
	InfoMaps,
	InfoSection,
	InstaPosts,
	Products,
	SectionLink,
	SpinnerBook,
} from "../../components";
import {
	setAboutData,
	setHero,
	setInstaPosts,
	setPosts,
	setProductsList,
	setProductSpecial,
} from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
	fetchAboutData,
	fetchBlogData,
	fetchHeroData,
	fetchInstaPost,
	fetchProduct,
} from "../../api";
import {
	Salads,
	Appetizers,
	Sandwiches,
	Meals,
	Crepe,
	Desserts,
	Hotdrinks ,
	Hotcoffee ,
	Icecoffee,
	Freshjuices,
	Milkshake,
	Cocktail,
	Softdrinks,
} from "../../app/ItemTypes";
import { useSelector } from "react-redux";
import feedbackImg from "../../assets/img/feedback.svg";
import { AiOutlineStar } from "react-icons/ai";

const feedback = {
	subHeader: "TROY COFFE",
	header: "TROY COFFE Service Rating",
	description:
		"Each of your comments will help TROY COFFE & Resturant improve its service to serve you better!",
	linkBtn: "/feedback",
	contentBtn: "Evaluate",
	img: feedbackImg,
	icon: <AiOutlineStar />,
};

const Home = () => {
	const [spinner, setSpinner] = useState(true);
	const dispatch = useDispatch();

	const special = useSelector((state) => state.api.products.special);
	const posts = useSelector((state) => state.api.posts);
	const hero = useSelector((state) => state.api.hero);
	const about = useSelector((state) => state.api.about);
	const instaPosts = useSelector((state) => state.api.instaPosts);

	useEffect(() => {
		document.title = "TROY COFFE & Resturant - HomePage";
	}, []);

	useEffect(() => {
		if (!hero) {
			fetchHeroData()
				.then((data) => {
					const action = setHero(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, hero]);

	useEffect(() => {
		if (!about) {
			fetchAboutData()
				.then((data) => {
					const action = setAboutData(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, about]);

	useEffect(() => {
		if (!posts) {
			fetchBlogData()
				.then((posts) => {
					let postSort = [];
					postSort = posts.slice().sort((value1, value2) => {
						const dateValue1 = new Date(value1.publishedAt).getTime();
						const dateValue2 = new Date(value2.publishedAt).getTime();
						return dateValue1 < dateValue2 ? 1 : -1;
					});
					const action = setPosts(postSort);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, posts]);

	useEffect(() => {
		if (!instaPosts) {
			fetchInstaPost()
				.then((instaPosts) => {
					let postsSort = [];
					postsSort = instaPosts.slice().sort((value1, value2) => {
						const dateValue1 = new Date(value1.publishedAt).getTime();
						const dateValue2 = new Date(value2.publishedAt).getTime();
						return dateValue1 < dateValue2 ? 1 : -1;
					});
					const action = setInstaPosts(postsSort);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, instaPosts]);

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
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<div>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<FullPage />
					<LazyLoadComponent>
						<InfoSection />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<InfoMaps />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<Products products={special} />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<HighlightPosts />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<InstaPosts />
					</LazyLoadComponent>
					<LazyLoadComponent>
						<SectionLink
							subHeader={feedback.subHeader}
							header={feedback.header}
							description={feedback.description}
							linkBtn={feedback.linkBtn}
							img={feedback.img}
							contentBtn={feedback.contentBtn}
							iconBtn={feedback.icon}
							dark
						/>
					</LazyLoadComponent>
				</>
			)}
		</div>
	);
};

export default Home;