import "./ItemListContainer.css";
import ProductCard from "../ProductCard/ProductCard";

function ItemListContainer(props) {
  const productos = props.productos;
  const listaProductos = productos.map((producto) => (
    <div>
      <ProductCard title={producto.title} thumbnail={producto.thumbnail}></ProductCard>
    </div>
  ));
  return <div className="itemListContainer">{listaProductos}</div>;
}

export default ItemListContainer;
