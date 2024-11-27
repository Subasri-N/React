// import React from 'react';
// import './order.css';

//  const OrderTracking = () => {
//      const orders = [
//          { id: 1, service: "Oil Change", status: "Completed" },
//          { id: 2, service: "Tire Rotation", status: "In Progress" },
//          { id: 3, service: "Scratch Removal", status: "Processing" },
//          { id: 4, service: "Windowglass Damage", status: "Reported" },
//          { id: 5, service: "Air Filter Replacement", status: "Pending" },
//          { id: 6, service: "Check The Battery", status: "Shipped" },
//          { id: 7, service: "Check Lights", status: "Scheduled" },
//      ];

//     return (
//         <div>
//             <h2>Order Tracking</h2>
//             <h1>VehicleVerse Booking Portal</h1>

// <table id="customers">
//   <tr>
//     <th>ID</th>
//     <th>Services</th>
//     <th>Status</th>
//   </tr>
//     {orders.map(item =>(
//         <tr>
//             <td>{item.id}</td>
//             <td>{item.service}</td>
//             <td>{item.status}</td>
//         </tr>
//     ))}
// </table>
//         </div>
//     );
// };

// export default OrderTracking;
import React from 'react';
import './order.css';

const OrderTracking = () => {
    const orders = [
        { id: 1, service: "Oil Change", status: "Completed" },
        { id: 2, service: "Tire Rotation", status: "In Progress" },
        { id: 3, service: "Scratch Removal", status: "Processing" },
        { id: 4, service: "Windowglass Damage", status: "Reported" },
        { id: 5, service: "Air Filter Replacement", status: "Pending" },
        { id: 6, service: "Check The Battery", status: "Shipped" },
        { id: 7, service: "Check Lights", status: "Scheduled" },
    ];

    return (
        <div>
            <h2>Order Tracking</h2>
            <h1>VehicleVerse Booking Portal</h1>
            {orders.length > 0 ? (
                <table id="customers">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Services</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.service}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No orders found</p>  
            )}
        </div>
    );
};

export default OrderTracking;
