import { Request, Response } from "express";
import { Types } from "../types/types"
import multer from "multer"
import { validationResult } from "express-validator";
import { findCategoryById } from "../services/categotries.service";
import { allTypesGet, findTypeById, putType, putType1, removeType, typesByCatId, writeType } from "../services/types.service";

export async function getTypesbyCat_id(req: Request, res: Response) {
  try {
    //Eslatma! paramsda  categories_id ni yibaramiz
    const categories_id = +req.params.id
    const category = await findCategoryById(categories_id)
    if (!category) { return res.status(400).json({ message: "Category not found by Id" }) }
    const types = await typesByCatId(categories_id)
    res.status(200).json({ message: "Type has got", types })
  } catch (error) {
    res.status(400).json({ message: "Error with get type " + error })
  }
}
export async function postTypes(req: Request, res: Response) {
  try {
    const errorsv = validationResult(req)
    if (!errorsv.isEmpty()) {
      const { errors } = Object(errorsv)
      const { msg } = errors[0]
      return res.status(400).json({ message: msg })
    }
    const body: Types = req.body
    const img = String(req.file?.path)
    if (img == undefined || null) { res.status(400).json({ message: "Must be type_img" }) }
    const { name, categories_id } = body
    const category = await findCategoryById(+categories_id)
    if (!category) { return res.status(400).json({ message: "Categoty not found by Id" }) }
    const newType = await writeType(name, img, +categories_id)
    res.status(200).json({ message: "Type has writed", newType })
  } catch (error) { res.status(400).json({ message: "Error with write type " + error }) }
}

export async function updateTypes(req: Request, res: Response) {
  try {
    const errorsv = validationResult(req)
    if (!errorsv.isEmpty()) {
      const { errors } = Object(errorsv)
      const { msg } = errors[0]
      return res.status(400).json({ message: msg })
    }
    const id = +req.params.id
    const body: Types = req.body
    const img = String(req.file?.path)
    const findType = await findTypeById(id)
    if (!findType) { return res.status(400).json({ message: "Type not found by Id" }) }
    if (img == null || undefined) { res.status(400).json({ message: "Must be type_img" }) }
    const { name, categories_id } = body
    if (categories_id == undefined || null) {
      const type = await putType(id, name, img)
      return res.status(200).json({ message: "Type has updated ", type })
    }
    const category = await findCategoryById(+categories_id)
    if (!category) { return res.status(400).json({ message: "Category not found by Id" }) }
    const type = await putType1(id, name, img, +categories_id)
    res.status(200).json({ message: "Type has updated ", type })
  } catch (error) {
    res.status(400).json({ message: "Error with update type " + error })
  }

}
export async function deleteTypes(req: Request, res: Response) {
  try {
    const id = +req.params.id
    const findType = await findTypeById(id)
    if (!findType) { return res.status(400).json({ message: "Type not found by Id" }) }
    const type = await removeType(id)
    res.status(200).json({ message: "Type has deleted", type })
  } catch (error) {
    res.status(400).json({ message: "Error with delete type" + error })
  }

}
export async function getAllTypes(req: Request, res: Response) {
  try {
    const allTypes = await allTypesGet()
    res.status(200).json({ message: "All types", allTypes })
  } catch (error) {
    res.status(400).json({ message: "Error with All types get" + error })
  }
}
