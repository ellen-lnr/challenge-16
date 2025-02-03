// Card.js
export class Card {
  #value;
  #suit;
  #element;

  constructor(value, suit) {
      this.#value = value;
      this.#suit = suit;
      this.#element = this.#generateCardElement();
  }

  #generateCardInterior() {
      return `<div class="card ${this.#suit.toLowerCase()}">
                  <span class="symbol">${this.#value}</span>
              </div>`;
  }

  #generateCardElement() {
      const cardInterior = this.#generateCardInterior();
      const element = document.createElement('div');
      element.innerHTML = cardInterior;
      element.classList.add('card');
      return element;
  }

  display() {
      const deckElement = document.querySelector('.deck');
      deckElement.appendChild(this.#element);
  }
}
