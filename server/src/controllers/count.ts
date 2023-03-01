import { Count } from './../types/types';
import { Request, Response } from "express";
import { findProductById } from '../services/products.service';
import { findCount, findCountById, removeCount, writeCount } from '../services/count.service';

export async function postCount(req:Request, res:Response){
  try {
   const body:Count = req.body
   const{ productId, counts, basketId} = body
   const product = findProductById(productId)
   if(!product){return res.status(400).json({message: "Produnct not found byId"})}
   const count = await writeCount(productId, counts, basketId)
   return res.status(200).json({message: "Count posted", count})
  } catch (error) {
   return res.status(400).json({message: "Error with post Count"})
  }
   
}
export async function getCount(req:Request, res:Response){
try {
   const productId:number = Number(req.query.productId)
   const basketId:number = Number(req.query.basketId)
   const product = findProductById(productId)
   if(!product){return res.status(400).json({message: "Produnct not found byId"})}
   const count = await findCount(productId, basketId)
   return res.status(200).json({message: "Count get", count})
} catch (error) {
   return res.status(400).json({message: "Error with get Count"})
}
}

export async function deleteCount(req:Request, res:Response){
try {
   const id:number = +req.params.id
   const find = await findCountById(id)
   if(!find){return res.status(400).json({message: "Count not found byId"})}
   const count = await removeCount(id)
   return res.status(200).json({message: "Count delete", count})
} catch (error) {
   return res.status(400).json({message: "Error with delete Count"})
}
}