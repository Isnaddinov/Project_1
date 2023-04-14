export type Categories = {
    id: number
    name: string
}

export type Types = {
    id: number
    name: string
    categories_id: number
}
export type Products = {
    id: number
    name: string
    img:string
    desc: string
    price: number
    count: number
    discount: number
    type_id: number
}
export type User = {
    id: number
    name: string
    username: string
    password: string
    role: any | undefined
}
export type Basket = {
    id: number
    name: string
    userId: number
}

export type Item = {
    name: string
    img:string
    price: number
    desc: string
    count: number
    discount: number
    orderId: number
}