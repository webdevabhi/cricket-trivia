import React from 'react';
import "./select.css";

const select = (props) => {
    return (
        <div className="form-group">
            <label>{props.ques.q}</label>
            <select className="form-control" onChange={(e) => props.changed(e, props.id)}>
                <option value="">Select One</option>
                {
                    Object.keys(props.ques.options).map((key, idx) => {
                        return (
                            <option key={idx} value={key}>{props.ques.options[key]}</option>
                        )
                    })
                }
            </select>
        </div>
    );
};

export default select;