import React, { FC, useState } from 'react';
import '../css/ColourPalette.css';
import { IColourPalette } from '../interfaces/IColourPalette';

const ColourPalette: FC<IColourPalette> = (props) => {
    return(
        <div className='ColourPalette'>
            <button onClick={() => props.updateColour('#000000')}>Colour = Black</button>
            <button onClick={() => props.updateColour('#FF0000')}>Colour = Red </button>
            <button onClick={() => props.updateColour('#00FF00')}>Colour = Green</button>
        </div>
    )
}

export default ColourPalette;