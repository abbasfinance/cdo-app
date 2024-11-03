import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Adjust path as necessary
import TransferComponent from './components/Transfer'; // Adjust path as necessary

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transfer" element={<TransferComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
