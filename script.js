// script.js

// Basic JavaScript functionality

function displayCurrentDateTime() {
    const now = new Date();
    const formattedDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', formattedDateTime);
}

displayCurrentDateTime();