import React from "react";
import styled from "styled-components";
import { Input } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { RadioGroup, Radio } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";

export default function SearchColumn() {
    return (
        <Column>
        <div>
        <Input
          id="input-with-icon-adornment"
          placeholder="Buscar"
          startAdornment={
            <InputAdornment >
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
                <FormControlLabel value="medicamentos" control={<Radio size="small" color="success"/>} label="Medicamentos" />
                <FormControlLabel value="cosmeticos" control={<Radio size="small" color="default"/>} label="Cosméticos" />
                <FormControlLabel value="receitados" control={<Radio size="small" color="success"/>} label="Receitados" />
            </RadioGroup>
        </Bullet>
        <div>
            <ButtonFilter>
            Filtrar
            </ButtonFilter>
        </div>
        </Column>
    );
}

const Column = styled.span`
  display: inline-block;
  height: 100%;
  text-align: center;
  margin-top: 30px;
  margin-left: 30px;
  }
`

const Bullet = styled.div`
  display: inline-block;
  margin-top: 30px;
  }
`

const ButtonFilter = styled.button`
  display: inline-block;
  background-color: #37B9C5; 
  color: white;
  border: 0;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 40px;
  }
`