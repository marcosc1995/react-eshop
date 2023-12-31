import "./ProductCard.css"
function ProductCard(props) {
  return (
    <div class="card productCard" style={{ width: "18rem" }}>
      <img
        src={props.thumbnail}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
