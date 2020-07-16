"use strict";

export class Api {
    constructor(config) {
        this.config = config;
    }

    /**
     * Можно лучше
     * Создать единый метод, который будет делать fetch и возвращать в цепочку json или reject.
     * Тогда в остальных методах не будет одинаковых участков кода и они будут иметь компактный вид.
     * Что-то наподобие
     * getUserInfo() {
     *   return this.fetchData(`${this.config.baseUrl}/users/me`, {
     *     headers: this.config.headers
     *   });
     * }
     */

    getUserInfo() {
        return fetch(`${this.config.baseUrl}/users/me`, {
            headers: this.config.headers
        })

        .then(res => {
            if (res.ok) {
                return res.json()
            }; // лишняя ;
            return Promise.reject(`Хьюснон, у нас проблема: ${res.status}`);
        })
    }

    getInitialCards() {
        return fetch(`${this.config.baseUrl}/cards`, {
            headers: this.config.headers
        })

        .then(res => {
            if (res.ok) {
                return res.json()
            }; // лишняя ;
            return Promise.reject(`Хьюснон, у нас проблема: ${res.status}`);
        })
    }

    sendUserUpdate(name, about) {
        return fetch(`${this.config.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.config.headers,

            body: JSON.stringify({
                name: name,
                about: about
            })
        })

        .then(res => {
            if (res.ok) {
                return res.json()
            }; // лишняя ;
            return Promise.reject(`Хьюснон, у нас проблема: ${res.status}`);
        })
    }
}