export default {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "projectType",
			title: "Project type",
			type: "string",
			options: {
				list: [
					{ value: "special", title: "Special" },
					{ value: "salads", title: "Salads" },
					{ value: "appetizers", title: "Appetizers" },
					{ value: "sandwiches", title: "Sandwiches" },
					{ value: "meals", title: "Meals" },
					{ value: "crepe", title: "Crepe" },
					{ value: "desserts", title: "Desserts" },
					{ value: "hotdrinks", title: "Hotdrinks" },
					{ value: "hotcoffee", title: "Hotcoffee" },
					{ value: "icecoffee", title: "Icecoffee" },
					{ value: "freshjuices", title: "Freshjuices" },
					{ value: "milkshake", title: "Milkshake" },
					{ value: "cocktail", title: "Cocktail" },
					{ value: "softdrinks", title: "Softdrinks" },
				],
			},
		},
		{
			name: "special",
			title: "Special",
			type: "boolean",
		},
		{
			name: "new",
			title: "New",
			type: "boolean",
		},
		{
			name: "bestSeller",
			title: "Best Seller",
			type: "boolean",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],
};