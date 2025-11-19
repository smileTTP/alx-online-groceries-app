export interface ProductProps {
    name: string,
    quantity: string,
    price: number,
    image: string,
    type: string,
}

export interface ProductsList {
    products: ProductProps[]
}