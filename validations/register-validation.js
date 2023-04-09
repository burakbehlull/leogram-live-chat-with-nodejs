const { body } = require('express-validator');

const registerValidation = [
    body('username')
    .notEmpty()
    .withMessage('Kullanıcı adı bos olamaz.')
    .isAlphanumeric()
    .withMessage('Kullanıcı adı sadece sayı ve harflerden oluşmalıdır.')
    .isLength({min: 3, max: 10 })
    .withMessage('Kullanıcı adı en kısa 3, en uzun 10 harften olusmalıdır.'),

    body('email')
    .isEmail()
    .withMessage('Email alanı düzgün olmalı.'),

    body('password')
    .isLength({min: 7})
    .withMessage('Parola uzun olmalı.'),

    body('passwordConfirm')
    .custom((value, {req})=> {
        if(value !== req.body.password) {
            throw new Error('Sifre doğrulanamadı.')
        }
        return true
    })
]

module.exports = registerValidation

