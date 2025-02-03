// Deck.js
import { Card } from './Card.js';
import { shuffle } from 'lodash-es';

export class Deck {
    cards = [];

    constructor(options) {
        this.values = options.values;
        this.suits = options.suits;
        this.createFullDeck();
    }

    createFullDeck() {
        this.suits.forEach(suit => {
            this.values.forEach(value => {
                this.cards.push(new Card(value, suit));
            });
        });
    }

    displayCards() {
        this.cards.forEach(card => card.display());
    }

    shuffleDeck() {
        this.cards = shuffle(this.cards);
    }
}
