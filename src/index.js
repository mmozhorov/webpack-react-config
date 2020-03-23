import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.scss';

class App extends Component{

    render() {
        debugger;
        return(
            <>
                <div>Hello world</div>
                <img src={Logo}  alt="logo"/>
            </>
        );
    }
}

render(<App/>, document.getElementById('root'));