import React, { FC, useState } from 'react';
import '../css/ColourPalette.css';
import { IColourPalette } from '../interfaces/IColourPalette';

const ColourPalette: FC<IColourPalette> = (props) => {
    return(
        <div className='ColourPalette'>
            <div className='ColourPaletteItem' style={{backgroundColor: '#000000'}} onClick={() => props.updateColour('#000000')}></div>
            <div className='ColourPaletteItem' style={{backgroundColor: '#FF0000'}} onClick={() => props.updateColour('#FF0000')}></div>
            <div className='ColourPaletteItem' style={{backgroundColor: '#00FF00'}} onClick={() => props.updateColour('#00FF00')}></div>
        </div>
    )
}

export default ColourPalette;