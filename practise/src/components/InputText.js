import Heading from './Heading';
import { useState } from 'react';

const InputText = () => {
    const [text,setText] = useState('');
    const [style,setStyle]= useState('');
    return (
        <div>
             <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <Heading text={text} style={style}/>
      <button onClick={() => setStyle('red')}>red</button>
      <button onClick={() => setStyle('yellow')}>yellow</button>
      <button onClick={() => setStyle('green')}>green</button>
        </div>
    )
}

export default InputText



