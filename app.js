const css = require('./app.scss');
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    let a=9;

    return (
        <div>
                <h1> çalışıyor</h1>
                <p>çalştııı></p>
                {a/2}
        </div>
    );
}  


ReactDOM.render(<App/>,document.getElementById("root"));
