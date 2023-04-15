import {Writable, writable } from "svelte/store";
import { Categories, Types, Products, User, Basket, type Order } from "../types/types";

export const categoriesStore:Writable<Categories[]> = writable([])

export const typesStore:Writable<Types[]> = writable([])

export const productsStore:Writable<Products[]> = writable([])

export const getBasketProductsStorage:Writable<Products[]> = writable([])

export const searchProductStore:Writable<Products[]> = writable([])

export const discountProductStore:Writable<Products[]> = writable([])

export const registerStore:Writable<User[]> = writable([])

export const basketStorage:Writable<Basket[]> = writable([])

export const orderStorage:Writable<Order[]> = writable([])
