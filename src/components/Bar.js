import React from 'react'

const Bar = ({ title }) => {
    return (
        <header class='bar'>
            <h2 style={{
                color: 'inherit',
            }}>{title}</h2>
            <button className='btn'>About Us</button>
        </header>
    )
}

Bar.defaultProps = {
    title: "RPS Robotics",
}

export default Bar
