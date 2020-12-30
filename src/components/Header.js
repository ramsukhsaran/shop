import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'
import UserContext from '../components/context/UserContext'
import UserInfo from './userinfo/UserInfo'

const Header = () => {
  const { userData, setUserData } = useContext(UserContext)
  const history = useHistory()

  const login = () => history.push('/login')
  const register = () => history.push('/register')
  const goToCart = () => history.push('/cart')
  const goToHome = () => history.push('/')

  const logout = () => {
    setUserData({
      role: undefined,
      user: undefined,
      userId: undefined,
      cart: {}

    })
    localStorage.setItem('auth-token', '')
    localStorage.setItem('login', false)
    history.push('/')
  }

  return (
        <div className="container-fluid bg-dark sticky-top container-nav">
            <nav className="navbar  navbar-light bg-dark navbar1">
                <a className="navbar-brand nav-app text-white" href="#">MyApp</a>

                 <>
                 {
                     userData.user ? <UserInfo user={userData.user}/> : null
                 }
                 </>
                {
                userData.user
                  ? (
                        <div className="d-flex justify-content-between" style={{ columnGap: '25px' }}>
                              {
                                userData.role === 'user'
                                  ? (
                                          <div className="d-flex ">
                                              <h3 className="text-danger mt-2">{userData.cart.items.length ? userData.cart.items.length : ''}</h3>
                                              <button className="btn" onClick={goToCart}><i className="fa fa-shopping-cart fa-2x mt-1" style={{ color: 'white' }}></i></button>
                                          </div>
                                    )
                                  : ''

                              }
                               <a className="mt-2 btn text-white btn-outline-info" onClick={goToHome}>Home</a>
                               <a className="mt-2 btn text-white btn-outline-danger" onClick={logout}>logout</a>
                        </div>)
                  : (
                        <>
                            <div className="navbar-right" id="navbar1">
                                <button className="btn btn-primary my-2 my-sm-0" onClick={login}>Login</button>
                                <button className="btn btn-danger my-2 my-sm-0" onClick={register} >Register</button>
                            </div>
                        </>
                    )
                }
            </nav>
        </div>
  )
}

export default Header
