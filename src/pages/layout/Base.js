import React from 'react';
import NavBar from "pages/partials/NavBar";

const Base = ({children}) => {

    return (
        <div className="Base">
            <div className="mb-3">
                <NavBar/>
            </div>
            <div className="container-fluid">
                {children}
            </div>
        </div>
    );
};

export default Base;
