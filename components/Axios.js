// const axios = require('axios');

// // Data for booking vehicle service
// const bookingData = {
//   vehicleType: 'Car', // Could be 'Car', 'Bike', 'Truck', etc.
//   serviceType: 'Oil Change', // Example service
//   bookingDate: '2024-10-10', // Date for service
//   bookingTime: '10:30 AM', // Time for service
//   location: '123 Main Street, Chennai', // Service location
//   customerName: 'John Doe', // Customer's name
//   contactNumber: '9876543210' // Customer's contact number
// };

// // API Endpoint URL (assuming this is the service URL for booking)
// const apiURL = 'https://example.com/api/book-service';

// // Function to send booking request
// function bookService(bookingData) {
//   axios.post(apiURL, bookingData)
//     .then(response => {
//       console.log('Booking Successful:', response.data);
//     })
//     .catch(error => {
//       console.error('Error in booking:', error.response ? error.response.data : error.message);
//     });
// }

// // Trigger the booking
// bookService(bookingData);
const axios = require('axios');

// Data for booking vehicle service
const bookingData = {
  vehicleType: 'Car', // Could be 'Car', 'Bike', 'Truck', etc.
  serviceType: 'Oil Change', // Example service
  bookingDate: '2024-10-10', // Date for service
  bookingTime: '10:30 AM', // Time for service
  location: '123 Main Street, Chennai', // Service location
  customerName: 'John Doe', // Customer's name
  contactNumber: '9876543210' // Customer's contact number
};

// API Endpoint URL (assuming this is the service URL for booking)
const apiURL = 'https://example.com/api/book-service';

// Function to send booking request
function bookService(bookingData) {
  axios.post(apiURL, bookingData)
    .then(response => {
      console.log('Booking Successful:', response.data);
    })
    .catch(error => {
      console.error('Error in booking:', error.response ? error.response.data : error.message);
    });
}

// Trigger the booking
bookService(bookingData);
