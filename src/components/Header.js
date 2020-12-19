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
            token: undefined,
            user: undefined,
            userId: undefined
        })
        localStorage.setItem('auth-token', '')
        history.push('/')

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
                              <button className="btn btn-danger my-2 my-sm-0 float-right" onClick={logout} >logout</button>) : (
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