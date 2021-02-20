'use strict';

const changeButton = document.querySelector('.changeBtn');
const textBefore = document.querySelector('.text__before');
const textAfter = document.querySelector('.text__after');

// Шаблон, который заменяет одинарные кавычки на двойные.
const changeText = () => {
    const str = textBefore.textContent;
    textAfter.innerText = str.replace(/\'/g, '"');
    textAfter.style.display = 'block';
};

/* Шаблон, который заменяет одинарные кавычки на двойные,
кроме конструкций типа aren't. */
const changeText2 = () => {
    const str = textBefore.textContent;
    textAfter.innerText = str.replace(/\B'/g, '"');
    textAfter.style.display = 'block';
};

// Шаблон, который удаляет текст.
const resetText = () => {
    textAfter.style.display = 'none';
}


// Script формы.

const form = document.forms.regform;
const spanErrorText = document.getElementsByClassName('error-text');
const mainErrorText = document.getElementsByClassName('error-main');
const inputArea = document.getElementsByClassName('form-box__area');

// Очистка всех текстов с ошибками.
const clearErrorText = () => {
    for (let i = 0; i < spanErrorText.length; i++) {
        spanErrorText[i].innerText = ' ';
    }
    for (let j = 0; j < mainErrorText.length; j++) {
        mainErrorText[j].innerText = ' ';
    }
};

// Валидация формы глобальная функция.
const formValidation = e => {
    e.preventDefault();
    console.log('Run validation');

    let name = form.elements.name;
    let mail = form.elements.email;
    let telephone = form.elements.telephone;
    let result = true;

    if (nameValidation(name) == false) {
        result = false;
    }
    if (mailValidation(mail) == false) {
        result = false;
    }
    if (telephoneValidation(telephone) == false) {
        result = false;
    }
    if (result == false) {
        document.getElementById('form-box__area__headline').innerText = "Данные не приняты!";
    }
    if (result == true) {
        document.getElementById('form-box__area__headline').innerText = "Спасибо! Ваши данные приняты!";
    }
    return result;
};


// Имя валидация.
const nameValidation = (name) => {
    console.log('funcNameValid');

    let regexp = /^[A-Za-zА-Яа-я ]+$/;

    if (name.value == '') {
        spanErrorText[0].innerText = 'Заполните поле!';
        return false;
    }
    if (name.value.match(regexp)) {
        return true;
    } else {
        spanErrorText[0].innerText = 'Имя может содержать только буквы и пробел';
        name.classList.add("input_error");
        name.classList.add("p_error");
        name.focus();
        return false;
    }
};
// E-mail валидация.
const mailValidation = (mail) => {
    console.log('funcMailValid');

    let regexp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;

    if (mail.value == '') {
        spanErrorText[1].innerText = 'Заполните поле!';
        return false;
    }
    if (mail.value.match(regexp)) {
        return true;
    } else {

        spanErrorText[1].innerText = 'Адрес эл. почты может содежрать латинские буквы (@, . - _)';
        mail.classList.add("input_error");
        mail.classList.add("p_error");
        mail.focus();
        return false;
    }
};

// Телефон валидация.
const telephoneValidation = (telephone) => {
    console.log('funcPhoneValid');

    let regexp = /^\+\d{1}\d{3}\d{3}\d{4}$/;

    if (telephone.value == '' || telephone.value == '+7(000)000-0000') {
        spanErrorText[2].innerText = 'Заполните поле!';
        return false;
    }

    if (telephone.value.match(regexp)) {
        return true;
    } else {

        spanErrorText[2].innerText = 'Телефон введите в формате +7(000)000-00-00';
        telephone.classList.add("input_error");
        telephone.classList.add("p_error");
        telephone.focus();
        return false;
    }
};