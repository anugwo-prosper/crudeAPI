import React, {useContext, useState} from 'react'
import { Crude } from '../Crude'


const Form = () => {
    let {addreview } = useContext(Crude)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

let handleSubmit= (e) => {
e.preventDefault();
// console.log({title, body})
    const newreview = {body, title};
    setBody('');
    setTitle('');
   
    addreview(newreview);

}
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
           <div>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder='Enter your title'/>
           </div>
           {/* <div>
            <input type="file" />
           </div> */}

           <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}   placeholder='Enter a body of your message'/>
           </div>

           <input type="submit" />
        </form>
    </div>
  )
}

export default Form