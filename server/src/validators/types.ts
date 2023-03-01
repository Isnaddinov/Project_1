import { check } from "express-validator";
export const typesCheck = () => [
    check('name', "Nomini kiritish shart").notEmpty(),
    check('img', "Rasmkiritish shart").notEmpty(),
    check('categories_id', "categories_id ni kiritish shart ").notEmpty()
]