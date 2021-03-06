import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Cart from './components/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserContext from './components/context/UserContext'

function App () {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    userId: undefined,
    cart: {
      userId: undefined,
      items: {}
    }
  })

  return (
    <div className="App">
     <BrowserRouter>
     <UserContext.Provider value={{ userData, setUserData }}>
     <Header />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/cart" component={Cart} />

     </Switch>

     </UserContext.Provider>
     </BrowserRouter>
    </div>
  )
}

export default App
