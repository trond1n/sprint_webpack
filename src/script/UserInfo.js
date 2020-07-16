"use strict";

export class UserInfo {
    constructor(name, job, infoName, infoJob, api) {
        this.infoName = infoName;
        this.infoJob = infoJob;
        this.name = name;
        this.job = job;
        this.api = api;
    }

    setUserInfo() {
        this.name.value = this.infoName.textContent;
        this.job.value = this.infoJob.textContent;
    }

    updateUserInfo() {

        this.api.sendUserUpdate(this.name.value, this.job.value)
            .then(() => {
                this.infoName.textContent = this.name.value;
                this.infoJob.textContent = this.job.value;
            })
            .catch(err => console.log(err));
    }

    defaultData() {
        this.api.getUserInfo()
            .then(user => {
                this.infoName.textContent = user.name;
                this.infoJob.textContent = user.about;
            })
            .catch(err => console.log(err));
    }
}