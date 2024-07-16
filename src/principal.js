import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import App from './App';

const MainApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adicionar-video" element={<App />} />
            </Routes>
        </Router>
    );
};

export default MainApp;
