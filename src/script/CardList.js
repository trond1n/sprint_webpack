"use strict";

export class CardList {
    constructor(container, api, action) {
        this.container = container;
        this.action = action;
        this.api = api;
    }

    addCard(obj) {
        this.container.appendChild(this.action().createPlaceCard(obj));
    }

    render() {
        this.api.getInitialCards()
            .then(cards => {
                for (const card of cards) {
                    this.addCard(card);
                }
            })
            .catch(err => console.log(err));
    }
}