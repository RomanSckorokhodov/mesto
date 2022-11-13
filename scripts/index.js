import { initialCards } from './Card.js';
import { FormValidator } from './FormValidator.js';

const buttonOpenEditPopup = document.querySelector(".profile__edit-button");
const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_add");
const popupProfile = document.querySelector(".popup_profile");
const popupImage = document.querySelector(".popup_image");
const buttonCloseEditPopup = popupProfile.querySelector(".popup__close");
const buttonCloseAddCardPopup = popupAddCard.querySelector(".popup__close");
const buttonCloseImagePopup = popupImage.querySelector(".popup__close");
const formProfile = popupProfile.querySelector(".popup__editor_profile");
const nameInput = document.querySelector(".popup__input_text_name");
const jobInput = document.querySelector(".popup__input_text_job");
const nameTitle = document.querySelector(".profile__heading");
const nameDescription = document.querySelector(".profile__description");
const container = document.querySelector(".elements");
const template = document.querySelector(".template-card");
const formAddCard = document.querySelector(".popup__editor_add");
const inputTitle = document.querySelector(".popup__input_form-title");
const inputLink = document.querySelector(".popup__input_form-link");
const popupImageName = document.querySelector(".popup__image-description");
const popupImageLink = document.querySelector(".popup__image-link");
const buttonSubmitAddCard = popupAddCard.querySelector(".popup__button_add-card");
const allPopups = document.querySelectorAll(".popup");

const renderInitialCards = () => {
  initialCards.forEach((item) => {
    const card = createCardNode(item.name, item.link);
    container.append(card);
  });
};

const addCard = (e) => {
  e.preventDefault();
  const item = createCardNode(inputTitle.value, inputLink.value);
  container.prepend(item);
  closePopup(popupAddCard);
  formAddCard.reset();
  resetForm(popupAddCard, buttonSubmitAddCard, objSettings)
};


const resetForm = (form, button, settings) => {
  const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  toggleButtonState(inputs, button, settings);
}

const createCardNode = (name, link) => {
  const card = template.content.cloneNode(true);
  const cardName = card.querySelector(".element__heading");
  const cardImage = card.querySelector(".element__image");
  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name + " " + "фото";

  const buttonDelete = card.querySelector(".element__delete-card");
  buttonDelete.addEventListener("click", deleteCard);

  const buttonLike = card.querySelector(".element__like");
  buttonLike.addEventListener("click", likeCard);

  cardImage.addEventListener("click", function () {
    popupImageName.textContent = name;
    popupImageLink.src = link;
    popupImageLink.alt = name + " " + "фото";
    openPopup(popupImage);
  });

  return card;
};

/**Удаление карточек*/
const deleteCard = (e) => {
  const cardsList = e.target.closest(".element");
  cardsList.remove();
};

/**Лайки на карточках*/
const likeCard = (e) => {
  e.target.classList.toggle("element__like_active");
};

renderInitialCards();

/**Открытие всех Поп-апов */
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupByEsc);
}
/**Закрытие всех Поп-апов */
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupByEsc);
}

function openPopupProfile() {
  nameInput.value = nameTitle.textContent;
  jobInput.value = nameDescription.textContent;
  openPopup(popupProfile);
}

function submitFormAddProfile(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  nameDescription.textContent = jobInput.value;
  closePopup(popupProfile);
}

function initOverlayClose (popupElements) {
  popupElements.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close")) {
        closePopup(popup);
      }
    });
  });
}

function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

initOverlayClose(allPopups);

buttonOpenEditPopup.addEventListener("click", () => openPopup(popupProfile));
buttonOpenAddCardPopup.addEventListener("click", () => openPopup(popupAddCard));

formProfile.addEventListener("submit", submitFormAddProfile);
formAddCard.addEventListener("submit", addCard);
