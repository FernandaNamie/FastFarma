import axios from 'axios';


export default function AuthenticationService() {

    async function executeBasicAuthenticationService(nomeUsuario, senha, tipoUsuario) {
        await axios({
            method: 'post',
            url: '/login',
            headers: {
                'content-type': 'application/json'
            },
            data: {
                "nomeUsuario": nomeUsuario,
                "senha": senha,
                "tipoUsuario": tipoUsuario
            }
        }).then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data)
        }).catch(error => {
            console.log(error)
            localStorage.setItem('token', 'erro')
        })
    }

    AuthenticationService.executeBasicAuthenticationService = executeBasicAuthenticationService
}
