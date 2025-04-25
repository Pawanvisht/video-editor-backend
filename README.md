# Video Editor Backend

This is a backend API for a video editing platform built using Node.js, Express, and PostgreSQL. The project allows users to upload videos, trim, add subtitles, and render the final video. FFmpeg is used to perform video processing operations.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)

## Technologies Used

- **Node.js**: JavaScript runtime for the backend
- **Express.js**: Web framework for building the API
- **PostgreSQL**: Relational database to store video metadata
- **Prisma ORM**: Used for database interactions
- **FFmpeg**: Open-source tool for video processing
- **Multer**: Middleware for handling file uploads
- **BullMQ / Redis** (Optional): Used for background rendering jobs
- **Swagger / Postman** (Optional): For API documentation

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/video-editor-backend.git
   cd video-editor-backend
Install dependencies:

bash
Copy
Edit
npm install
Configure your environment variables:

Create a .env file in the project root with the following variables:

bash
Copy
Edit
DATABASE_URL=postgresql://username:password@localhost:5432/video_editor_db
Replace username, password, and video_editor_db with your database credentials.

Start the project:

bash
Copy
Edit
npm start
Ensure PostgreSQL is running:

Make sure that your PostgreSQL instance is running locally or remotely. You can use pgAdmin to manage your PostgreSQL database.

API Endpoints
1. Upload Video
POST /api/videos/upload

Accepts a video file for upload (e.g., .mp4, .mov).

Stores metadata in the database.

Example:

Request: POST http://localhost:3000/api/videos/upload

Body: Form-data containing the video file

2. Trim Video
POST /api/videos/:id/trim

Accepts start and end timestamps for trimming the video.

Uses FFmpeg to create a trimmed version.

3. Add Subtitles
POST /api/videos/:id/subtitles

Accepts subtitle text and start/end times.

Uses FFmpeg to overlay the subtitles onto the video.

4. Render Final Video
POST /api/videos/:id/render

Combines all changes (trimming, subtitles, etc.) into one final video.

Returns the rendered video.

5. Download Final Video
GET /api/videos/:id/download

Returns the final rendered video file for download.

Testing the API
You can test the API using Postman or curl.

Example curl command to upload a video:

bash
Copy
Edit
curl -X POST -F "video=@path-to-your-video-file" http://localhost:3000/api/videos/upload
