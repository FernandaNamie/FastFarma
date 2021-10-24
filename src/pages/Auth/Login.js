import { React, useState } from "react";
import NavBar from "../../components/NavBar";
import AuthenticationService from "./AuthenticationService";

export default function Login() {
    const [clientName, setName] = useState("in28minutes");
    const [password, setPassword] = useState("");
    const [hasLoginFailed, setLoginFailed] =useState(false);
    const [showSuccessMessage, setSuccessMessage] = useState(false);

    function loginClicked() {
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                this.props.history.push(`/courses`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
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
                <input type="password" value={password}  class="form-control" placeholder="SENHA" required="" onChange={e => setPassword(e.target.value)} />
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
  