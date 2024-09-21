import React from 'react';

const OutputForm = ({ formData }) => {
    return (
        <div className="output-form">
            <h3>Form Output</h3>
            <ul>
                {Object.keys(formData).map((key) => (
                    <li key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {formData[key]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OutputForm;