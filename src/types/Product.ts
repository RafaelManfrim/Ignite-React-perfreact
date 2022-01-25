export type Product = {
    id: number
    price: number
    title: string
}

export type ProductListResults = {
    data: Product[],
    totalPrice: number
}