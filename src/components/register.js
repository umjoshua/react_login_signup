import React, { useState } from 'react'
import './style.css';
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate= useNavigate();  

  let inputs_obj = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
  }

  const[inputs,setInputs]=useState(inputs_obj);

  const[warning, setWarning] = useState(false);
  const[warning_p, setWarningp] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(inputs.fname === '' || inputs.lname === '' || inputs.email === '' || inputs.password === '' || inputs.cpassword===''){
      setWarning(true);
    }
    else{
      setWarning(false);
      if(inputs.password!==inputs.cpassword){
        setWarningp(true);
      }
      else{
        navigate('/home');
      }
    }
  }

  return (
      <div>
          <div className='box'>
          <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <input type='text'
            name='fname'
            className='email' 
            placeholder='First Name'
            value={inputs.fname || ''} onChange={handleChange}/>

          <input type='text'
            name='lname'
            className='email' 
            placeholder='Last name'
            value={inputs.lname || ''} onChange={handleChange}/>

          <input type='email' name='email' className='email'
            placeholder='email'
            value={inputs.email || ''} onChange={handleChange}
          />

          <input type='password' name='password' className='password' placeholder='Password'
            value={inputs.password || ''} onChange={handleChange}
          />
          <input type='password' name='cpassword' className='password' placeholder='Confirm password'
            value={inputs.cpassword || ''} onChange={handleChange}
          />
          {warning && <p className='warning'>Please input all the fields</p>}
          {warning_p && <p className='warning'>Password doesn't match</p>}
          <button className='btn'>Sign Up</button>
          <Link to='/login' className='create'>Login Instead</Link>
          </form>
          </div>
      </div>
  )
}

export default Register