import React from 'react';
import { useStateData } from "store";
import { CHANGE_AUTH } from "store/actions";

const ChildOne = () => {

    const [{ authenticated }, dispatch] = useStateData();
    const handleSwitchAuth = (e) => {
        dispatch({
           type: CHANGE_AUTH,
           payload: e.target.checked
        });
    };

    return (
        <div className="mb-5">
            <h3 className="text-primary mb-3">Child One</h3>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="switchAuth"
                    checked={authenticated}
                    onChange={handleSwitchAuth}
                />
                <label className="form-check-label ml-1" htmlFor="switchAuth">Switch Auth</label>
            </div>
        </div>
    );
};

export default ChildOne;
