import React, { createContext, useContext } from 'react'
import { Crude } from '../Crude'

const ApiItems = ({tunde}) => {
  let {deleteapi} = useContext(Crude)
  return (
    <div style={{width:'300px', height:'300px', padding:'15px', margin:'10px', backgroundColor:'crimson'}}>
        <h3>{tunde.title}</h3>
        <p>{tunde.body}</p>
        <button onClick={() => deleteapi(tunde.id)}>Delete</button>
    </div>
  )
}

export default ApiItems