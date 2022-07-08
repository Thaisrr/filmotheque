import axios from "axios";
import jwtDecode from "jwt-decode";
import router from "@/router";

class AuthenticationService {
    url = 'http://localhost:3000';

    async login(user) {
       try {
           const {data} = await axios.post(`${this.url}/login`, user);
           localStorage.setItem('token', data.accessToken);
           return true
       } catch ({request}) {
           console.log(request)
           if(request.status === 400) {
               alert(`Erreur d'identification`);
           } else {
               alert(`Oups !Quelque chose s'est mal passé, revenez plus tard`)
           }
       }
    }

    getEmail() {
        const token = localStorage.getItem('token')
        if(token) {
            const {email} = jwtDecode(token);
            return email
        } else {
            return 'nope'
        }
    }

    isLogged() {
        return !!localStorage.getItem('token')
    }

    logout() {
        localStorage.clear()
        router.push('/login')
    }
}

export default new AuthenticationService();