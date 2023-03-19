import React from 'react'
import { useNavigate} from 'react-router-dom'

const Admin = ({setAuthen}) => {
  const navigate=useNavigate()
  const loginUser=(e)=>{
    e.preventDefault();
    if(e.target.password.value ==='sohee81'){
      setAuthen(true);
      navigate('/feedback')
    }else{
      setAuthen(false);
      alert('You are not a Admin!')
      navigate('/admin')
    }
   
   
   
  }
  return (
    <form onSubmit={(e)=>loginUser(e)} className='login-form'>
    <label htmlFor="username">Username</label>
    <input type="text" name="username" autoComplete='current-password' />

    <label htmlFor="password">Password</label>
    <input type="password" name="password" autoComplete='current-password'/>
<button className='loginSec-btn'>Submit</button>
  </form>
  )
}

export default Admin