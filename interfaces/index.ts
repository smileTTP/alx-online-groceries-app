export interface ProductProps {
    name: string,
    quantity: string,
    price: number,
    image: number,
    type: string,
    description: string,
}

export interface ProductsList {
    products: ProductProps[]
}

export interface FitlersProps {
    name: string,
    image: number
}

export interface FiltersList {
    filters: FitlersProps[]
}