import React from 'react';
import 'App.scss';
import Parent from "components/Parent";
import { useStateData } from "store";

function App() {
    
    const [{ authenticated, theme }] = useStateData();

    return (
        <div className="App container-fluid">
            <h1 className="display-4 text-center text-muted mb-5">React Advance</h1>
            <div className={`alert alert-${theme}`} role="alert">
                <h5 className="alert-heading">Application States</h5>
                <hr/>
                <p>Authentication: <b>Logged { authenticated ? 'In' : 'Out' }</b></p>
                <p className="mb-0">Theme: <b>{ theme }</b></p>
            </div>
            <Parent/>
        </div>
    );
}

export default App;
