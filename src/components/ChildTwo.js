import React from 'react';
import { useStateData } from "store";
import { changeTheme } from "store/actions";

const ChildTwo = () => {

    const[{theme}, dispatch] = useStateData();
    const onChangeTheme = (e) => changeTheme(e.target.value, dispatch);

    return (
        <div className="mb-5">
            <h3 className="text-secondary mb-3">Child Two</h3>
            <div className="form-group">
                <label htmlFor="switchTheme">Switch Theme</label>
                <select className="form-control" id="switchTheme"
                    value={theme}
                    onChange={onChangeTheme}
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
