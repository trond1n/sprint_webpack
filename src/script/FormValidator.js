"use strict";

export class FormValidate {
    constructor(form, errors) {
        this.form = form;
        this.errors = errors;

        this.checkInputValidity = this.checkInputValidity.bind(this);
        this.setEventListeners = this.setEventListeners.bind(this);
        this.formInputs = Array.from(this.form.querySelectorAll("input"));
        this.submit = this.form.querySelector('.button')
    }

    checkInputValidity(input) {

        input.setCustomValidity('');
        if (input.validity.valueMissing) {
            input.setCustomValidity(this.errors.valueMissing);
            return false;
        }
        if (input.validity.tooShort || input.validity.tooLong) {
            input.setCustomValidity(this.errors.tooShort);
            return false;
        }
        if (input.validity.typeMismatch && input.type === 'url') {
            input.setCustomValidity(this.errors.typeMismatch);
            return false;
        }
        return input.checkValidity();


    }
    resetError() {
        const errorElements = this.form.querySelectorAll('.error');
        errorElements.forEach((element) => { element.textContent = ' ' })
    }

    setSubmitButtonState() {

        if (this.form.checkValidity() === true) {
            this.submit.removeAttribute('disabled');
            this.submit.classList.add(`popup__button_active`);
            this.submit.classList.remove(`popup__button_disabled`);
            this.formInputs.forEach((input) => { input.textContent = ' ' })

        } else {
            this.submit.setAttribute('disabled', '');
            this.submit.classList.add(`popup__button_disabled`);
            this.submit.classList.remove(`popup__button_active`);

        }

    }
    setEventListeners() {
        this.form.addEventListener("input", () => {
            this.isFieldValid();
            this.setSubmitButtonState();
        });
    }

    isFieldValid() {
        this.formInputs.forEach((input) => {
            const errorElement = input.nextElementSibling;
            const valid = this.checkInputValidity(input);
            errorElement.textContent = input.validationMessage;

            return valid;
        })
    }

    handlerInputForm(submit) {

        if (this.form.checkValidity()) {
            this.setSubmitButtonState(submit, true);
            this.errors.forEach((element) => { element.textContent = ' ' })

        } else {
            this.setSubmitButtonState(submit, false);
        }
    }

    checkForm() {
        this.setEventListeners('input', () => this.handlerInputForm(this.submit))

    }

}