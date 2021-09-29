
import Button from "./Button"
const Header = ({onAdd,show}) => {
   
    return (
        <header className="header">
            <h1 >Task Tracker</h1>
            <Button text={show ? 'close' : 'add'} color={show ? 'red' : 'green'} onClick={onAdd}  />
            
        </header>

    )

}



export default Header
