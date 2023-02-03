
import axios from '../api/axios'
import { useAuth } from '../Context/Auth'

const REFRESH_URL='/token/refresh/'
const useRefreshtoken = () => {
    const {setAuth}=useAuth()
  
    async function refresh() {
            const response=await axios.get(REFRESH_URL,{withCredential:true})
            const accesstoken=response?.data?.access_token
            console.log(accesstoken);
           setAuth(prev=>{
            return{
                ...prev,accesstoken
            }
           })
           
           return accesstoken
    }
  return refresh
}

export default useRefreshtoken