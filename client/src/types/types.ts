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
    desc: string
    price: number
    discount: number
    type_id: number
}