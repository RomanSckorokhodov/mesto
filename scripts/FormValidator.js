export class FormValidator {
    constructor(formElement, settings) {
        this._formElement = formElement;
        this._formSelector = settings.formElement;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement(this._submitButtonSelector);
    };

    _showError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    };

    _toggleinputErrorState = () => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        } else {
            this._hideError(inputElement);
        }
    };

    _hasInvalidInput = (inputElement) => {
        return inputElement.some(function (inputElement) {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput(inputElement)) {
            this._turnOnbutton(buttonElement);
        } else {
            this._turnOffbutton(buttonElement);
        }
    };

    _turnOnbutton() {
        this._buttonElement.setAttribute("disabled", true);
        this._buttonElement.classList.add(this._inactiveButtonClass);
    };

    _turnOffbutton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
    };

    _setEventListeners = () => {

        this_.toggleButtonState();
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", function () {
                this._toggleinputErrorState(inputElement);
                this_.toggleButtonState();
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();
      };
}