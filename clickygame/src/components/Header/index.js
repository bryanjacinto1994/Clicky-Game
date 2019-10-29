import React from "react";
import "./Header.css";

const Header = props => (

    <div className="header">
        <div className="title-card">{props.children}</div>
        <div className="score-tracker">
            Current-Score: {props.currentScore} High-Score: {props.highScore}
        </div>
    </div>
);

export default Header;