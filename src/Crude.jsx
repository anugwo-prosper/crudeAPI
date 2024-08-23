import React, { createContext, useEffect, useState } from 'react'

let url = 'https://jsonplaceholder.typicode.com/posts'
export const Crude = createContext()

const CrudeApi = ({children}) => {
    const [myapi, setmyApi] = useState([])
    useEffect(() => {
        const getApi = async () => {
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data)
            setmyApi(data)
        }
        getApi()

    }, [ setmyApi])

    const addreview = async(newreview) =>{
      let url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newreview)
      })
      const data = await response.json()
      setmyApi([data, ...myapi])

    }
    const deleteapi = async(  
      
    ) =>{
      if( window.confirm('Are you sure you want to delete this')){
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
          {method: 'DELETE',

          })
          setmyApi(myapi.filter((item) => item.id !== id)) 
      }
    }
  return (
    <Crude.Provider value={{myapi, setmyApi, addreview, deleteapi }}>
        {children}
    </Crude.Provider>
  )
}

export default CrudeApi