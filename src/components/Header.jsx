import PropTypes from 'prop-types'
import Button from './button'
const Header = (argument) => {
    const onClick = () => {
        console.log("This button is clicked");
        localStorage.setItem('todo', "task");
        console.log(localStorage.getItem('todo'))
    }
    return (
        <header className="header">
            <h1 style={HeaderStyle}>{argument.title}</h1>
            <Button color="blue" text="Add" onClick={onClick} />
        </header>
    );
}

const HeaderStyle = {
}
Header.defaultProps = {
    title: "Todo Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;


