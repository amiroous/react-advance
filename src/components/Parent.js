import React from 'react';
import ChildOne from "components/ChildOne";
import ChildTwo from "components/ChildTwo";

const Parent = () => {
    return (
        <div>
            <h2 className="text-info mb-5">Parent</h2>
            <ChildOne/>
            <ChildTwo/>
        </div>
    );
};

export default Parent;
