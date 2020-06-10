import React, {useState, useContext} from "react"
import {Context} from "../context"
import PropTypes from "prop-types"

function Image(props){
  const [isHovered, setIsHovered] = useState(false)
  const {toggleFavorite, addItemToCart, cartItems, removeItemFromCart} = useContext(Context)

  function check(){
    if(!props.img.isFavorite){
      return(
            isHovered &&
            <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-line favorite"></i>

      )

    } else{
      return(
        <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-fill favorite"></i>
      )
    }
  }

  function checkCart(id){
    if(cartItems.some(item => item.id == id)){
      return(
        <i onClick={() => removeItemFromCart(id)} className="ri-shopping-cart-fill cart"></i>
      )
    }else{

      return(
        isHovered &&
        <i onClick={() => addItemToCart(props.img)} className="ri-add-circle-line cart"></i>
      )
    }
  }
  return(
    <div
      className={`${props.className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.img.url} className="image-grid" />
      {check()}
      {checkCart(props.img.id)}

    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })

}

export default Image
