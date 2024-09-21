import React from 'react';

const OutputForm = ({ formData }) => {
    return (
        <div className="output-form">
            
            <ul>
                {Object.keys(formData).map((key) => (
                    <li key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1) === "1" ? (
                            <h1>{formData[key]}</h1>
                        ) : (
                            formData[key]
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OutputForm;
