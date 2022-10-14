import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetUsers = (url, method) => {
    const [response, setResponse] = useState()
    useEffect(()=>{
        axios[method](url)
        .then(res=>setResponse(res.data))
    },[])
  return response
}

export default useGetUsers