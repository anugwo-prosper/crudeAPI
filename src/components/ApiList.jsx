import React, { useContext } from 'react'
import { Crude } from '../Crude'
import ApiItems from './ApiItems'

const ApiList = () => {
    let {myapi, setmyApi} =useContext(Crude)
    console.log(myapi)


  return (
    
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {myapi.map((x) => (
            <ApiItems key={x.id} tunde={x}/>
        ))}

    </div>
  )
}

export default ApiList