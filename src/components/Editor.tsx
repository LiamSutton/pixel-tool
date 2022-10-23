import React, { FC, useState } from 'react';
import '../css/Editor.css'
import { IEditor } from '../interfaces/IEditor';

const Editor: FC<IEditor> = (props) => {
    const [colour, setColour] = useState('#FFFFFF')
    return(
        <div>
        </div>
    )
}

export default Editor;