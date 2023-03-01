import { Categories } from '../types/types';
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { getAllCategories, putCategory, removeCategory, writeCategory } from '../services/categotries.service';

export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await getAllCategories() 
        return res.status(200).json({message: "Categorie has got", categories})
    } catch (error) {
        res.status(400).json({message: "Error with get categories " + error})} }

export async function postCategory(req: Request, res: Response) {
    try {
        const errorsv = validationResult(req) 
        if(!errorsv.isEmpty()){
            const{errors} = Object(errorsv)
            const {msg} = errors[0]
            return res.status(400).json({message: msg})}
             const body:Categories = req.body
             const{name} = body
            const newCategory = await writeCategory(name)   
             return res.status(200).json({message: "Categorie has writed", newCategory})
    } catch (error) {
        res.status(400).json({message: "Error with post categories " + error})}}

export async function updateCategory(req: Request, res: Response) {
    try {
        const errorsv = validationResult(req) 
        if(!errorsv.isEmpty()){
            const{errors} = Object(errorsv)
            const {msg} = errors[0]
            return res.status(400).json({message: msg}) }
        const id = +req.params.id
        const name = req.body.name
        const category = await putCategory(id, name)
        return res.status(200).json({message: "Categorie has updated", category})
    } catch (error) {
        res.status(400).json({message: "Error with update categories " + error})}}

export async function deleteCategory(req: Request, res: Response) {
    try {
        const id = +req.params.id
       const category = await removeCategory(id)
        return res.status(200).json({message: "Categorie has deleted", category})
    } catch (error) {
        res.status(400).json({message: "Error with delete categories " + error})}}
 