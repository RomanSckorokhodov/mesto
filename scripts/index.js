const popupOpenButton = document.querySelector('.profile__edit-button');
const popupOpeAddButton = document.querySelector('.profile__add-button');

const popupAdd = document.querySelector('.popup_add');
const popup = document.querySelector('.popup');

const popupCloseButton = popup.querySelector('.popup__close');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__button');

let formElement = document.querySelector('.popup__editor');
let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_job');
let nameTitle = document.querySelector('.profile__heading');
let nameDescription = document.querySelector('.profile__description');

function popupOpen() {
    popup.classList.add('popup_opened');
    nameInput.value = nameTitle.textContent;
    jobInput.value = nameDescription.textContent;
};

function popupOpenAdd() {
    popupAdd.classList.add('popup_opened');
};

function popupClose() {
    popup.classList.remove('popup_opened');
};

function popupCloseAdd() {
    popupAdd.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    nameDescription.textContent = jobInput.value;
    popupClose()
};


popupCloseButton.addEventListener('click', popupClose);
popupCloseButtonAdd.addEventListener('click', popupCloseAdd);
popupOpenButton.addEventListener('click', popupOpen);
popupOpeAddButton.addEventListener('click', popupOpenAdd);
formElement.addEventListener('submit', formSubmitHandler); 
