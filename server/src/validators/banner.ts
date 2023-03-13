import { check } from "express-validator";

export const bannerChek  = () => [
    check('img', 'Rasm kiritish kerak',).notEmpty(),
    // check('title', 'Title kiritish kerak',).notEmpty()
]