import React from 'react';
import "./select.css";

const select = (props) => {

    let classes = ['form-group'];
    if(props.ques.incorrect) {
        classes.push('error');
    }

    return (
        <div className={classes.join(' ')}>
            <label>{props.ques.Q}</label>
            <select className="form-control" onChange={props.changed} required={props.required} >
                <option value="">Select one</option>
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