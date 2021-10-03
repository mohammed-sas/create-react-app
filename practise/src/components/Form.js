
 import { useState } from "react"
const Form = () => {
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault();
        if(name === pass)
           return alert('username and password cant be same');
        
        return alert('success');
    }
    return (
        
        <form onSubmit={submitHandler} >
            <input type="text" name='username' value={name} onChange={(e) => setName(e.target.value)} required placeholder="enter user name"/>
            <input type="password" name='password' value={pass} onChange={(e) => setPass(e.target.value)} required placeholder="enter password" />
            <input type="submit" value='Submit' />
        </form>
    )
}

export default Form
