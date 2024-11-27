import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import ServiceList from './components/ServiceList';
import BookingForm from './components/BookingForm';
import OrderTracking from './components/OrderTracking';
import Notifications from './components/Notifications';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Layout />}>
                    <Route path="services" element={<ServiceList />} />
                    <Route path="bookings" element={<BookingForm />} />
                    <Route path="orders" element={<OrderTracking />} />
                    <Route path="notifications" element={<Notifications />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
