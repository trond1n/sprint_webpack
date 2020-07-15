import { Api } from './Api.js';
import { Card } from './Card.js';
import { CardList } from './CardList.js';
import { FormValidate } from './FormValidator.js';
import { Popup } from './Popup.js';
import { UserInfo } from './UserInfo.js';
import "../pages/index.css";

//переменные
const API_URL = NODE_ENV === 'production' ? 'https://praktikum.tk' : 'http://praktikum.tk';
const config = {
    baseUrl: `${API_URL}/cohort11`,
    headers: {
        authorization: '0bc860eb-45ff-4d69-b605-9537aa6944c1',
        'Content-Type': 'application/json'
    }
}
const api = new Api(config);
const addFormOpen = document.querySelector('.user-info__button');
const editFormOpen = document.querySelector('.user-info__edit-button');
const userName = document.querySelector('.edit-popup__input_type_name');
const job = document.querySelector('.edit-popup__input_type_job');
const infoName = document.querySelector('.user-info__name');
const infoJob = document.querySelector('.user-info__job');
const errorMessages = {
    valueMissing: 'Это обязательное поле',
    tooShort: 'Должно быть от 2 до 30 символов',
    typeMismatch: 'Здесь должна быть ссылка'
};
const addForm = document.forms.add;
// const { name, link } = addForm.elements;
const editForm = document.forms.edit;
const addPopup = new Popup(document.querySelector('.add-popup'))
const editPopup = new Popup(document.querySelector('.edit-popup'))
const cardPopup = new Popup(document.querySelector('.card-popup'))
const placesList = document.querySelector('.places-list');
const addformValidation = new FormValidate(addForm, errorMessages); //валидация формы карточки
const editformValidation = new FormValidate(editForm, errorMessages); //валидация формы юзера
const userInfo = new UserInfo(userName, job, infoName, infoJob, api); //смена пользователя
const newUserCard = () => new Card(zoom);
const cardList = new CardList(placesList, api, newUserCard);

// функции
function addPhoto(event) {
    event.preventDefault();
    const name = document.querySelector('.add-popup__input_type_name');
    const link = document.querySelector('.add-popup__input_type_link-url');
    const newCard = { name: name.value, link: link.value };
    cardList.addCard(newCard);
    addPopup.close();
}

function zoom(event) {
    if (event.target.classList.contains('place-card__image')) {
        cardPopup.setImage(event.target)
        cardPopup.open();
    }
}

//слушатели
addFormOpen.addEventListener('click', () => {
    addPopup.open();
    addForm.reset();
    addformValidation.resetError();
    addformValidation.setSubmitButtonState();
})

editFormOpen.addEventListener('click', () => {
    editPopup.open();
    editForm.reset();
    editformValidation.resetError();
    editformValidation.setSubmitButtonState();
})

addForm.addEventListener('submit', addPhoto); //добавили
editFormOpen.addEventListener('click', () => {
        editPopup.open();
        userInfo.setUserInfo();
    }) //открыли пользователя
editForm.addEventListener('submit', event => {
    event.preventDefault();
    userInfo.updateUserInfo();
    editPopup.close();
}); //поменяли имя


//кнопки
addformValidation.checkForm();
editformValidation.checkForm();

// вызов функции
cardList.render();
userInfo.defaultData();



/**
 * Все замечания исправлены верно, оставил небольшую рекомендацию в классе Api.
 * Работа принята. Желаю успехов в дальнейшем обучении!
 */