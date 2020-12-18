import React,{useState} from 'react';
import { useHistory } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const history = useHistory();
   
    const login = () =>history.push("/login");
    const register = () =>history.push("/register");

    return (
        <div className="container-fluid bg-white sticky-top container-nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand nav-app" href="/">MyApp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar-right" id="navbar1">
                    <button class="btn btn-primary my-2 my-sm-0" onClick={login}>Login</button>
                    <button class="btn btn-danger my-2 my-sm-0" onClick={register} >Register</button>
                </div>
            </nav>


        </div>
    );
};

export default Header;