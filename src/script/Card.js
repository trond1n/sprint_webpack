export class Card {
    constructor(openImage) {
        this.openImage = openImage;
    }

    createPlaceCard(obj) {
        const placeCard = document.createElement('div');
        const placeCardImage = document.createElement('div');
        const placeCardDeleteIcon = document.createElement('button');
        const placeCardDescription = document.createElement('div');
        const placeCardName = document.createElement('h3');
        const placeCardLikeIcon = document.createElement('button');

        placeCard.classList.add('place-card');
        placeCardImage.classList.add('place-card__image');
        placeCardDeleteIcon.classList.add('place-card__delete-icon');
        placeCardDescription.classList.add('place-card__description');
        placeCardName.classList.add('place-card__name');
        placeCardLikeIcon.classList.add('place-card__like-icon');
        placeCardImage.style.backgroundImage = `url(${obj.link})`;
        placeCardImage.setAttribute('data-image', `${obj.link}`);
        placeCardName.textContent = obj.name;

        placeCardImage.appendChild(placeCardDeleteIcon);
        placeCardDescription.appendChild(placeCardName);
        placeCardDescription.appendChild(placeCardLikeIcon);
        placeCard.appendChild(placeCardImage);
        placeCard.appendChild(placeCardDescription);

        this.card = placeCard;
        this.setEventListeners();

        return placeCard;
    }

    setEventListeners() {
        this
            .card
            .querySelector('.place-card__like-icon')
            .addEventListener('click', this.like)

        this
            .card
            .querySelector('.place-card__delete-icon')
            .addEventListener('click', this.remove)
        this
            .card
            .querySelector('.place-card__image')
            .addEventListener('click', this.openImage.bind(this));
    }

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove(event) {
        event.target
            .closest('.place-card').remove();
    };

}