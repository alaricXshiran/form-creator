import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const SideBar = ({ onFormChange }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [newField, setNewField] = useState('');

    useEffect(() => {
        onFormChange(formData);
    }, [formData, onFormChange]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddField = () => {
        if (newField.trim() !== '') {
            setFormData({ ...formData, [newField]: '' });
            setNewField('');
        }
    };

    return (
        <div className="sidebar">
            <a href="#home">
                <i className="bi bi-house-door"></i> Home
            </a>
            <form className="sidebar-form">
                {Object.keys(formData).map((key) => (
                    <div className="form-group" key={key}>
                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </form>
            <div className="add-field">
                <input
                    type="text"
                    value={newField}
                    onChange={(e) => setNewField(e.target.value)}
                    placeholder="New field name"
                />
                <button type="button" onClick={handleAddField}>
                    Add Field
                </button>
            </div>
        </div>
    );
};

export default SideBar;