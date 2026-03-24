import { FitlersProps, ProductProps } from "@/interfaces";
import { APPLEJUICE, BAKERY, BANANAS, BEEFBONE, BELLPEPPER, BEVERAGES, BROILERCHICKEN, COCACOLA, DAIRYEGGS, DIETCOKE, EGGCHICKENRED, EGGCHICKENWHITE, EGGNOODLES, EGGPASTA, GINGER, MAYONNAISE, MEATFISH, OIL, ORANGEJUICE, PEPSI, PULSES, REDAPPLE, RICE, ROUNDCUTEGGNOODLES, SPRITE, VEGGIESFRUITS } from "@/constants/index";

const SAMPLE_DATA: ProductProps[] = [
    {
        name: "Organic Bananas",
        quantity: "7pcs",
        price: 4.99,
        image: BANANAS,
        type: "Fresh Fruits & Vegetable",
        description: "Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet."
    },
    {
        name: "Red Apple",
        quantity: "1kg",
        price: 4.99,
        image: REDAPPLE,
        type: "Fresh Fruits & Vegetable",
        description: ""
    },
    {
        name: "Red Bell Pepper",
        quantity: "1kg",
        price: 4.99,
        image: BELLPEPPER,
        type: "Fresh Fruits & Vegetable",
        description: ""
    },
    {
        name: "Ginger",
        quantity: "250gm",
        price: 4.99,
        image: GINGER,
        type: "Fresh Fruits & Vegetable",
        description: ""
    },
    {
        name: "Beef Bone",
        quantity: "1kg",
        price: 4.99,
        image: BEEFBONE,
        type: "Meat & Fish",
        description: ""
    },
    {
        name: "Broiler Chicken",
        quantity: "1kg",
        price: 4.99,
        image: BROILERCHICKEN,
        type: "Meat & Fish",
        description: ""
    },
    {
        name: "Diet Coke",
        quantity: "355ml",
        price: 1.99,
        image: DIETCOKE,
        type: "Beverages",
        description: ""
    },
    {
        name: "Sprite Can",
        quantity: "325ml",
        price: 1.50,
        image: SPRITE,
        type: "Beverages",
        description: ""
    },
    {
        name: "Apple & Grape Juice",
        quantity: "2L",
        price: 15.99,
        image: APPLEJUICE,
        type: "Beverages",
        description: ""
    },
    {
        name: "Orange Juice",
        quantity: "2L",
        price: 15.99,
        image: ORANGEJUICE,
        type: "Beverages",
        description: ""
    },
    {
        name: "Coca Cola Can",
        quantity: "325ml",
        price: 4.99,
        image: COCACOLA,
        type: "Beverages",
        description: ""
    },
    {
        name: "Pepsi Can",
        quantity: "355ml",
        price: 1.99,
        image: PEPSI,
        type: "Beverages",
        description: ""
    },
    {
        name: "Egg Chicken Red",
        quantity: "4pcs",
        price: 1.99,
        image: EGGCHICKENRED,
        type: "Dairy & Eggs",
        description: ""
    },
    {
        name: "Egg Chicken White",
        quantity: "180g",
        price: 1.50,
        image: EGGCHICKENWHITE,
        type: "Dairy & Eggs",
        description: ""
    },
    {
        name: "Egg Pasta",
        quantity: "30gm",
        price: 15.99,
        image: EGGPASTA,
        type: "Dairy & Eggs",
        description: ""
    },
    {
        name: "Egg Noodles",
        quantity: "2L",
        price: 15.99,
        image: EGGNOODLES,
        type: "Dairy & Eggs",
        description: ""
    },
    {
        name: "Mayonnais Eggless",
        quantity: "325ml",
        price: 4.99,
        image: MAYONNAISE,
        type: "Dairy & Eggs",
        description: ""
    },
    {
        name: "Egg Noodles",
        quantity: "330ml",
        price: 4.99,
        image: ROUNDCUTEGGNOODLES,
        type: "Dairy & Eggs",
        description: ""
    },
]

const FILTERS: FitlersProps[] = [
    {
        name: "Fresh Fruits & Vegetable",
        image: VEGGIESFRUITS
    },
    {
        name: "Cooking Oil & Ghee",
        image: OIL
    },
    {
        name: "Meat & Fish",
        image: MEATFISH
    },
    {
        name: "Bakery & Snacks",
        image: BAKERY
    },
    {
        name: "Dairy & Eggs",
        image: DAIRYEGGS
    },
    {
        name: "Beverages",
        image: BEVERAGES
    },
    {
        name: "Pulses",
        image: PULSES
    },
    {
        name: "Rice",
        image: RICE
    }
];

export { SAMPLE_DATA, FILTERS };