import { React, useState } from "react";
import NavBar from "../../components/NavBar";
import AuthenticationService from "./AuthenticationService";
import { useHistory } from "react-router";

export default function Login() {
    const [clientName, setName] = useState("teste");
    const [password, setPassword] = useState("senha");
    const [hasLoginFailed, setLoginFailed] = useState(false);
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const USER_TOKEN = localStorage.getItem('token')
    const AuthStr = 'Bearer '.concat(USER_TOKEN)

    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }

    function loginClicked() {
        // TODO: Acresecentar um seletor de tipo de usuário para:
        // 1) enviar como parametro para executeBasicAuthenticationService(clientName, password, tipoUsuario)
        // 2) salvar no localStorage.setItem('tipoUsuario', tipoUsuario) pra saber pra onde redirecionar
        AuthenticationService();
        AuthenticationService.executeBasicAuthenticationService(clientName, password, "CLIENTE")
        if (localStorage.getItem('token') === "erro") {
            setLoginFailed(true)
            setSuccessMessage(false)
        } else {
            setLoginFailed(false)
            setSuccessMessage(true)
            routeChange()
        }

    }

    return (
        <div>
            <NavBar />
            <h1 className="d-flex justify-content-center">Login</h1>
            <div className="container">
                {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {showSuccessMessage && <div>Bem vendido!</div>}
                <div class="   col-md-6 offset-md-3">
                    <label >Usuário</label>
                    <input type="text" value={clientName} class="form-control " placeholder=" Usuário" required="" onChange={e => setName(e.target.value)} />
                </div>
                <div class="col-md-6 offset-md-3">
                    <label>Senha</label>
                    <input type="password" value={password} class="form-control" placeholder="SENHA" required="" onChange={e => setPassword(e.target.value)} />
                </div>
                <div class="col-md-6 offset-md-3">
                    <div class="form-check">
                        <label > <input class="form-check-input" type="checkbox" value="" /> Lembre-me  </label>
                    </div>
                    <button className="btn btn-success" onClick={loginClicked}>Entrar</button>
                </div>
            </div>
        </div>
    );
}
