import React from 'react';
import './service.css';

const ServiceList = () => {
    const services = [
        { id: 1, name: "Oil Change", price: "₹500" },
        { id: 2, name: "Tire Rotation", price: "₹300" },
        { id: 3, name: "Scratch Removal", price: "₹400" },
        { id: 4, name: "Windowglass Damage", price: "₹200" },
        { id: 5, name: "Air Filter Replacement", price: "₹600" },
        { id: 6, name: "Check The Battery", price: "₹700" },
        { id: 7, name: "Check Lights", price: "₹250" },
    ];

    return (
        <div>

            <h2>Service Listings</h2>
            <h1>VehicleVerse Booking Portal</h1>

<table id="customers">
  <tr>
    <th>ID</th>
    <th>Services</th>
    <th>Price</th>
  </tr>
    {services.map(item =>(
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>
    ))}
</table>
           
        </div>
    );
};

export default ServiceList;
