import React from "react";
import { Input } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { RadioGroup, Radio } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Column, Bullet, ButtonFilter } from "./StyledComponents";

export default function SearchColumn() {
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
        />
      </div>
      <Bullet>
        <RadioGroup
          aria-label="typeProduct"
          defaultValue="Medicamentos"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="medicamentos"
            control={<Radio size="small" color="success" />}
            label="Medicamentos"
          />
          <FormControlLabel
            value="cosmeticos"
            control={<Radio size="small" color="default" />}
            label="Cosméticos"
          />
          <FormControlLabel
            value="receitados"
            control={<Radio size="small" color="success" />}
            label="Receitados"
          />
        </RadioGroup>
      </Bullet>
      <div>
        <ButtonFilter>Filtrar</ButtonFilter>
      </div>
    </Column>
  );
}
