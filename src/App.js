import React from 'react';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <Switch>

       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
       <Route  exact path="/register" component={Register} />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
