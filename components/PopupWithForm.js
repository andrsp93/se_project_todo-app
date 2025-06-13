import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this.handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      //TODO - pass result of _getInputValues to submission handler
      this.handleFormSubmit(evt);
    });
  }
}
export default PopupWithForm;
