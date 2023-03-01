import { check } from "express-validator";
export const productsCheck = () => [
    check('name', "Nomini kiritish shart").notEmpty(),
    check('img', "Rasmkiritish shart").notEmpty(),
    check('desc', "Ma'lumot kiritish shart").notEmpty(),
    check('price', "Narx kiritish shart").notEmpty(),
    check('type_id', "type_id ni kiritish shart ").notEmpty()
   
]