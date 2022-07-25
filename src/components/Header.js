import React from 'react'

const Header = ({ title }) => {
    return (
        <header class='header'>
            <h2 style={{
                color: 'inherit',
            }}>{title}</h2>
        </header>
    )
}


export default Header
