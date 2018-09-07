import React from 'react';

const header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Cricket Trivia</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default header;