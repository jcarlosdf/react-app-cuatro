import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetUsers = (url, method) => {
    // const [response, setResponse] = useState()
    const response = []
    // useEffect(()=>{
        axios[method](url)
        .then(res=>response = res.data)
    // },[])
  return response
}

export default useGetUsers