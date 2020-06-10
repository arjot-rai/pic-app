import React from 'react'
import './App.css'
import {Link, Switch, Route} from "react-router-dom"
import Header from "./components/header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}
// export App
export default App;
