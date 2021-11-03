import { React, useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import AuthenticationService from "./AuthenticationService";
import { useHistory } from "react-router";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockIcon from "@material-ui/icons/Lock";
import ArrowDownwardIcon from '@material-ui/icons/KeyboardArrowDown';
import "./Login.css";
import { Col, Row } from 'react-bootstrap';

export default function Login() {
    const [clientName, setName] = useState("");
    const [password, setPassword] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState();
    const [hasLoginFailed, setLoginFailed] = useState(false);
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const dropDownRef = useRef(null);

    const history = useHistory();

    const routeChange = () => {
        let path = '';
        if (localStorage.getItem('tipoUsuario') === "CLIENTE") { path = '/' }
        else if (localStorage.getItem('tipoUsuario') === "MOTOBOY") { path = '/motoboy' }
        else { path = '/farmacia' }
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
        AuthenticationService();
        AuthenticationService.executeBasicAuthenticationService(clientName, password, tipoUsuario)
        if (localStorage.getItem('token') === "erro") {
            setLoginFailed(true)
            setSuccessMessage(false)
        } else {
            localStorage.setItem('tipoUsuario', tipoUsuario)
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
                    <div style={{ marginTop: "20px" }}>
                        <Row>
                            <Col md="4"><input type="radio" value="CLIENTE" name="tipoUsuario" onChange={(e) => setTipoUsuario(e.target.value)} /> Cliente</Col>
                            <Col md="4"><input type="radio" value="MOTOBOY" name="tipoUsuario" onChange={(e) => setTipoUsuario(e.target.value)} /> Motoboy</Col>
                            <Col md="4"><input type="radio" value="FARMACIA" name="tipoUsuario" onChange={(e) => setTipoUsuario(e.target.value)} /> Farmácia</Col>
                        </Row>
                    </div>
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
