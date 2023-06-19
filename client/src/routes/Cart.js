import React from 'react';
import CartList from '../components/shared/CartList';
import EmptyCart from '../components/Cart/EmptyCart';
import Modal from '../components/shared/Modal';
import '../styles/routes/cart.css';

export default function Cart(props) {
  const [modal, setModal] = React.useState(false)

  function openModal() {
    setModal(prevModal => !prevModal)
  }

    return (
        <main className="cart-main">
            <div className="container">
            {props.totalPrice ? 
              (<div className="split-grid">
                  <div className="cart-items">
                    <div className="cart-category-items">
                        <h5 className="cart-product-title">Product</h5>
                        <h5 className="cart-product-price">Price</h5>
                        <h5 className="cart-product-quantity">Quantity</h5>
                    </div>
                    {Object.entries(props.groupedItems).map(([key, { count, price, smallImg, id }]) => (
                    <CartList
                        key={id}
                        item={key}
                        price={`${Number(price * count).toFixed(2)}`}
                        smallImg={smallImg}
                        removeFromCart={() => props.removeFromCart(key)}
                        sumToCart={() => props.sumToCart({ id, productName: key, productPrice: price, productImage: smallImg })}
                        isCartRoute={true}
                        countItems={count}
                    />
                    ))}
                  </div>
                  <div className="cart-summary">
                    <h4 className="cart-summary-title">Order Summary ({props.cartItems.length} {props.cartItems.length > 1 ? 'Items' : 'Item'})</h4>
                    <p className="cartlist-total-price">Total: ${props.totalPrice.toFixed(2)}</p>
                    <button className="btn-black" onClick={openModal}>Proceed to Checkout</button>
                  </div>
                  <Modal 
                  modal={modal} 
                  setModal={setModal}
                  totalPrice={props.totalPrice.toFixed(2)}
                  />
                </div>) : 
                (
                <EmptyCart />
                )}
            </div>
        </main>
    )
}