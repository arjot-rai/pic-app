import React, {useState, useContext} from "react"
import {Context} from "../context"
import PropTypes from "prop-types"
function CartItem({item}) {
    const [isHovered, setIsHovered] = useState(false)
    const {removeItemFromCart} = useContext(Context)
    const iconClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
      <div className="cart-item">
        <i
            className={iconClassName}
            onClick={() => removeItemFromCart(item.id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        </i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
      </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem
