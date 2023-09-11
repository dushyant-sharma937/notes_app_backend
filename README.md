# Notes App Back-End

This is the back-end repository for a Flutter notes app that uses MongoDB as its database and Node.js for the server. This README will guide you through setting up and running the back-end server.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js: [Installation Guide](https://nodejs.org/)
- MongoDB: [Installation Guide](https://docs.mongodb.com/manual/installation/)

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/flutter-backend-notes-app.git
   ```

2. Change to the project directory:

   ```bash
   cd flutter-backend-notes-app
   ```

3. Install Node.js server dependencies:

   ```bash
   npm install
   ```

4. Configure MongoDB:

   - Start your MongoDB server.
   - Create a new MongoDB database and collection for this app.

5. Configure environment variables:

   - Create a `.env` file in the root directory of the project.
   - Define the following environment variables in the `.env` file:

     ```
     MONGODB_URI=your_mongodb_uri
     PORT=your_server_port
     ```

     Replace `your_mongodb_uri` with the MongoDB connection URI and `your_server_port` with the desired server port.

6. Start the Node.js server:

   ```bash
   npm start
   ```

The back-end server is now up and running.

## API Endpoints

### Get All Notes

- **Endpoint:** `/api/notes`
- **Method:** GET
- **Description:** Get a list of all notes from the MongoDB database.

### Create a Note

- **Endpoint:** `/api/notes`
- **Method:** POST
- **Description:** Create a new note in the MongoDB database.
- **Request Body:**

  ```json
  {
    "title": "Your Note Title",
    "content": "Your Note Content"
  }
  ```

### Update a Note

- **Endpoint:** `/api/notes/:noteId`
- **Method:** PUT
- **Description:** Update an existing note in the MongoDB database.
- **Request Body:**

  ```json
  {
    "title": "Updated Note Title",
    "content": "Updated Note Content"
  }
  ```

### Delete a Note

- **Endpoint:** `/api/notes/:noteId`
- **Method:** DELETE
- **Description:** Delete a note from the MongoDB database.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Please follow the [code of conduct](CODE_OF_CONDUCT.md) and [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Node.js and MongoDB communities for their excellent documentation and support.

---

You've successfully set up the back-end server for your Flutter notes app. If you have any questions or encounter any issues, please don't hesitate to reach out for assistance.
