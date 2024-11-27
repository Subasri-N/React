// import React, { useState } from 'react';

// const BookingForm = () => {
//     const [formData, setFormData] = useState({ name: '', service: '', date: '' });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Booking Details:', formData);
//     };

//     return (
//         <div>
//             <h2>Book a Service</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <select style={{padding: '10px',marginBottom:'14px'}} name="service" value={formData.service} onChange={handleChange}>
//                     <option value="">Select a Service</option>
//                     <option value="Oil Change">Oil Change</option>
//                     <option value="Tire Rotation">Tire Rotation</option>
//                     <option value="Scratch Removal">Scratch Removal</option>
//                     <option value="Windowglass Damage">Windowglass Damage</option>
//                     <option value="Air Filter Replacement">Air Filter Replacement</option>
//                     <option value="Check The Battery">Check The Battery</option>
//                     <option value="Check Lights">Check Lights</option>
//                 </select>
//                 <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Book Service</button>
//             </form>
//         </div>
//     );
// };

// export default BookingForm;
// import React, { useState } from 'react';

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         service: '',
//         date: '',
//         vehicleType: '',
//         contactNumber: ''
//     });

//     const [submittedData, setSubmittedData] = useState(null); // Store submitted data

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmittedData(formData); // Set the submitted data to display it
//         setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Reset form fields after submission
//     };

//     const isFormValid = formData.name && formData.service && formData.date && formData.vehicleType && formData.contactNumber;

//     return (
//         <div>
//             <h2>Book a Service</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="vehicleType"
//                     placeholder="Vehicle Type"
//                     value={formData.vehicleType}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="contactNumber"
//                     placeholder="Contact Number"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                 />
//                 <select
//                     style={{ padding: '10px', marginBottom: '14px' }}
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                 >
//                     <option value="">Select a Service</option>
//                     <option value="Oil Change">Oil Change</option>
//                     <option value="Tire Rotation">Tire Rotation</option>
//                     <option value="Scratch Removal">Scratch Removal</option>
//                     <option value="Windowglass Damage">Windowglass Damage</option>
//                     <option value="Air Filter Replacement">Air Filter Replacement</option>
//                     <option value="Check The Battery">Check The Battery</option>
//                     <option value="Check Lights">Check Lights</option>
//                 </select>
//                 <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                 />
//                 <button type="submit" disabled={!isFormValid}>Book Service</button>
//             </form>

//             {/* Display the submitted data if available */}
//             {submittedData && (
//                 <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
//                     <h3>Submitted Booking Details</h3>
//                     <p><strong>Name:</strong> {submittedData.name}</p>
//                     <p><strong>Vehicle Type:</strong> {submittedData.vehicleType}</p>
//                     <p><strong>Contact Number:</strong> {submittedData.contactNumber}</p>
//                     <p><strong>Service:</strong> {submittedData.service}</p>
//                     <p><strong>Date:</strong> {submittedData.date}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookingForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         service: '',
//         date: '',
//         vehicleType: '',
//         contactNumber: ''
//     });

//     const [submittedData, setSubmittedData] = useState(null); // Store submitted data
//     const [error, setError] = useState(null); // Store any error

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/bookings', formData);
//             setSubmittedData(response.data); // Set the submitted data to display it
//             setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Reset form fields after submission
//             setError(null); // Clear error on success
//         } catch (err) {
//             console.error('Error submitting form:', err);
//             setError('Failed to submit the booking. Please try again.');
//         }
//     };

//     const isFormValid = formData.name && formData.service && formData.date && formData.vehicleType && formData.contactNumber;

//     return (
//         <div>
//             <h2>Book a Service</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="vehicleType"
//                     placeholder="Vehicle Type"
//                     value={formData.vehicleType}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="contactNumber"
//                     placeholder="Contact Number"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                 />
//                 <select
//                     style={{ padding: '10px', marginBottom: '14px' }}
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                 >
//                     <option value="">Select a Service</option>
//                     <option value="Oil Change">Oil Change</option>
//                     <option value="Tire Rotation">Tire Rotation</option>
//                     <option value="Scratch Removal">Scratch Removal</option>
//                     <option value="Windowglass Damage">Windowglass Damage</option>
//                     <option value="Air Filter Replacement">Air Filter Replacement</option>
//                     <option value="Check The Battery">Check The Battery</option>
//                     <option value="Check Lights">Check Lights</option>
//                 </select>
//                 <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                 />
//                 <button type="submit" disabled={!isFormValid}>Book Service</button>
//             </form>

