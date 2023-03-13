
export type User = {
    id: number
    name: string
    username: string
    password: string
    role: any | undefined
}

export type Basket = {
    id: number
    user_token: string
}

export type Order = {
    name: string
    surname: string
    phone: string
    viloyat: string
    tuman: string
    shahar: string
    aniq_adress:  string
    umummiybahosi: number
    productsId: number[]
    status: string
    basketId: number
}

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
    type_id: number
}
export type Count = {
    id: number,
    productId: number
    counts: number
    basketId: number
}
export type Banner = {
    id: number
    img: string
    title: string
}



