import "./Product.css";

export default function Product(props) {
  return (
    <div class="container">
      <div
        class="row align-items-start"
        style={{
          borderBottom: "1px solid black",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div class="col-2">{props.amount}x</div>
        <div class="col-8">{props.product}</div>
        <div class="col">R${props.price}</div>
      </div>
    </div>
  );
}
