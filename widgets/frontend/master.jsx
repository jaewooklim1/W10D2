import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

const Master = (props) => {
    console.log(props)
    return (
        <div className = "master">
            <h1>
                Widgets
            </h1>
            <Clock />
        </div>
    )
}



export default Master;