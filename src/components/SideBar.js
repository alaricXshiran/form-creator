import React, { useState, useEffect } from 'react';

const SideBar = ({ onFormChange }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        onFormChange(formData);
    }, [formData, onFormChange]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddField = () => {
        const fieldKey = `${Object.keys(formData).length + 1}`;
        setFormData({ ...formData, [fieldKey]: '' });
    };

    return (
        <div className="sidebar">
            <a href="#home">
                <i className="bi bi-house-door"></i> Home
            </a>
            <form className="sidebar-form">
                {Object.keys(formData).length === 1 ? (
                    <h1>Title</h1>
                ) : (
                    Object.keys(formData).map((key) => (
                        <div className="form-group" key={key}>
                            <label htmlFor={key} hidden="hidden">{key}</label>
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                            />
                        </div>
                    ))
                )}
            </form>
            <div className="add-field">
                <button type="button" onClick={handleAddField}>
                    Add Field
                </button>
            </div>
        </div>
    );
};

export default SideBar;