import { useState } from 'react'
import Autocomplete from "./Autocomplete";


const SearchBox = ({ placeholder }) => {
    const [suggestions] = useState([
        'Riafy','Webleks','Ovalion','Ewokesoft'
      ])
    return (
        <div className='search-box'>
            <Autocomplete placeholder={placeholder}
                suggestions={suggestions}
            />
        </div>
    )
}

//css in JS  style={headingStyle}
// const headingStyle = {
//     color : "red",
//     backgroundColor : 'black',
// }
  

export default SearchBox
