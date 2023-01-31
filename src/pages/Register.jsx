import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Successful from '../components/successful';
import axios from '../api/axios';
const REGISTER_URL='/signup/'
const Register = () => {
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const EMAIL_REGEX=/^[a-zA-Z0-9.!$%&'*+/=?^_ `{|}~-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*$/

    const nameref=useRef(null)
    const errorref=useRef(null)
    const [name,setName]=useState('')
    const[validName,setValidName]=useState(false)
    const [nameFocus,setNameFocus]=useState('')

    const [lname,setLname]=useState('')
    const[validLname,setValidLname]=useState(false)
    const [lnameFocus,setLnameFocus]=useState('')

    const [email,setEmail]=useState('')
    const[validEmail,setValidEmail]=useState(true)
    const [emailFocus,setEmailFocus]=useState('')

    const [pwd,setPwd]=useState('')
    const[validPwd,setValidPwd]=useState(false)
    const [pwdFocus,setPwdFocus]=useState('')

    const [confirmpwd,setConfirmPwd]=useState('')
    const[validConfirmPwd,setValidConfirmPwd]=useState(false)
    const [confirmPwdFocus,setConfirmPwdFocus]=useState('')
    const [error,setError]=useState('')

    const [success,setSuccess]=useState(false)

    // useEffect(()=>{
    //     nameref.current.focus()
    // },[])
    useEffect(()=>{
        setValidName(USER_REGEX.test(name))
       
    },[name])

    useEffect(()=>{
        setValidName(EMAIL_REGEX.test(email))
        
    },[email])

    useEffect(()=>{
        setValidPwd(PWD_REGEX.test(pwd))

    },[pwd])

    useEffect(()=>{
        setValidConfirmPwd(pwd===confirmpwd)
    },[confirmpwd])

    async function handleSubmit (e) {
        e.preventDefault()
        try {
            const response=await axios.post(REGISTER_URL,JSON.stringify({username:name,email:email,password1:pwd,password2:confirmpwd}),{headers:{'content-Type':'application/json'}})
            setSuccess(true)
        } catch (error) {
            if (!error?.response) {
                setError('NO SERVER RESPONSE');
            }else if (error?.response===409){
                setError('USERNAME TAKEN');
            }else{
                setError('REGISTRATION FAILED');
            }
          
        }
    }

  return (
    <div className='flex justify-center items-center font-Gilroy text-black py-12'>
    {success?<Successful />:
     <div>
        
     <form onSubmit={handleSubmit} className='flex flex-col w-96 gap-8 mt-24'>
         <div className='text-4xl font-BebasNeuebold text-center mb-4'>SIGNUP</div>
         {error&& <div ref={errorref} className="bg-[#FFAEAE] text-[#921A15] flex px-4 gap-3 absolute rounded font-Gilroysemibold text-sm items-center py-2 w-full -top-12"><img src="./images/warning.svg" alt="" /> {error}</div>}

         <div className='flex justify-between gap-4'>

         <div className='flex flex-col '>
         <label htmlFor="name" className=' font-Gilroysemibold'>First Name</label>
         <input

         aria-describedby="uidnote"
         aria-invalid={validName?'false':'true'}
         id='name'
         name='name'
         type="text"
         required
         autoComplete='true'
         onChange={(e)=>setName(e.target.value)}
         value={name}
         onFocus={()=>setNameFocus(true)}
         onBlur={()=>setNameFocus(false)}
         className='border border-[#E4E4E4] py-[0.7rem] rounded px-4 w-full'
         />
         {!validName&&name&&nameFocus  && <div>sdtfyghjkljhfgdgxfcgh</div>}

         </div>
         <div className='flex flex-col'>
         <label htmlFor="lastname" className=' font-Gilroysemibold'>Last Name</label>
         <input
         aria-describedby="uidnote"
         aria-invalid={validName?'false':'true'}
         id='lastname'
         name='lastname'
         type="text"
         required
         autoComplete='true'
         onChange={(e)=>setLname(e.target.value)}
         value={lname}
         onFocus={()=>setNameFocus(true)}
         onBlur={()=>setNameFocus(false)}
         className='border border-[#E4E4E4] py-[0.7rem] rounded px-4 w-full'
         />
         {!validName&&lname&&lnameFocus  && <div>sdtfyghjkljhfgdgxfcgh</div>}

         </div>

         </div>


         <div className='flex flex-col'>
         <label htmlFor="email" className=' font-Gilroysemibold'>Email Address</label>
         <input
         id='email'
         name='email'
         type="email"
         required
         autoComplete='true'
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
         onFocus={()=>setEmailFocus(true)}
         onBlur={()=>setEmailFocus(false)}
         aria-invalid={validEmail?'false':'true'}
         className='border border-[#E4E4E4] py-[0.7rem] rounded px-4'
         />
         {!validEmail&&email &&emailFocus && <div>sdtfyghjkljhfgdgxfcgh</div>}
         </div>

         <div className="flex flex-col">
         <label htmlFor="password" className=' font-Gilroysemibold'>Password</label>
         <input
         id='password'
         name='password'
         type="password"
         required
         onChange={(e)=>setPwd(e.target.value)}
         value={pwd}
         onFocus={()=>setPwdFocus(true)}
         onBlur={()=>setPwdFocus(false)}
         aria-describedby="password"
         aria-invalid={validPwd?'false':'true'}
         className='border border-[#E4E4E4] py-[0.7rem] rounded px-4'
         />
         {!validPwd&&pwd &&pwdFocus && <div>sdtfyghjkljhfgdgxfcgh</div>}
         </div>

         <div className="flex flex-col">
         <label htmlFor="confirmpassword" className=' font-Gilroysemibold'>Confirm password</label>
         <input
         id='confirmpassword'
         name='confirmpassword'
         type="password"
         required
         onChange={(e)=>setConfirmPwd(e.target.value)}
         value={confirmpwd}
         className='border border-[#E4E4E4] py-[0.7rem] rounded px-4'
         />
         {!validConfirmPwd&&confirmpwd  && <div>sdtfyghjkljhfgdgxfcgh</div>}
         
         </div>
         
         <button type="submit" className='bg-black text-white rounded py-2' disabled={!validConfirmPwd ||!validEmail || !validPwd ||!validEmail || !validName?true:false }>submit</button>
                </form>
 </div>}
   
    </div>
  )
}

export default Register