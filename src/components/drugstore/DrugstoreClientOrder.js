import "./Product.css";
import Product from "./Product";

export default function DrugstoreClientOrder(props) {
  return (
    <>
      <p>
        <span style={{ color: "#37B9C5", fontWeight: "bold" }}>Quantidade</span>
        <span style={{ fontWeight: "bold", paddingLeft: "60px" }}>
          Detalhes do Pedido
        </span>
      </p>
      {props.pedido.products.map((item, idx) => {
        return (
          <Product
            amount={item.amount}
            product={item.productName}
            price={item.price}
          />
        );
      })}
      <div class="row justify-content-end">
        <div
          class="col-3"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <span style={{ color: "#37B9C5" }}>Frente:</span>
          <span style={{ paddingLeft: "11px" }}>R${props.pedido.shipping}</span>
        </div>
        <div class="w-100"></div>
        <div
          class="col-3"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <span style={{ color: "#37B9C5" }}>Total:</span>
          <span style={{ paddingLeft: "20px", fontWeight: "bold" }}>
            R${props.pedido.total}
          </span>
        </div>
      </div>
    </>
  );
}
