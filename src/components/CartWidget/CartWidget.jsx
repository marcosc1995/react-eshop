import "./CartWidget.css";

function CartWidget() {
  return (
    <button className="cart-widget">
      <i className="bi bi-cart text-white"></i>
      <div className="cart-widget-text">Carrito</div>
      
      <div className="cart-widget-number">0</div>
    </button>
  );
}

export default CartWidget;
