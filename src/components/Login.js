import React, { useState, useContext } from 'react'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Msgshow from '../components/msgshow.js/Msgshow'
import UserContext from './context/UserContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState()

  const { setUserData } = useContext(UserContext)

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newLogin = { email, password }
      const loginRes = await axios.post('http://localhost:5000/users/login', newLogin)

      const decode = jwt_decode(loginRes.data.token) // decoding jwt token
      setUserData({
        userId: decode.id,
        user: decode.name,
        role: decode.role,
        cart: {
          userId: decode.id,
          items: []
        }
      })

      localStorage.setItem('auth-token', loginRes.data.token)
      localStorage.setItem('login', true)
      history.push('/')
    } catch (err) {
      err.response.data.msg && setMsg(err.response.data.msg)
    }
  }

  return (
        <div className="container-fluid" style={{ backgroundColor: 'lightblue', height: '100vh' }}>
            <div className="login-flex">
                <div>{msg && (<Msgshow message={msg} clearMsg={() => setMsg(undefined)} />)}</div>
                    <div className="col-4 offset-4 card rounded" style={{ backgroundColor: '#f3f3f3', marginTop: '8rem' }}>
                    <div className="text-center mb-3 mt-2" >
                        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                    </div>
                        <form>
                            <label className="">Email ID:</label>
                            <input className="form-control mt-1" type="email" onChange={e => setEmail(e.target.value)} required />

                            <label>Password</label>
                            <input className="form-control" type="password" onChange={e => setPassword(e.target.value)} required />

                            <br />
                            <div className="mt-3"><button className="btn btn-primary form-control" onClick={e => handleSubmit(e)} >Login</button></div>
                            <br />
                            <div className="mt-3 float-right"><h6>Register ?<a href="/register">Click here</a></h6></div>
                            <h6 className="mt-3">Forget Password? <a href="#">Click Here</a></h6>
                        </form>

                    </div>
                </div>

        </div>
  )
}

export default Login
