import AuthenticationService from "@/services/AuthenticationService";

function isLogged() {
    if(!AuthenticationService.isLogged()) {
        return '/login'
    }
}

export default isLogged;