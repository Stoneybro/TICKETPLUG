import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import useRefreshtoken from "../hooks/Refreshtoken";
import { useAuth } from "../Context/Auth";

const persistlogin = () => {
 const [isLoading,setIsLoading]=useState(true)
 const {auth}=useAuth()
 const refresh=useRefreshtoken()

 useEffect(()=>{
    let ismounted=true
    async function verifyrefresh(params) {
        try {
            refresh()
        } catch (error) {
            console.log(99);
        }finally{
           ismounted&& setIsLoading(false)
        }
    }
    !auth?.accesstoken?verifyrefresh():setIsLoading(false)
    return()=>{
        ismounted=false
    }
 },[])
    useEffect(()=>{
        console.log(`isloading:${isLoading}`);
        console.log(`at:${JSON.stringify(auth?.accessToken)}`);
    },[isLoading])
 return(
    isLoading?<div>....Loading</div>:<Outlet />
 )
}

export default persistlogin