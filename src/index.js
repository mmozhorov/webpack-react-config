import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.scss';

class App extends Component{
    render() {
        return(
            <React.Fragment>
                <div>Hello world</div>
            </React.Fragment>
        );
    }
}

render(<App/>, document.getElementById('root'));