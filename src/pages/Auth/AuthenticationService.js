import axios from 'axios';

const API_URL = 'https://fastfarma-webapp.herokuapp.com';

export default function AuthenticationService() {

    function executeBasicAuthenticationService(nomeUsuario, senha, tipoUsuario) {
        axios({
            method: 'post',
            url: API_URL + '/login',
            headers: {
                'content-type': 'application/json'
            },
            data: {
                "nomeUsuario": nomeUsuario,
                "senha": senha,
                "tipoUsuario": tipoUsuario
            }
        }).then(response => {
            localStorage.setItem('token', response.data)
        }).catch(error => {
            console.log(error)
            localStorage.setItem('token', 'erro')
        })
    }

    AuthenticationService.executeBasicAuthenticationService = executeBasicAuthenticationService
}
