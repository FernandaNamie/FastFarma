import React, { useState, useEffect } from "react";
import { Input } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { RadioGroup, Radio } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Column, Bullet, ButtonFilter } from "./StyledComponents";
import axios from "axios";

export default function SearchColumn(props) {
  const [name, setName] = useState("");
  const [tipo, setTipo] = useState("");

  function search() {
    if (name != "") {
      if (tipo == "") {
        axios
          .get("http://localhost:9999/produtos/busca?nome=" + name)
          .then((response) => props.setRemediosApi(response.data));
      } else {
        axios
          .get(
            "http://localhost:9999/produtos/busca?nome=" +
              name +
              "&tipo=" +
              tipo
          )
          .then((response) => props.setRemediosApi(response.data));
      }
    } else {
      if (tipo != "") {
        axios
          .get("http://localhost:9999/produtos/busca?tipo=" + tipo)
          .then((response) => {
            props.setRemediosApi(response.data);
          });
      }
    }
  }

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  console.log(tipo);
  return (
    <Column>
      <div>
        <Input
          id="input-with-icon-adornment"
          placeholder="Buscar"
          startAdornment={
            <InputAdornment>
              <SearchOutlined />
            </InputAdornment>
          }
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <Bullet>
        <RadioGroup
          aria-label="typeProduct"
          defaultValue="Medicamentos"
          name="radio-buttons-group"
          value={tipo}
          onChange={handleChange}
        >
          <FormControlLabel
            value="medicamento"
            control={<Radio size="small" color="default" />}
            label="Medicamentos"
          />
          <FormControlLabel
            value="cosmetico"
            control={<Radio size="small" color="default" />}
            label="Cosméticos"
          />
          <FormControlLabel
            value="receitado"
            control={<Radio size="small" color="default" />}
            label="Receitados"
          />
        </RadioGroup>
      </Bullet>
      <div>
        <ButtonFilter
          onClick={(e) => {
            search();
          }}
        >
          Filtrar
        </ButtonFilter>
      </div>
    </Column>
  );
}
