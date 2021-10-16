import PropTypes from 'prop-types'
function Button({ color, text, onClick }) {

    return (
        // We should use 2 curly braces when tinkering with the arguments in a tag in jsx or react file
        // And single curly brace when using as a text between the starting and ending of a tag.
        <button onClick={onClick} className="btn" style={{ backgroundColor: color, }}>{text}</button>
    );
}


export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

