import "./Product.css";
import Product from "./Product";

export default function DrugstoreClientOrder(props) {

  const produtos = props.pedido.orderProducts ? props.pedido.orderProducts : props.pedido.products
  const dadosMockados = props.pedido.orderProducts ? false : true
  return (
    <>
      <p>
        <span style={{ fontWeight: "bold", paddingLeft: "60px" }}>
          Quantidade
        </span>
        <span style={{ fontWeight: "bold", paddingLeft: "60px" }}>
          Detalhes do Pedido
        </span>
      </p>
      {produtos.map((item, idx) => {
        return (
          <Product
            amount={dadosMockados ? item.amount : item.quantity}
            product={dadosMockados ? item.productName : item.produto.nome}
            price={dadosMockados ? item.price : item.produto.preco}
          />
        );
      })}
      <div class="row justify-content-end">
        <div
          class="col-3"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <span style={{ color: "#37B9C5" }}>Frete:</span>
          <span style={{ paddingLeft: "11px" }}>R${dadosMockados ? props.pedido.shipping : props.pedido.freight}</span>
        </div>
        <div class="w-100"></div>
        <div
          class="col-3"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <span style={{ color: "#37B9C5" }}>Total:</span>
          <span style={{ paddingLeft: "20px", fontWeight: "bold" }}>
            R${dadosMockados ? props.pedido.total : props.pedido.price}
          </span>
        </div>
      </div>
    </>
  );
}
