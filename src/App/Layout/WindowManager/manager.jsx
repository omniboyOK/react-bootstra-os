import React, { useState } from 'react';
import Window from '../Window/window';

const Style = {
    position: 'fixed',
    heigth: '100vh',
    width: '100vw'
}

function WindowManager(props){
    const [windows] = useState([{}]);
    return(
        <div style={Style}>
            {windows.map(window => <Window></Window>)}
        </div>
    )
}

export default WindowManager;