import { Item } from '../types/types';
import { Request, Response } from "express";
import { findItemById, removeItem, writeItem } from '../services/item.service';

export async function postItem(req:Request, res:Response){
  try {
   const body:Item = req.body
   const{ name, img, price, desc, count,  discount, orderId } = body
   const item = await writeItem(name, img, price, desc, count,  discount, orderId)
   return res.status(200).json({message: "Item posted", item})
  } catch (error) {
   return res.status(400).json({message: "Error with post Count"})
  }
   
}


export async function delteItem(req:Request, res:Response){
try {
   const id:number = +req.params.id
   const find = await findItemById(id)
   if(!find){return res.status(400).json({message: "Count not found byId"})}
   const item = await removeItem(id)
   return res.status(200).json({message: "Count delete", item})
} catch (error) {
   return res.status(400).json({message: "Error with delete Count"})
}
}