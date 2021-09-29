import { useState } from "react";

const User =(props) =>{
    const [message,setMessage] = useState(0);
   
    return(
        
        <div>
           {message}

           <button onClick={() => setMessage(message+1)}>
               Subscribe
            </button>

        </div>
        
        
    )
}

export default User;