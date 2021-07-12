import React from 'react'

const Buttons = ({value, onClick}) => {
    return (
        <button type="button" onClick={onClick} 
        className="buttons">
            {value}
        </button>
    )
}

export default Buttons
