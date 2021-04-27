import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    console.log(root);
    const hello = React.createElement('h1', null, ["hello from React!"]);


    ReactDOM.render(<Clock />, root) 
})
