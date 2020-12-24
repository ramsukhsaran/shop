import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import './Header.css'
import UserContext from '../components/context/UserContext'
import UserInfo from './userinfo/UserInfo'

const Header = () => {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const login = () => history.push("/login");
    const register = () => history.push("/register");

    const logout = () => {
        setUserData({
            role: undefined,
            user: undefined,
            userId: undefined
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
                              <div className="d-flex justify-content-between" style={{columnGap:'20px'}}>
                              {
                                  userData.role ==='user'?(<i className="fa fa-shopping-cart fa-3x" style={{color: 'white'}}></i>):''
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