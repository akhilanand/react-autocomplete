import PropTypes from 'prop-types'

const Button = ({ color, title, onClick }) => {
    return <button onClick={onClick} className='btn search-btn' style={{backgroundColor:color}}>{title}</button>
}

Button.defaultProps = {
    color : '#4285f4',
    title : 'Search'
}

Button.prototype = {
    color : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    onClick : PropTypes.func,
}


export default Button
