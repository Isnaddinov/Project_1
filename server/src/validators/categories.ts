import { check } from "express-validator";
export const categoriesCheck = () => [
    check('name', "Nomini kiritish kerak").notEmpty()
]