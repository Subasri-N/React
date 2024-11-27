import React from 'react';

const Notifications = () => {
    const notifications = [
        { id: 1, message: "Your oil change appointment is tomorrow." },
        { id: 2, message: "Tire rotation scheduled for next week." },
        { id: 3, message: "Your Scratches would be rectified after two days." },
        { id: 4, message: "A technician will assess the window glass damage at your home tomorrow." },
        { id: 5, message: "Your air filter replacement is scheduled for today evening" },
        { id: 6, message: " It's time to check the battery for optimal performance." },
        { id: 7, message: "Alert: A light check is recommended for safety." },
    ];

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
