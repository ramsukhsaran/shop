import React,{ useState} from 'react';
import axios from 'axios';


const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
   
    const handleSubmit=(e)=>{
        e.preventDefault();
       const newLogin={
           email,
           password
       }
        
      axios.post('http://localhost:5000/users/login',newLogin)
            .then((response=>console.log(response.data)))
            .catch((err)=>console.log(err))
       

    }

    return (
        <div className="container-fluid" style={{backgroundColor: 'lightblue',height:'100vh'}}>
            <div className="row">
                    <div className="col-4 offset-4 card rounded" style={{backgroundColor: '#f3f3f3',marginTop:'8rem'}}>
                    <div className="text-center mb-3 mt-2" >
                        <i class="fa fa-user fa-2x" aria-hidden="true"></i> 
                    </div>
                        <form>
                            <label className="">Email ID:</label>
                            <input className="form-control mt-1" type="email" onChange={e=>setEmail(e.target.value)} />
                            {/* <div style={{ color: 'red' }}>{this.state.errors.email}</div> */}
                            <label>Password</label>
                            <input className="form-control" type="password" onChange={e=>setPassword(e.target.value)} />
                            {/* <div style={{ color: 'red' }}>{this.state.errors.password}</div> */}
                            <br />
                            <div className="mt-3"><button  className="btn btn-primary form-control" onClick={e=>handleSubmit(e)} >Login</button></div>
                            <br />
                            <div className="mt-3 float-right"><h6>Register ?<a href="/register">Click here</a></h6></div>
                            <h6 className="mt-3">Forget Password? <a href="#">Click Here</a></h6>
                        </form>


                    </div>
                </div>

            
        </div>
    );
};

export default Login;