import { Request, Response } from "express";
import { Products, Types } from "../types/types"
import multer from "multer"
import { validationResult } from "express-validator";
import { findTypeById } from "../services/types.service";
import { allProductsGet, findProductById, findProductByName, productByTypeId, putProduct, putProduct1, removeProdcut, writeProduct } from "../services/products.service";

export async function getProductsbyTypeId(req: Request, res: Response) {
  try {
    //Elsatma! paramsda  type_id ni  baramiz
    const type_id = +req.params.id
    const type = await findTypeById(type_id)
    if (!type){ return res.status(404).json({ message: "Type not found by typeId" })}
    const products = await productByTypeId(type_id)
    res.status(200).json({ message: "Product has got", products })
  } catch (error) {
    res.status(400).json({ message: "Error with get product" + error })
  }
}
export async function getProductbyId(req: Request, res: Response) {
  try {
    const id = +req.params.id
    const product = await findProductById(id)
    if(!product){return res.status(400).json({message: "Product not found by id"})}
    res.status(200).json({ message: "Product has got", product })
  } catch (error) {
    res.status(400).json({ message: "Error with getbyId product" + error })
  }

}
export async function getSearchProduct(req: Request, res: Response) {
  try {
    //Elsatma! query zaprosda name dab yibaramiz  baramiz
    const { name } = req.query
    const products = await findProductByName(String(name))
    if(!products){return res.status(400).json({message: "Product not found by name"})}
    res.status(200).json({ message: "Product has got", products })
  } catch (error) {
    res.status(400).json({ message: "Error with get product" + error })
  }

}
export async function postProducts(req: Request, res: Response) {
  try {
    const errorsv = validationResult(req)
    if (!errorsv.isEmpty()) {
      const { errors } = Object(errorsv)
      const { msg } = errors[0]
      return res.status(400).json({ message: msg })
    }
    const body: Products = req.body
    const img = String(req.file?.path)
    if (img == undefined || null) { res.status(400).json({ message: "Must be product_img" }) }
    const { name, price, desc, discount, type_id } = body
    const type = await findTypeById(+type_id)
    if (!type){ return res.status(404).json({ message: "Type not found by typeId" })}
    const newProduct = await writeProduct(name, img, price, desc, discount, +type_id)
    res.status(200).json({ message: "Product has writed", newProduct })
  } catch (error) {
    res.status(400).json({ message: "Error with write product" + error })
  }
}

export async function updateProducts(req: Request, res: Response) {
  try {
    const errorsv = validationResult(req)
    if (!errorsv.isEmpty()) {
      const { errors } = Object(errorsv)
      const { msg } = errors[0]
      return res.status(400).json({ message: msg })
    }
    const id = +req.params.id
    const body: Products = req.body
    const img = String(req.file?.path)
    const findProduct = await findProductById(id)
    if(!findProduct){return res.status(400).json({message:"Product not found by Id"})}
    if (img === null || undefined) { res.status(400).json({ message: "Must be product_img" }) }
    const { name, desc, price, discount, type_id } = body
    if (type_id == undefined || null) {
      const product = await putProduct(id, name, img, price, desc,  discount)
      res.status(200).json({ message: "Product has updated", product })}
      const type = findTypeById(+type_id)
      if (!type){ return res.status(404).json({ message: "Type not found by typeId" })}
    const product = await putProduct1(id, name, img, price, desc, discount, +type_id)
    res.status(200).json({ message: "Product has updated", product })
  } catch (error) {
    res.status(400).json({ message: "Error with update product " + error })
  }

}
export async function deleteProducts(req: Request, res: Response) {
  try {
    const id = +req.params.id
    const findProduct = await findProductById(id)
    if(!findProduct){return res.status(400).json({message:"Product not found by Id"})}
    const product = await removeProdcut(id)
    res.status(200).json({ message: "Product has deleted ", product })
  } catch (error) {
    res.status(400).json({ message: "Error with delete product" + error })
  }

}
export async function getAllProducts(req:Request,res: Response) {
  try {
    const allProducts = await allProductsGet()
    res.status(200).json({ message: "All products", allProducts })
  } catch (error) {
    res.status(400).json({ message: "Error with All products get " + error })}}

export async function getDiscountroducts(req:Request, res: Response) {
  try {
    const allProducts = await allProductsGet()
    const discountProducts = allProducts?.filter((products) => products.discount > 0)
    res.status(200).json({ message: "All products", discountProducts })
  } catch (error) {
    res.status(400).json({ message: "Error with Discount products get " + error })}}
