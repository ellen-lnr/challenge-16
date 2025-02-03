// app.js
import { Deck } from './Deck.js';

const options = {
    values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    suits: ["Hearts", "Diamonds", "Spades", "Clubs"]
};

document.addEventListener('DOMContentLoaded', () => {
    const deck = new Deck(options);
    deck.shuffleDeck();
    deck.displayCards();
});
