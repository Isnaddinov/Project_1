import { check } from "express-validator";
export const orderCheck = () => [
    check('name', "Ism kiritish shart").notEmpty(),
    check('surname', "Familiyanigzni kiriting").notEmpty(),
    check('phone', "Telefon nomeringizni kiriting ").notEmpty(),
    check('viloyat', "Viloyatngizni tanlang").notEmpty(),
    check('tuman', "Tumaningizni tanlang").notEmpty(),
    check('shahar', "Shahringizni tanlang").notEmpty(),
    check('aniq_adress', "Aniq manzilingizni kiriting").notEmpty(),
    check('products', "Productlarni tanlang").notEmpty(),
    check('basketId', "BasketIdni kiriting").notEmpty()
]