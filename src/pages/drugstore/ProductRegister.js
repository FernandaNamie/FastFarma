import { React, useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import "./ProductRegister.css";
import { Close, Check } from "@material-ui/icons/";

export default function ProductRegister() {
  const [productName, setName] = useState("");
  const [productWeight, setWeight] = useState("");
  const [productPrice, setPrice] = useState("");

  const [isProphylactic, setProphylactic] = useState(false);
  const [isMedicament, setMedicament] = useState(false);
  const [isCosmetic, setCosmetic] = useState(false);
  const [isPrescribed, setPrescribed] = useState(false);

  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [hasRegisterFailed, setRegisterFailed] = useState(false);
  const dropDownRef = useRef(null);

  function registerProductHandler() {
    if (productWeight > 0 && productPrice > 0) {
      fetch("/produtos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          medicamento: isMedicament,
          cosmetico: isCosmetic,
          receitado: isPrescribed,
          //profilatico: isProphylactic,
          nome: productName,
          peso: productWeight,
          preco: productPrice
        }),
      }).then(response => {
        console.log(response.status)
        if (response.status === 201) {
          setSuccessMessage(true);
          setRegisterFailed(false);
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

  function showDropDownHandler() {
    if (dropDownRef.current.classList.contains("visible")) {
      dropDownRef.current.classList.remove("visible");
    } else {
      dropDownRef.current.classList.add("visible");
    }
  }

  return (
    <div>
      <NavBar />
      <p></p>
      <h1 className="d-flex justify-content-center registerProduct">
        Cadastro de Produto
      </h1>
      <div className="container">
        {hasRegisterFailed && (
          <div className="alert alert-warning">
            Não foi possível criar o produto
          </div>
        )}
        {showSuccessMessage && <div className="alert alert-primary">Produto criado!</div>}
        <div className="col-md-6 offset-md-3">
          <label className="inputLabel">Nome do produto</label>
          <input
            type="text"
            value={productName}
            className="form-control userInput p-0"
            placeholder=""
            required=""
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6 offset-md-3 input-weight">
          <label className="inputLabel">Peso em gramas</label>
          <input
            type="text"
            value={productWeight}
            className="form-control userInput p-0"
            placeholder=""
            required=""
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="col-md-6 offset-md-3 input-price">
          <label className="inputLabel">Preço</label>
          <input
            type="text"
            value={productPrice}
            className="form-control userPrice"
            placeholder=""
            required=""
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-md-6 offset-md-3 prophylactic">
          <label className="inputLabel" style={{ paddingLeft: "40px" }}>
            É profilático ?
          </label>
          <p></p>
          <p></p>
          <div className="row" style={{ paddingLeft: "40px" }}>
            <div className={`col-8 col-sm-8 ${isProphylactic ? "optionSelected" : ""}`}>
              <span onClick={() => setProphylactic(true)}><Check /> Sim</span>
            </div>
            <div className={`col-4 col-sm-4 ${isProphylactic ? "" : "optionSelected"}`}>
              <span onClick={() => setProphylactic(false)}><Close /> Não</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-3" style={{ marginBottom: "20px" }}>
          <div className="dropdown-check-list" tabindex="100" ref={dropDownRef}>
            <span className="anchor" onClick={showDropDownHandler}>
              Selecione o catálogo do produto
            </span>
            <ul className="items">
              <li>
                <input type="checkbox" defaultChecked={isMedicament} onChange={() => setMedicament(!isMedicament)} />
                Medicamento
              </li>
              <li>
                <input type="checkbox" defaultChecked={isCosmetic} onChange={() => setCosmetic(!isCosmetic)} />
                Cosmético
              </li>
              <li>
                <input type="checkbox" defaultChecked={isPrescribed} onChange={() => setPrescribed(!isPrescribed)} />
                Receitado
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 offset-md-3 register">
          <button className="btn Button" onClick={registerProductHandler}>
            Cadastrar Produto
          </button>
        </div>
      </div>
    </div>
  );
}
