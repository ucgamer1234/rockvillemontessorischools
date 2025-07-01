const express = require('express');
const router = express.Router();

// Endpoint to handle admission form submission
router.post('/submit', (req, res) => {
    const admissionData = req.body;

    // Here you would typically handle the admission data,
    // such as saving it to a database or processing it further.

    // For now, we'll just send a success response.
    res.status(200).json({ message: 'Admission form submitted successfully', data: admissionData });
});

// Export the router
module.exports = router;