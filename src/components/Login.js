import React,{ useState} from 'react';


const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const handleSubmit=()=>{

    }

    return (
        <div className="container-fluid" style={{backgroundColor: 'lightblue',height:'100vh'}}>
            <div className="row">
                    <div className="col-4 offset-4 card rounded" style={{backgroundColor: '#f3f3f3',marginTop:'8rem'}}>
                    <div className="text-center mb-3 mt-2" >
                        <i class="fa fa-user fa-2x" aria-hidden="true"></i> 
                    </div>
                        <form method="post"  onSubmit={handleSubmit} >
                            <label className="">Email ID:</label>
                            <input className="form-control mt-1" type="email" onChange={e=>setEmail(e.target.value)} />
                            {/* <div style={{ color: 'red' }}>{this.state.errors.email}</div> */}
                            <label>Password</label>
                            <input className="form-control" type="password" onChange={e=>setPassword(e.target.value)} />
                            {/* <div style={{ color: 'red' }}>{this.state.errors.password}</div> */}
                            <br />
                            <div className="mt-3"><button type="submit" className="btn btn-primary form-control" >Login</button></div>
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