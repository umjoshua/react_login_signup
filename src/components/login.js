import React, { useState } from 'react'
import './style.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {

  let inputs_obj = {
    email: '',
    password: '',
  }

  let navigate= useNavigate();  

  const[inputs,setInputs]=useState(inputs_obj);
  const[warning, setWarning] = useState(false);
  const[inc_warning, setIncWarning] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(inputs.email === '' || inputs.password === ''){
      setWarning(true);
    }
    else{
      setWarning(false);
      if(inputs.email !== 'admin@admin.com' || inputs.password!== 'admin'){
        setIncWarning(true);
      }
      else{
        navigate("/home");
      }
    }
  }


  return (
    
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div className='box'>
        <h1>Login</h1>
        <input type='email' name='email' className='email' placeholder='email'
          value={inputs.email || ''} onChange={handleChange} 
        />
        <input type="password" name='password' className='password' placeholder='Password'
          value={inputs.password || ''} onChange={handleChange}
        />
        {warning && <p className='warning'>Please input all the fields</p>}
        {inc_warning && <p className='warning'>Incorrect email or password</p>}
        <button className='btn'>Sign In</button>
        <Link to='/register' className='create'>New User? Register</Link>
        </div>
        </form>
    </div>
  )
}

export default Login