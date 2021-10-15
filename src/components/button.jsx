import React from 'react'
import PropTypes from 'prop-types'
function Button({ color, text }) {
    return (
        <button className="btn" style={{ backgroundColor: color }}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
