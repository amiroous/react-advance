import React from 'react';
import { useStateData } from "store";
import { CHANGE_THEME } from "store/actions";

const ChildTwo = () => {

    const[{theme}, dispatch] = useStateData();
    const handleSwitchTheme = (e) => {
        dispatch({
            type: CHANGE_THEME,
            payload: e.target.value
        });
    };

    return (
        <div className="mb-5">
            <h3 className="text-secondary mb-3">Child Two</h3>
            <div className="form-group">
                <label htmlFor="switchTheme">Switch Theme</label>
                <select className="form-control" id="switchTheme"
                    value={theme}
                    onChange={handleSwitchTheme}
                >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="success">Success</option>
                    <option value="danger">Danger</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                </select>
            </div>
        </div>
    );
};

export default ChildTwo;
