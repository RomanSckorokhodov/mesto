const popupOpenButton = document.querySelector('.profile__edit-button');
const popupOpeAddButton = document.querySelector('.profile__add-button');

const popupAdd = document.querySelector('.popup_add');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup_image');

const popupCloseButton = popup.querySelector('.popup__close');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close');
const popupCloseButtonImage = popupImage.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__button');

let formElement = document.querySelector('.popup__editor');
let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_job');
let nameTitle = document.querySelector('.profile__heading');
let nameDescription = document.querySelector('.profile__description');

const container = document.querySelector('.elements');
const template = document.querySelector('.template-card');
const addButton = document.querySelector('.popup__editor_add');
const inputTitle = document.querySelector('.popup__input_form-title');
const inputLink = document.querySelector('.popup__input_form-link');




const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const render = () => {
  initialCards.forEach((item) => {
    const cardContainer = createCardNode(item.name, item.link);
    container.append(cardContainer);
  });
};

const addCard = (e) => {
  e.preventDefault();
  const item = createCardNode(inputTitle.value, inputLink.value);
  container.prepend(item);
  popupCloseAdd();
  inputTitle.value = ' ';
  inputLink.value = ' ';
};

const createCardNode = (name, link) => {
  const cardContainer = template.content.cloneNode(true);
  const cardName = cardContainer.querySelector('.element__heading');
  const cardImage = cardContainer.querySelector('.element__image');
  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name + ' ' + 'фото';

  const deleteButton = cardContainer.querySelector('.element__delete-card');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = cardContainer.querySelector('.element__like');
  likeButton.addEventListener('click', likeCard);

  const popupImageName = document.querySelector('.popup__image-description');
  const popupImageLink = document.querySelector('.popup__image-link');

  cardImage.addEventListener('click', function () {
    popupImageName.textContent = name;
    popupImageLink.src = link;
    popupImageLink.alt = name + ' ' + 'фото';
    openPopupImage();
  });

  return cardContainer;
};

/**Удаление карточек*/
const deleteCard = (e) => {
  const cardsList = e.target.closest('.element');
  cardsList.remove();
}

/**Лайки на карточках*/
const likeCard = (e) => {
  e.target.classList.toggle('element__like_active');
}

render();

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = nameTitle.textContent;
  jobInput.value = nameDescription.textContent;
};

function popupOpenAdd() {
  popupAdd.classList.add('popup_opened');
};

function openPopupImage() {
  popupImage.classList.add('popup_opened');
};

function popupClose() {
  popup.classList.remove('popup_opened');
};

function popupCloseAdd() {
  popupAdd.classList.remove('popup_opened');
};

function popupCloseImage() {
  popupImage.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  nameDescription.textContent = jobInput.value;
  popupClose()
};


popupCloseButton.addEventListener('click', popupClose);
popupCloseButtonAdd.addEventListener('click', popupCloseAdd);
popupCloseButtonImage.addEventListener('click', popupCloseImage);

popupOpenButton.addEventListener('click', popupOpen);
popupOpeAddButton.addEventListener('click', popupOpenAdd);
formElement.addEventListener('submit', formSubmitHandler);

addButton.addEventListener('submit', (e) => {
  addCard(e)
});