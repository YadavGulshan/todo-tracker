import PropTypes from 'prop-types'
import Button from './button'
const Header = (argument) => {
    return (
        <header className="header">
            <h1 style={HeaderStyle}>{argument.title}</h1>
            <Button text="Add" color="blue" />
        </header>
    )
}

const HeaderStyle = {
}
Header.defaultProps = {
    title: "Todo Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
