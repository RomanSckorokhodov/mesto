const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__button');
function popupToggle() {
    popup.classList.toggle('popup_opened');
}

let formElement =  document.querySelector('.popup__editor');
let nameInput = document.querySelector('.popup__text_name');
let jobInput = document.querySelector('.popup__text_job');
let nameTitle = document.querySelector('.profile__heading');
let nameDescription = document.querySelector('.profile__description');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameTitle.textContent = nameInput.value;
    nameDescription.textContent = jobInput.value;
    nameInput.placeholder = 'Ваше Имя';
    jobInput.placeholder = 'Ваша должность';
}

popupOpenButton.addEventListener('click', popupToggle); 
popupCloseButton.addEventListener('click', popupToggle); 
popupSaveButton.addEventListener('click', popupToggle); 

formElement.addEventListener('submit', formSubmitHandler); 