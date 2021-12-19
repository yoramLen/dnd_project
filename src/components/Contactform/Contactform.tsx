import {useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap';


const Contactform = () =>{
    const [sent, setSent] = useState<boolean>(false);


    useEffect(()=>{
        setSent(false);
    }, [])

return(
    <div>
        {sent?<Alert variant='success'>Your email was sent</Alert>: <div></div>}
    <form className="form">

<div className="name">

   <label htmlFor="firstName">First name</label>
   <input
        type="text"
        name="firstName"
        className="firstName"
   />
   <label htmlFor="lastName">Last name</label>
   <input
        type="text"
        name="lastName"
        className="forminput"
        
   />
</div>
<label htmlFor="message">Message</label>

<textarea
  placeholder="Start typing..."
  className="message"
  name="message"
/>
</form>
<button type="submit" className="send" onClick={()=>setSent(true)}>Send</button>


    </div>
)


}


export default Contactform;