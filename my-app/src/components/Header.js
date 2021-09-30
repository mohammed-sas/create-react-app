import {useLocation} from 'react-router-dom'
import Button from "./Button"
const Header = ({onAdd,show}) => {
   const location = useLocation();
    return (
        <header className="header">
            <h1 >Task Tracker</h1>

                {location.pathname ==='/' && <Button text={show ? 'close' : 'add'} color={show ? 'red' : 'green'} onClick={onAdd}  /> }
            
        </header>

    )

}



export default Header
