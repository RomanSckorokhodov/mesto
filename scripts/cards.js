const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template-card').content;

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

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__heading').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__image').alt = element.name + ' ' + 'фото';
  cardsList.append(cardElement);
})

const deleteButton = document.querySelector('.element__delete-card');

const DeleteCard = (e) => {
  const cardsList = e.target.closest('.element');
  cardsList.remove();
}


deleteButton.addEventListener('click', DeleteCard);