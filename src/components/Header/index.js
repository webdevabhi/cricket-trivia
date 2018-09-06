import React from 'react';

const header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    <a className="navbar-brand" href="/">Cricket Trivia</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default header;