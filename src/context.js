import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props){

  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(()=>{
      fetch(url)
        .then(res => res.json())
        .then(data=>setPhotos(data))
      }, []
  )

  function toggleFavorite(id){
      const updated = photos.map(photo => {
        if(photo.id === id){
          return {...photo, isFavorite: !photo.isFavorite}
        }
        return photo
      })
      setPhotos(updated)
  }
  function emptyCart() {
    setCartItems([])
}

  function removeItemFromCart(id){
    const updated = cartItems.filter(item => {if(item.id !== id){
      return item
    }
  })
    setCartItems(updated)
  }
  console.log(cartItems)

  function addItemToCart(image){
    setCartItems(prevItems => [...prevItems, image])
  }

  return(
    <Context.Provider value={{photos, toggleFavorite, addItemToCart, cartItems, removeItemFromCart, emptyCart}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
