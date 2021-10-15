import PropTypes from 'prop-types'

const Header = (argument) => {
    return (
        <header>
            <h1 style={HeaderStyle}>{argument.title}</h1>
        </header>
    )
}

const HeaderStyle = {
    color: 'red',
}
Header.defaultProps = {
    title: "Todo Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
