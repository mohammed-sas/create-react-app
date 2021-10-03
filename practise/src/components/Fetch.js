import {useState} from 'react';

const Fetch = () => {
    const [url,setUrl] = useState('');
    const [output,setOutput] = useState('');

    function handleStatus(status){
        if(status === 401){
            setOutput('user not logged in');
        }

        if(status === 404){
            setOutput('not found');
        }
    }
    function clickHandler(){
            fetch(`${url}`)
            .then(res => handleStatus(res.status))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <input type="text" onChange={(e) => setUrl(e.target.value)} placeholder="Enter url" />
            <button onClick={clickHandler}>Submit</button>
            <p>{output}</p>
        </div>
    )
}

export default Fetch
