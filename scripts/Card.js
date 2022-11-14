export class Card {
  
  constructor(obj, templateSelector, handleCardClick) {
    this._text = obj.name;
    this._image = obj.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
   
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  
    return cardElement;
  }

  createCardNode(){
    this._card = this._getTemplate();
    this._setEventListeners(); 
    this.cardImage.src = this._image;
    this.cardName.textContent = this._text;
    this.cardImage.alt = this._text;
    return this._card;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.elements__like');

    this._likeButton.addEventListener('click', () => {
      this._handlLikeCard();
    });

    this._element.querySelector('.element__delete-card').addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this.cardImage = this._element.querySelector('.element__image');
    this.cardName = this._element.querySelector('.element__heading');
    this.cardImage.addEventListener('click',() => {
      this._handleCardClick(this._text, this._image)
    });
  }

  _handlLikeCard() {
    this._likeButton.classList.toggle('elements__like_active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }
}