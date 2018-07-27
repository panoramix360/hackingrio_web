class OauthHelper {
    isAutenticated() {
        return this.getUserID() !== "";
    }

    getUserID() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.userId) {
            return user.userId;
        }
        return "";
    }

    getUserIdBase64() {
        return btoa(this.getUserID());
    }
}

export default new OauthHelper();