//             {/* Display the submitted data if available */}
//             {submittedData && (
//                 <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
//                     <h3>Submitted Booking Details</h3>
//                     <p><strong>Name:</strong> {submittedData.name}</p>
//                     <p><strong>Vehicle Type:</strong> {submittedData.vehicleType}</p>
//                     <p><strong>Contact Number:</strong> {submittedData.contactNumber}</p>
//                     <p><strong>Service:</strong> {submittedData.service}</p>
//                     <p><strong>Date:</strong> {submittedData.date}</p>
//                 </div>
//             )}

//             {/* Display error message if any */}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default BookingForm;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         service: '',
//         date: '',
//         vehicleType: '',
//         contactNumber: ''
//     });
//     const [bookings, setBookings] = useState([]); // Store all bookings
//     const [editingBookingId, setEditingBookingId] = useState(null); // Store the ID of the booking being edited
//     const [error, setError] = useState(null); // Store any error

//     const apiUrl = 'http://localhost:8080/bookings'; // API endpoint

//     // Fetch all bookings on component mount
//     useEffect(() => {
//         fetchBookings();
//     }, []);

//     // Fetch bookings from the server
//     const fetchBookings = async () => {
//         try {
//             const response = await axios.get(apiUrl);
//             setBookings(response.data); // Set fetched bookings
//         } catch (error) {
//             console.error('Error fetching bookings:', error);
//             setError('Failed to load bookings.');
//         }
//     };

