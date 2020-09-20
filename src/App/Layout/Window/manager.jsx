import React, { useState } from 'react';

const Style = {
    position: 'fixed',
    heigth: '100vh',
    width: '100vw'

}

function WindowManager(props){
    const [windows] = useState([]);
    return(
        <div style={Style}>
            {windows.map(window => (window))}
        </div>
    )
}

export default WindowManager;