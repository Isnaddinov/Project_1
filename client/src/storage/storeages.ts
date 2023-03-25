import {Writable, writable } from "svelte/store";
import { Categories, Types } from "../types/types";

export const categoriesStore:Writable<Categories[]> = writable([])
export const typesStore:Writable<Types[]> = writable([])