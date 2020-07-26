class AuthenticationService  {
    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null) return false;
        return true;
    }
    getUsername() {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null) return '';
        return user;
    }
}


export default new AuthenticationService();
