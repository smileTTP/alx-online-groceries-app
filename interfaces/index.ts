export interface ProductProps {
    name: string,
    quantity: string,
    price: number,
    image: number,
    type: string,
}

export interface ProductsList {
    products: ProductProps[]
}