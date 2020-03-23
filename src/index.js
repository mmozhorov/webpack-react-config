import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.css';
import Logo from './logo.jpg';

class App extends Component{
    render() {
        return(
            <>
                <div>Hello world</div>
                <img src={Logo}  alt="logo"/>
            </>
        );
    }
}

render(<App/>, document.getElementById('root'));