//     // Handle form input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission for creating or updating a booking
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (editingBookingId) {
//             // Update existing booking
//             try {
//                 const response = await axios.put(`${apiUrl}/${editingBookingId}`, formData);
//                 setBookings(bookings.map(booking => (booking.id === editingBookingId ? response.data : booking)));
//                 setEditingBookingId(null); // Reset after update
//                 setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Clear form
//                 setError(null); // Clear any error
//             } catch (error) {
//                 console.error('Error updating booking:', error);
//                 setError('Failed to update the booking. Please try again.');
//             }
//         } else {
//             // Create new booking
//             try {
//                 const response = await axios.post(apiUrl, formData);
//                 setBookings([...bookings, response.data]); // Add new booking to the list
//                 setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Clear form
//                 setError(null); // Clear any error
//             } catch (error) {
//                 console.error('Error creating booking:', error);
//                 setError('Failed to create the booking. Please try again.');
//             }
//         }
//     };

//     // Handle editing a booking
//     const handleEdit = (booking) => {
//         setFormData({
//             name: booking.name,
//             service: booking.service,
//             date: booking.date,
//             vehicleType: booking.vehicleType,
//             contactNumber: booking.contactNumber
//         });
//         setEditingBookingId(booking.id); // Set the booking ID to be edited
//     };

//     // Handle deleting a booking
//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${apiUrl}/${id}`);
//             setBookings(bookings.filter(booking => booking.id !== id)); // Remove the deleted booking from the list
//         } catch (error) {
//             console.error('Error deleting booking:', error);
//             setError('Failed to delete the booking.');
//         }
//     };

//     // Form validation
//     const isFormValid = formData.name && formData.service && formData.date && formData.vehicleType && formData.contactNumber;

//     return (
//         <div>
//             <h2>{editingBookingId ? 'Edit Booking' : 'Book a Service'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="vehicleType"
//                     placeholder="Vehicle Type"
//                     value={formData.vehicleType}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="contactNumber"
//                     placeholder="Contact Number"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                 />
//                 <select
//                     style={{ padding: '10px', marginBottom: '14px' }}
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                 >
//                     <option value="">Select a Service</option>
//                     <option value="Oil Change">Oil Change</option>
//                     <option value="Tire Rotation">Tire Rotation</option>
//                     <option value="Scratch Removal">Scratch Removal</option>
//                     <option value="Windowglass Damage">Windowglass Damage</option>
//                     <option value="Air Filter Replacement">Air Filter Replacement</option>
//                     <option value="Check The Battery">Check The Battery</option>
//                     <option value="Check Lights">Check Lights</option>
//                 </select>
//                 <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                 />
//                 <button type="submit" disabled={!isFormValid}>
//                     {editingBookingId ? 'Update Booking' : 'Book Service'}
//                 </button>
//             </form>

//             {/* Display error message if any */}
//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             {/* List all bookings */}
//             <h3>Bookings List</h3>
//             <ul>
//                 {bookings.map(booking => (
//                     <li key={booking.id} style={{ marginBottom: '20px' }}>
//                         <p><strong>Name:</strong> {booking.name}</p>
//                         <p><strong>Vehicle Type:</strong> {booking.vehicleType}</p>
//                         <p><strong>Contact Number:</strong> {booking.contactNumber}</p>
//                         <p><strong>Service:</strong> {booking.service}</p>
//                         <p><strong>Date:</strong> {booking.date}</p>
//                         <button onClick={() => handleEdit(booking)} style={{ marginRight: '10px' }}>Edit</button>
//                         <button onClick={() => handleDelete(booking.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BookingForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         service: '',
//         date: '',
//         vehicleType: '',
//         contactNumber: ''
//     });
//     const [bookings, setBookings] = useState([]); // Store all bookings
//     const [editingBookingId, setEditingBookingId] = useState(null); // Store the ID of the booking being edited
//     const [error, setError] = useState(null); // Store any error

//     const apiUrl = 'http://localhost:8080/bookings'; // API endpoint

//     // Fetch all bookings on component mount
//     useEffect(() => {
//         fetchBookings();
//     }, []);

//     // Fetch bookings from the server
//     const fetchBookings = async () => {
//         try {
//             const response = await axios.get(apiUrl);
//             setBookings(response.data); // Set fetched bookings
//         } catch (error) {
//             console.error('Error fetching bookings:', error);
//             setError('Failed to load bookings.');
//         }
//     };

//     // Handle form input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission for creating or updating a booking
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (editingBookingId) {
//             // Update existing booking
//             try {
//                 const response = await axios.put(`${apiUrl}/${editingBookingId}`, formData);
//                 setBookings(bookings.map(booking => (booking.id === editingBookingId ? response.data : booking)));
//                 setEditingBookingId(null); // Reset after update
//                 setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Clear form
//                 setError(null); // Clear any error
//             } catch (error) {
//                 console.error('Error updating booking:', error);
//                 setError('Failed to update the booking. Please try again.');
//             }
//         } else {
//             // Create new booking
//             try {
//                 const response = await axios.post(apiUrl, formData);
//                 setBookings([...bookings, response.data]); // Add new booking to the list
//                 setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Clear form
//                 setError(null); // Clear any error
//             } catch (error) {
//                 console.error('Error creating booking:', error);
//                 setError('Failed to create the booking. Please try again.');
//             }
//         }
//     };

//     // Handle editing a booking
//     const handleEdit = (booking) => {
//         setFormData({
//             name: booking.name,
//             service: booking.service,
//             date: booking.date,
//             vehicleType: booking.vehicleType,
//             contactNumber: booking.contactNumber
//         });
//         setEditingBookingId(booking.id); // Set the booking ID to be edited
//     };

//     // Handle deleting a booking
//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`${apiUrl}/${id}`);
//             setBookings(bookings.filter(booking => booking.id !== id)); // Remove the deleted booking from the list
//         } catch (error) {
//             console.error('Error deleting booking:', error);
//             setError('Failed to delete the booking.');
//         }
//     };

//     // Form validation
//     const isFormValid = formData.name && formData.service && formData.date && formData.vehicleType && formData.contactNumber;

//     return (
//         <div>
//             <h2>{editingBookingId ? 'Edit Booking' : 'Book a Service'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="vehicleType"
//                     placeholder="Vehicle Type"
//                     value={formData.vehicleType}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="contactNumber"
//                     placeholder="Contact Number"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                 />
//                 <select
//                     style={{ padding: '10px', marginBottom: '14px' }}
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                 >
//                     <option value="">Select a Service</option>
//                     <option value="Oil Change">Oil Change</option>
//                     <option value="Tire Rotation">Tire Rotation</option>
//                     <option value="Scratch Removal">Scratch Removal</option>
//                     <option value="Windowglass Damage">Windowglass Damage</option>
//                     <option value="Air Filter Replacement">Air Filter Replacement</option>
//                     <option value="Check The Battery">Check The Battery</option>
//                     <option value="Check Lights">Check Lights</option>
//                 </select>
//                 <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                 />
//                 <button type="submit" disabled={!isFormValid}>
//                     {editingBookingId ? 'Update Booking' : 'Book Service'}
//                 </button>
//             </form>

//             {/* Display error message if any */}
//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             {/* List all bookings */}
//             <h3>Bookings List</h3>
//             <ul>
//                 {bookings.map(booking => (
//                     <li key={booking.id} style={{ marginBottom: '20px' }}>
//                         <p><strong>Name:</strong> {booking.name}</p>
//                         <p><strong>Vehicle Type:</strong> {booking.vehicleType}</p>
//                         <p><strong>Contact Number:</strong> {booking.contactNumber}</p>
//                         <p><strong>Service:</strong> {booking.service}</p>
//                         <p><strong>Date:</strong> {booking.date}</p>
//                         {/* Green "Edit" button and Red "Delete" button */}
//                         <button
//                             onClick={() => handleEdit(booking)}
//                             style={{ marginRight: '10px', backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
//                         >
//                             Edit
//                         </button>
//                         <button
//                             onClick={() => handleDelete(booking.id)}
//                             style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BookingForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        service: '',
        date: '',
        vehicleType: '',
        contactNumber: ''
    });
    const [bookings, setBookings] = useState([]); // Store all bookings
    const [editingBookingId, setEditingBookingId] = useState(null); // Store the ID of the booking being edited
    const [error, setError] = useState(null); // Store any error

    const apiUrl = 'http://localhost:8080/bookings'; // API endpoint

    // Fetch all bookings on component mount
    useEffect(() => {
        fetchBookings();
    }, []);

    // Fetch bookings from the server
    const fetchBookings = async () => {
        try {
            const response = await axios.get(apiUrl);
            setBookings(response.data); // Set fetched bookings
        } catch (error) {
            console.error('Error fetching bookings:', error);
            setError('Failed to load bookings.');
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission for creating or updating a booking
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingBookingId) {
            // Update existing booking
            try {
                const response = await axios.put(`${apiUrl}/${editingBookingId}`, formData);
                setBookings(bookings.map(booking => (booking.id === editingBookingId ? response.data : booking)));
                setEditingBookingId(null); // Reset after update
                setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Clear form
                setError(null); // Clear any error
            } catch (error) {
                console.error('Error updating booking:', error);
                setError('Failed to update the booking. Please try again.');
            }
        } else {
            // Create new booking
            try {
                const response = await axios.post(apiUrl, formData);
                setBookings([...bookings, response.data]); // Add new booking to the list
                setFormData({ name: '', service: '', date: '', vehicleType: '', contactNumber: '' }); // Clear form
                setError(null); // Clear any error
            } catch (error) {
                console.error('Error creating booking:', error);
                setError('Failed to create the booking. Please try again.');
            }
        }
    };

    // Handle editing a booking
    const handleEdit = (booking) => {
        setFormData({
            name: booking.name,
            service: booking.service,
            date: booking.date,
            vehicleType: booking.vehicleType,
            contactNumber: booking.contactNumber
        });
        setEditingBookingId(booking.id); // Set the booking ID to be edited
    };

    // Handle deleting a booking
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiUrl}/${id}`);
            setBookings(bookings.filter(booking => booking.id !== id)); // Remove the deleted booking from the list
        } catch (error) {
            console.error('Error deleting booking:', error);
            setError('Failed to delete the booking.');
        }
    };

    // Form validation
    const isFormValid = formData.name && formData.service && formData.date && formData.vehicleType && formData.contactNumber;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <h2>{editingBookingId ? 'Edit Booking' : 'Book a Service'}</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <input
                    type="text"
                    name="vehicleType"
                    placeholder="Vehicle Type"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <select
                    style={{ padding: '10px', marginBottom: '14px', width: '100%' }}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="">Select a Service</option>
                    <option value="Oil Change">Oil Change</option>
                    <option value="Tire Rotation">Tire Rotation</option>
                    <option value="Scratch Removal">Scratch Removal</option>
                    <option value="Windowglass Damage">Windowglass Damage</option>
                    <option value="Air Filter Replacement">Air Filter Replacement</option>
                    <option value="Check The Battery">Check The Battery</option>
                    <option value="Check Lights">Check Lights</option>
                </select>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <button type="submit" disabled={!isFormValid} style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
                    {editingBookingId ? 'Update Booking' : 'Book Service'}
                </button>
            </form>

            {/* Display error message if any */}
            {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

            {/* List all bookings */}
            <h3 style={{ marginTop: '30px' }}>Bookings List</h3>
            <ul style={{ listStyle: 'none', padding: 0, width: '300px' }}>
                {bookings.map(booking => (
                    <li key={booking.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
                        <p><strong>Name:</strong> {booking.name}</p>
                        <p><strong>Vehicle Type:</strong> {booking.vehicleType}</p>
                        <p><strong>Contact Number:</strong> {booking.contactNumber}</p>
                        <p><strong>Service:</strong> {booking.service}</p>
                        <p><strong>Date:</strong> {booking.date}</p>
                        {/* Green "Edit" button and Red "Delete" button */}
                        <button
                            onClick={() => handleEdit(booking)}
                            style={{ marginRight: '10px', backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(booking.id)}
                            style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingForm;
