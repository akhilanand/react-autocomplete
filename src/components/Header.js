import logo from '../logo.png';
import PropTypes from 'prop-types'



const Header = ({ title }) => {
    return (
        <header className='header'>
            <img src={logo} className="logo" title={title} alt={title} />
        </header>
    )
}

Header.defaultProps = {
    title: "Google Search",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//css in JS  style={headingStyle}
// const headingStyle = {
//     color : "red",
//     backgroundColor : 'black',
// }
  

export default Header
