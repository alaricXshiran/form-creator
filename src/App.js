import React, { useState } from 'react';
import SideBar from './components/SideBar';
import OutputForm from './components/OutputForm';
import './App.css';

const App = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleFormChange = (data) => {
        setFormData(data);
    };

    return (
        <div className="app-container">
            <SideBar onFormChange={handleFormChange} />
            <OutputForm formData={formData} /> {/* Pass formData to OutputForm */}
        </div>
    );
};

export default App;
