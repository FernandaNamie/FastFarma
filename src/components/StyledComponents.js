import styled from "styled-components";
import { Row } from "react-bootstrap";

export const Border = styled.span`
  display: inline-block;
  width: 150px;
  height: 250px;
  border: 1px solid;
  border-color: #DDDDDD;
  box-shadow: 5px 5px #EEEEEE;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 50px;
  text-align: left;
  min-height: 280px;
  }
`;

export const Title = styled.div`
  display: inline-block;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 13px;
  color: #555555;
  margin-left:8px;
  min-height: 70px;
  }
`;

export const Price = styled.div`
  display: inline-block;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  color: #FF5A5A;
  margin-left:8px;
  margin-top: 15px;
  }
`;

export const ButtonLess = styled.button`
  display: inline-block;
  background-color: #CBDFE1;
  color: #37B9C5;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  margin-left: 8px;
  padding:0;
  line-height:25px;
  }
`;

export const ButtonPlus = styled.button`
  display: inline-block;
  background-color: #37B9C5;
  color: #CBDFE1;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  margin-left: 8px;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
  padding:0;
  line-height:25px;
  }
`;

export const ButtonPlusCart = styled.button`
  background-color: #37B9C5;
  color: #CBDFE1;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
  padding:0;
  line-height:25px;
  }
`;

export const ButtonLessCart = styled.button`
  background-color: #CBDFE1;
  color: #37B9C5;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  padding:0;
  line-height:25px;
  }
`;

export const DivQuantidade = styled.div`
    // background-color: #F0F3F6;
    height: 25px;
    padding: 0;
    margin-top: 17px;
}
`;

export const Logo = styled.h2`
  display: inline-block;
  color: #37B9C5;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  padding-left: 20px;
  font-weight: bold;
  margin-top: 10px;
  }
`;

export const Bar = styled.a`
  display: inline-block;
  background: #CBDFE1;
  width: 100%;
  height: 70px;
  padding-top: 10px;
  margin: 0;
  }
`;

export const StyledSearchInput = styled.input`
  display: inline-block;
  background: white;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border-width: 0;
  font-size: 12px;
  text-align: center;
  margin-left: 40%;
  margin-right: 10%;
  }
`;

export const ButtonShoppingNavBar = styled.button`
    display: inline-block;
    background: #CBDFE1;
    text-align: center;
    border:0;
    cursor:pointer;
}
`;

export const Column = styled.span`
  display: inline-block;
  height: 100%;
  text-align: center;
  margin-top: 30px;
  margin-left: 30px;
  }
`;

export const Bullet = styled.div`
  display: inline-block;
  margin-top: 30px;
  }
`;

export const ButtonFilter = styled.button`
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
`;
export const Titulo = styled.h3`
  display: inline-block;
  text-align: justify;
  margin-left: 34%;
  font-weight: 600;
  }
`;

export const ButtonClose = styled.button`
display: inline-block;
text-align: center;
width: 25px;
height: 25px;
border-radius: 12px;
padding:0;
font-size:20px;
border: 2px solid;
border-color: #37B9C5;
background-color: white;
color: #37B9C5;
margin-left:86%;
margin-top: 10px;
line-height: 10px;
}
`;

export const Cart = styled(Row)`
  margin-top: 10px;
  font-size: 12px;
  }
`;

export const ButtonDelete = styled.button`
  width: 10px;
  text-align:center;
  border: 0;
  background-color: white;
}
`;

export const Estoque = styled.span`
  color: #37B9C5;
  font-weight:600;
}
`;

export const ButtonShopping = styled.button`
display: inline-block;
text-align: center;
background-color: white;
border:0;
cursor:pointer;
}
`;

export const Quantidade = styled.span`
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    padding:0;
    line-height:10px;
    margin-left:10px;
}
`;

export const ButtonEnd = styled.button`
  background-color: #37B9C5;
  color: white;
  border: 0;
  width: 250px;
  height: 25px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 24px;
  margin-top: 20px;
  margin-bottom:40px;
  padding:0;
  line-height:25px;
  font-weight:600;
  }
`;

export const ProdutoQuantidade = styled.span`
  color: #333333;
  font-size: 12px;
  margin-left: 24px;
  padding:0;
  }
`;

export const ProdutoPreco = styled.span`
  color: black;
  font-size: 12px;
  padding:0;
  }
`;

export const Total = styled.span`
  color: black;
  font-weight: 600;
  font-size: 14px;
  padding:0;
  margin-left:24px;
  }
`;
