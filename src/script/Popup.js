export class Popup {
    constructor(container) {
        this.container = container;
        this.closeButton = this.container.querySelector('.popup__close');
        this.close = this.close.bind(this);
        this.setListener();

    }

    open() {
        this.container.classList.add('popup_is-opened');
    }

    close() {
        this.container.classList.remove('popup_is-opened');

    }
    setImage(imgOpen) {
        const image = imgOpen.getAttribute('data-image')
        const popupPhoto = this.container.querySelector('.card-popup__image')
        popupPhoto.setAttribute('src', image)
    }
    setListener() {
        this.closeButton.addEventListener('click', this.close)
    }

}