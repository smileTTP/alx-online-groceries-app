import { ProductProps } from "@/interfaces";

const SAMPLE_DATA: ProductProps[] = [
    {
        name: "Organic Bananas",
        quantity: "7pcs",
        price: 4.99,
        image: "/assets/products/bananas.png",
        type: "Fresh Fruits & Vegetable",
    },
    {
        name: "Red Apple",
        quantity: "1kg",
        price: 4.99,
        image: "/assets/products/apples.png",
        type: "Fresh Fruits & Vegetable",
    },
    {
        name: "Red Bell Pepper",
        quantity: "1kg",
        price: 4.99,
        image: "/assets/products/bellPepper.png",
        type: "Fresh Fruits & Vegetable",
    },
    {
        name: "Ginger",
        quantity: "1kg",
        price: 4.99,
        image: "/assets/products/Ginger.png",
        type: "Fresh Fruits & Vegetable",
    },
    {
        name: "Red Apple",
        quantity: "250gm",
        price: 4.99,
        image: "/assets/products/apples.png",
        type: "Fresh Fruits & Vegetable",
    },
    {
        name: "Red Apple",
        quantity: "1kg",
        price: 4.99,
        image: "/assets/products/apples.png",
        type: "Fresh Fruits & Vegetable",
    },
    {
        name: "Beef Bone",
        quantity: "1kg",
        price: 4.99,
        image: "/assets/products/beefBone.png",
        type: "Meat & Fish",
    },
    {
        name: "Broiler Chicken",
        quantity: "1kg",
        price: 4.99,
        image: "/assets/products/broilerChicken.png",
        type: "Meat & Fish",
    },
    {
        name: "Diet Coke",
        quantity: "355ml",
        price: 1.99,
        image: "/assets/products/dietCoke.png",
        type: "Beverages",
    },
    {
        name: "Sprite Can",
        quantity: "325ml",
        price: 1.50,
        image: "/assets/products/sprite.png",
        type: "Beverages",
    },
    {
        name: "Apple & Grape Juice",
        quantity: "2L",
        price: 15.99,
        image: "/assets/products/apple-grape-juice.png",
        type: "Beverages",
    },
    {
        name: "Orange Juice",
        quantity: "2L",
        price: 15.99,
        image: "/assets/products/orange-juice.png",
        type: "Beverages",
    },
    {
        name: "Coca Cola Can",
        quantity: "325ml",
        price: 4.99,
        image: "/assets/products/coke.png",
        type: "Beverages",
    },
    {
        name: "Pepsi Can",
        quantity: "355ml",
        price: 1.99,
        image: "/assets/products/pepsi.png",
        type: "Beverages",
    },
    {
        name: "Egg Chicken Red",
        quantity: "4pcs",
        price: 1.99,
        image: "/assets/products/eggs-chicken-red.png",
        type: "Dairy & Eggs"
    },
    {
        name: "Egg Chicken White",
        quantity: "180g",
        price: 1.50,
        image: "/assets/products/eggs-chicken-white.png",
        type: "Dairy & Eggs"
    },
    {
        name: "Egg Pasta",
        quantity: "30gm",
        price: 15.99,
        image: "/assets/products/egg-pasta.png",
        type: "Dairy & Eggs"
    },
    {
        name: "Egg Noodles",
        quantity: "2L",
        price: 15.99,
        image: "/assets/products/egg-noodle.png",
        type: "Dairy & Eggs"
    },
    {
        name: "Mayonnais Eggless",
        quantity: "325ml",
        price: 4.99,
        image: "/assets/products/Mayonnaise-Eggless.png",
        type: "Dairy & Eggs"
    },
    {
        name: "Egg Noodles",
        quantity: "330ml",
        price: 4.99,
        image: "/assets/products/roundcut-egg-noodles.png",
        type: "Dairy & Eggs"
    },
]

const FILTERS: string [] = [
    "Fresh Fruits & Vegetable",
    "Cooking Oil & Ghee",
    "Meat & Fish",
    "Bakery & Snacks",
    "Dairy & Eggs",
    "Beverages",
    "Pulses",
    "Rice",
];

export { SAMPLE_DATA, FILTERS };