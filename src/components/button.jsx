import PropTypes from 'prop-types'
function Button({ color, text, onClick }) {

    return (
        <button onClick={onClick} className="btn" style={{ backgroundColor: color, }}>{text}</button>
    );
}


export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

