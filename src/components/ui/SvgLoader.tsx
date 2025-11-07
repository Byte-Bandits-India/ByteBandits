import React from "react";
import "./App.css"; // keep your existing CSS

const SvgLoader: React.FC = () => {
    return (
        <div className="wrapper">
            <svg viewBox="0 0 1320 300">
                <text
                    x="50%"
                    y="40%"
                    dy=".35em"
                    textAnchor="middle"
                    className="floating"
                >
                    Byte Bandits
                </text>
            </svg>
        </div>
    );
};

export default SvgLoader;
