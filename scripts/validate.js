const enableValidation =  {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(`${enableValidation.inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${enableValidation.errorClass}`);
  console.log(inputElement.name);
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`${enableValidation.inputErrorClass}`);
  errorElement.classList.remove(`${enableValidation.errorClass}`);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(enableValidation.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(enableValidation.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
  console.log(enableValidation.inactiveButtonClass);
};

const setEventListeners = (formElement) => {
  buttonState(formElement);
};

function buttonState(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(enableValidation.inputSelector)
  );
  const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function isValid() {
  const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

isValid(enableValidation);