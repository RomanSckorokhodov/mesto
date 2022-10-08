const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
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

function popupClose() {
    popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    nameDescription.textContent = jobInput.value;
    popupClose()
};

popupCloseButton.addEventListener('click', popupClose);
popupOpenButton.addEventListener('click', popupOpen);

formElement.addEventListener('submit', formSubmitHandler); 