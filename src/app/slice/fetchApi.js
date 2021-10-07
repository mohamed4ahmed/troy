import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
	name: API,
	initialState: {
		about: null,
		products: {
			special: null,
			salads: null,
			appetizers: null,
			sandwiches: null,
			meals: null,
			crepe: null,
			desserts: null,
			hotdrinks: null,
			hotcoffee: null,
			icecoffee: null,
			freshjuices: null,
			milkshake: null,
			cocktail: null,
			softdrinks: null,
		},
		productsList: null,
		posts: null,
		instaPosts: null,
		hero: null,
		heroProduct: null,
		heroBlog: null,
	},
	reducers: {
		setAboutData: (state, action) => {
			state.about = action.payload;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		setInstaPosts: (state, action) => {
			state.instaPosts = action.payload;
		},
		setHero: (state, action) => {
			state.hero = action.payload;
		},
		setProductSpecial: (state, action) => {
			state.products.special = action.payload;
		},
		setProductSalads: (state, action) => {
			state.products.salads = action.payload;
		},
		setProductAppetizers: (state, action) => {
			state.products.appetizers = action.payload;
		},
		setProductSandwiches: (state, action) => {
			state.products.sandwiches = action.payload;
		},
		setProductMeals: (state, action) => {
			state.products.meals = action.payload;
		},
		setProductCrepe: (state, action) => {
			state.products.crepe = action.payload;
		},
		setProductDesserts: (state, action) => {
			state.products.desserts = action.payload;
		},
		setProductHotdrinks: (state, action) => {
			state.products.hotdrinks = action.payload;
		},
		setProductHotcoffee: (state, action) => {
			state.products.hotcoffee = action.payload;
		},
		setProductIcecoffee: (state, action) => {
			state.products.icecoffee = action.payload;
		},
		setProductFreshjuices: (state, action) => {
			state.products.freshjuices = action.payload;
		},
		setProductMilkshake: (state, action) => {
			state.products.milkshake = action.payload;
		},
		setProductCocktail: (state, action) => {
			state.products.cocktail = action.payload;
		},
		setProductSoftdrinks: (state, action) => {
			state.products.softdrinks = action.payload;
		},
		setHeroProduct: (state, action) => {
			state.heroProduct = action.payload;
		},
		setProductsList: (state, action) => {
			state.productsList = action.payload;
		},
		setHeroBlog: (state, action) => {
			state.heroBlog = action.payload;
		},
	},
});

const { reducer, actions } = fetchApi;

export const {
	setAboutData,
	setPosts,
	setInstaPosts,
	setHero,
	setProductSpecial,
	setProductSalads,
	setProductAppetizers,
	setProductSandwiches,
	setProductMeals,
	setProductCrepe,
	setProductDesserts,
	setProductHotdrinks,
	setProductHotcoffee,
	setProductIcecoffee,
	setProductFreshjuices,
	setProductMilkshake,
	setProductCocktail,
	setProductSoftdrinks,
	setHeroProduct,
	setProductsList,
	setHeroBlog,
} = actions;

export default reducer;