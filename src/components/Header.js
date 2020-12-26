import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import './Header.css'
import UserContext from '../components/context/UserContext'
import UserInfo from './userinfo/UserInfo'
import CartItemShow from './CartItemShow'

const Header = () => {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const login = () => history.push("/login");
    const register = () => history.push("/register");

    const logout = () => {
        setUserData({
            role: undefined,
            user: undefined,
            userId: undefined,
            cart:{}

        })
        localStorage.setItem('auth-token', '')
        localStorage.setItem('login',false)
        history.push("/")
        

    }
 
    return (
        <div className="container-fluid bg-dark sticky-top container-nav">
            <nav class="navbar  navbar-light bg-dark navbar1">
                <a class="navbar-brand nav-app text-white" href="#">MyApp</a>
               
                 <>
                 {
                     userData.user?<UserInfo  user={userData.user}/>:null
                 }
                 </>
                {
                    userData.user ? (
                              <div className="d-flex justify-content-between" style={{columnGap:'25px'}}>
                              {
                                 
                                      userData.role ==='user'?(
                                          <div className="d-flex ">
                                              <h4 className="text-danger mt-2">{<CartItemShow items={userData.cart.items} />}</h4>
                                              <i className="fa fa-shopping-cart fa-2x mt-1 ml-1" style={{color: 'white'}}></i>
                                          </div>
                                      ):''      
                               
                              }    
                             
                              <button className="btn btn-danger my-2 my-sm-0 float-right" onClick={logout} >logout</button> </div>) : (
                        <>
                            <div className="navbar-right" id="navbar1">
                                <button class="btn btn-primary my-2 my-sm-0" onClick={login}>Login</button>
                                <button className="btn btn-danger my-2 my-sm-0" onClick={register} >Register</button>
                            </div>
                        </>
                    )
                }
            </nav>
        </div>
    );
};

export default Header;