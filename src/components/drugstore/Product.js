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
<<<<<<< HEAD
        <div class="col-2">x1</div>
=======
        <div class="col-2">{props.amount}x</div>
>>>>>>> 2ea87fd9472685babda38f6c951bac7c62eb0fba
        <div class="col-8">{props.product}</div>
        <div class="col">R${props.price}</div>
      </div>
    </div>
  );
}
