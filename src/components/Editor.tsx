import React, { FC, useState } from 'react';
import '../css/Editor.css'
import { IEditor } from '../interfaces/IEditor';
import ColourPalette from './ColourPalette';

const Editor: FC<IEditor> = (props) => {
    const [colour, setColour] = useState('#FFFFFF')
    return(
        <div>
            <h1>Color {colour}</h1>
            <div style={{height: 50, width: 50, backgroundColor: colour}}>
            </div>
            <ColourPalette updateColour={setColour}/>
        </div>
    )
}

export default Editor;