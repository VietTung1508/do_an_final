import React, { useState } from "react";
import "./Dropping.scss";

const Dropping = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion ${isOpen ? "active" : ""}`}>
            <div className={`accordion-header ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
                <p>{title}</p>

                <span className={`material-symbols-outlined ${isOpen ? "active" : ""}`}>
          expand_more
        </span>
            </div>

            {isOpen && (
                <div className="accordion-content">
                    <p>{children}</p>
                </div>
            )}
        </div>
    );
};

export default Dropping;
