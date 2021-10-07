
export default function Product(props){
    return(
        <div class="container">
            <div
            class="row align-items-start"
            style={{
                borderBottom: "1px solid black",
                paddingTop: "20px",
                paddingBottom: "20px",
            }}
            >
            <div class="col-2">x{props.amount}</div>
            <div class="col-8">
               {props.name}
            </div>
            <div class="col">R${props.price}</div>
            </div>
      </div>
    )
}