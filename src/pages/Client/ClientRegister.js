import { React, useState} from "react";
import NavBar from "../../components/NavBar";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useHistory } from "react-router";

export default function ClientRegister() {
    const [clientName, setName] = useState("");
    const [cellPhone, setCellPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("false");
    const [confirmPassword, setConfirmPassowrd] = useState("");
  
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const [hasRegisterFailed, setRegisterFailed] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const history = useHistory();

    function registerClientHandler() {
      if (password === confirmPassword) {
        fetch("http://localhost:8080/api/user-profile/register", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: clientName,
            cpf: cpf,
            address: address,
            birthday: birthday,
            contact: cellPhone,
            username: userName,
            password : password
          }),
        }).then(response => {
          console.log(response)
          if (response.status === 200 || response.status === 201) {
              setSuccessMessage(true);
              setRegisterFailed(false);
              history.push('/login');
          } else {
              setRegisterFailed(true);
              setSuccessMessage(false);
          }
        }).catch(error => {
          console.error(error);
        });
      } else {
        setRegisterFailed(true);
        setSuccessMessage(false);
      }
    }
    return (
      <div>
        <NavBar />
        <p></p>
        <h1 className="d-flex justify-content-center registerProduct">
          Cadastro
        </h1>
        <div className="container">
          {hasRegisterFailed && (
            <div className="alert alert-warning">
              Não foi possível o cadastro
            </div>
          )}
          {showSuccessMessage && <div className="alert alert-primary">Cadastrado!</div>}
          <div className="col-md-6 offset-md-3" style={{marginBottom:"20px"}}>
            <input
              type="text"
              value={clientName}
              className="form-control userInput p-0"
              placeholder="Nome completo"
              required=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 offset-md-3" style={{marginBottom:"20px"}}>
            <input
              type="text"
              value={cellPhone}
              className="form-control userInput p-0"
              placeholder="Telefone Celular"
              required=""
              onChange={(e) => setCellPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6 offset-md-3" style={{marginBottom:"20px"}}>
            <input
              type="text"
              value={cpf}
              className="form-control userInput p-0"
              placeholder="CPF"
              required=""
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="col-md-6 offset-md-3" style={{marginBottom:"20px"}}>
            <input
              type="text"
              value={birthday}
              className="form-control userInput p-0"
              placeholder="Data de Nascimento"
              required=""
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="col-md-6 offset-md-3" style={{marginBottom:"50px"}}>
            <input
              type="text"
              value={address}
              className="form-control userInput p-0"
              placeholder="Endereço"
              required=""
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col-md-6 offset-md-3" style={{marginBottom:"20px"}}>
            <input
              type="text"
              value={userName}
              className="form-control userInput p-0"
              placeholder="Nome de Usuário"
              required=""
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="col-md-6 offset-md-3" style={{marginBottom:"20px"}}>
            <Input 
                type={showPassword ? "text" : "password"}
                value={password}
                className={"form-control userInput p-0"}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
          </div>
          <div className="col-md-6 offset-md-3">
          <Input 
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                className={"form-control userInput p-0"}
                onChange={(e) => setConfirmPassowrd(e.target.value)}
                placeholder="Confirmar Senha"
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
          </div>
          <div className="col-md-6 offset-md-3 register">
            <button className="btn Button" onClick={registerClientHandler}>
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    );
  }