import { React, useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import AuthenticationService from "./AuthenticationService";
import { useHistory } from "react-router";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockIcon from "@material-ui/icons/Lock";
import ArrowDownwardIcon from '@material-ui/icons/KeyboardArrowDown';
import "./Login.css";

export default function Login() {
    const [clientName, setName] = useState("");
    const [password, setPassword] = useState("");
    const [hasLoginFailed, setLoginFailed] = useState(false);
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const USER_TOKEN = localStorage.getItem('token')
    const dropDownRef = useRef(null);

    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }

    function showDropDownHandler() {
        if (dropDownRef.current.classList.contains("visible")) {
            dropDownRef.current.classList.remove("visible");
        } else {
            dropDownRef.current.classList.add("visible");
        }
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
            <h1
                className="d-flex justify-content-center"
                style={{ marginBottom: "50px" }}
            >
                Login
            </h1>
            <div className="container">
                {hasLoginFailed && (
                    <div className="alert alert-warning">Invalid Credentials</div>
                )}
                {showSuccessMessage && <div>Bem vendo!</div>}
                <div class="col-md-6 offset-md-3" style={{ marginBottom: "20px" }}>
                    <span>
                        <PersonOutlineIcon style={{ position: "absolute" }} />
                        <input
                            type="text"
                            value={clientName}
                            class="form-control p-0 clientInput"
                            placeholder="Nome de Usuário"
                            required=""
                            onChange={(e) => setName(e.target.value)}
                        />
                    </span>
                </div>
                <div class="col-md-6 offset-md-3" style={{ marginBottom: "20px" }}>
                    <span>
                        <LockIcon style={{ position: "absolute" }} />
                        <input
                            type="password"
                            value={password}
                            class="form-control p-0 clientInput"
                            placeholder="Senha"
                            required=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </span>
                </div>
                <div class="col-md-6 offset-md-3">
                    <div class="form-check">
                        <label>
                            {" "}
                            <input class="form-check-input" type="checkbox" value="" />{" "}
                            Lembre-me{" "}
                        </label>
                    </div>
                    <div className="ButtonPosition">
                        <button className="Button" onClick={loginClicked}>
                            Entrar
                        </button>
                    </div>
                    <div className="dropdown-login" tabindex="100" ref={dropDownRef}>
                        <span className="anchor" onClick={showDropDownHandler}>
                            <div className='container createAccount'><span>Quero criar uma conta <ArrowDownwardIcon /></span></div>
                        </span>
                        <ul className="items">
                            <li>
                                Cliente
                            </li>
                            <li>
                                Farmácia
                            </li>
                            <li>
                                Motoboy
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
