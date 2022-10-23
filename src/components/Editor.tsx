import React, { FC, useState } from 'react';
import '../css/Editor.css'
import { IEditor } from '../interfaces/IEditor';

const Editor: FC<IEditor> = (props) => {
    return(
        <div>
            <h1>Editor Window!</h1>
            <h1>Height: {props.height} Width: {props.width}</h1>
        </div>
    )
}

export default Editor;