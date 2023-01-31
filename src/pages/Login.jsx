import React,{useState} from 'react'
import axios from '../api/axios'
import {useAuth} from '../Context/Auth'
import {useLocation,useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  const LOGIN_URL='/login/'
  const {setAuth,auth}=useAuth()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const Location=useLocation()
  const navigate=useNavigate()
  const from=Location.state?.from?.pathname || '/'
  const [success,setSuccess]=useState(false)
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response=await axios.post(LOGIN_URL,JSON.stringify({email,password}),{headers:{'content-Type':'application/json'}})
      const accesstoken=response?.data?.access_token
      setAuth({email,accesstoken})
      navigate(from,{replace:true})
    } catch (error) {
      if (!error?.response) {
        setError('No server response')
      }else if(error?.response===400) {
        setError('Wrong email or password')
      }else if(error?.response===401){
        setError('Unauthorized')
      }else{
        setError('Login failed')
      }
    }
  }

  return (
    <div className='flex justify-center items-center font-Gilroy text-black  h-screen'>
 
      <form onSubmit={handleSubmit} className='flex flex-col w-96 gap-8 mt-24'>
        <h1 className='text-4xl text-center font-BebasNeuebold mb-4'>LOGIN</h1>
        <div className='flex flex-col gap-1 relative' >
        {error&& <div className="bg-[#FFAEAE] text-[#921A15] flex px-4 gap-3 absolute rounded font-Gilroysemibold text-sm items-center py-2 w-full -top-12"><img src="./images/warning.svg" alt="" /> {error}</div>}

        <label htmlFor="email" className=' font-Gilroysemibold'>Email</label>
            <input
            id='email'
            name='email'
            type="email"
            required
            autoComplete='true'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className='border border-[#E4E4E4] py-[0.7rem] rounded px-4'
            />
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor="password" className=' font-Gilroysemibold'>Password</label>
            <input
            id='password'
            name='password'
            type="password"
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            aria-describedby="password"
            className='border border-[#E4E4E4] py-[0.7rem] rounded px-4 '
            />
            <div className='text-[#949494] text-sm font-Gilroymedium mt-2'>Forgot password</div>
         </div>
            <button type="submit" className='bg-black text-white rounded py-2'>Login</button>
            <div className='text-center font-Gilroysemibold'>Don't have an account? <Link to='/register' ><span className='text-accent'>Sign up</span></Link></div>
      </form>
    
    </div>
   
  )
}

export default Login