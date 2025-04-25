const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure the uploads directory exists
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);  // Store files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        // Set the file name to a unique timestamp with the file extension
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Middleware to handle video file upload
app.post('/api/videos/upload', upload.single('video'), (req, res) => {
    // If no file is uploaded, return an error
    if (!req.file) {
        return res.status(400).json({ error: 'No video file uploaded' });
    }

    // Log the uploaded file for debugging purposes
    console.log('Uploaded video file:', req.file);

    // Simulate storing file metadata in a database (e.g., filename, size, etc.)
    // You can use a database like PostgreSQL here, but for now, we return a success response
    res.status(200).json({
        message: 'Video uploaded successfully',
        file: req.file
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});