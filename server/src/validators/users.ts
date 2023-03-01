import { check } from "express-validator";
export const loginCheck = () => [
    check('name', "Ism kiritish shart").notEmpty(),
    check('username', "Username bo'sh bo'lishi mumkin emas").notEmpty(),
    check('username', "Username 3 harfdan kam bo'lishi mumkin emas").isLength({ min: 3 }),
    check('password', "Parolingizda probel bo'lmasligi kerak").matches(/^\S*$/),
    check('password', "Parolingiz 8 sifradan kam bo'lmasligi kerak").isLength({ min: 8 }),
    check('password', "Parolingiz 16 sifradan dan ko'p bo'lmasligi kerak").isLength({ max: 16 })
]