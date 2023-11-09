import React, { useState } from 'react';
import "./styles.css"

export function Picker(props) {
    const [displayColors, setDisplayColors] = useState(false);
    const [bgColor, setBgColor] = useState("pink")

    const handleClick = () => {
        setDisplayColors(true);
    }

    const handleColor = (color) => {
        setBgColor(color);
        setDisplayColors(false);
    }
    return (
        <div className='container pt-4'>
            <h3 className='text-center fw-bolder'>Color Picker</h3>
            <div style={{ backgroundColor: bgColor }} className='display m-auto d-flex flex-column align-items-center justify-content-center mb-5'>
                <div className='d-flex flex-wrap justify-content-center color-bar'>
                    {displayColors && props.colors.map((color, index) => (
                        <div
                            key={index}
                            className='color-box'
                            style={{ backgroundColor: color }}
                            onClick={() => { handleColor(color) }}
                        ></div>
                    ))}
                </div>
                <button className='btn btn-success button' onClick={handleClick}>Pick a color</button>
            </div>
        </div>
    )
}