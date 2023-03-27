import {Writable, writable } from "svelte/store";
import { Categories, Types, Products } from "../types/types";

export const categoriesStore:Writable<Categories[]> = writable([])

export const typesStore:Writable<Types[]> = writable([])

export const productsStore:Writable<Products[]> = writable([])

export const searchProductStore:Writable<Products[]> = writable([])