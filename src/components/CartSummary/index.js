// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const itemsCount = cartList.length
      let totalAmount = 0
      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="summary-card">
            <h1 className="summary">
              Order Total:{' '}
              <span className="total-amount">RS {totalAmount}/- </span>
            </h1>
            <p className="items-count"> {itemsCount} items in cart</p>
            <div>
              <button type="button" className="checkout-button">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
