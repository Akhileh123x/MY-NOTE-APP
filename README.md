# 📝 My Note App

A full-stack note-taking web application built using the MERN stack. This application allows users to create, view, edit, and delete notes with a clean and responsive user interface.

## 🚀 Features

- Create new notes
- View all saved notes
- Edit existing notes
- Delete notes
- Responsive design for mobile and desktop
- Fast frontend built with React + Vite
- REST API integration
- MongoDB database storage
- Clean modern UI

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools
- Git
- GitHub
- Postman

## 📂 Project Structure

```bash
MY-NOTE-APP/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Akhileh123x/MY-NOTE-APP.git
```

### Move into Project

```bash
cd MY-NOTE-APP
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the server folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notesdb
PORT=5000
```

## ▶️ Run Project

### Start Backend

```bash
cd server
npm start
```

### Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

Backend runs at:

```bash
http://localhost:5000
```

## API Endpoints

### Get All Notes

```http
GET /api/notes
```

### Create Note

```http
POST /api/notes
```

Example request body:

```json
{
  "title": "Meeting Notes",
  "content": "Discuss MERN project"
}
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

## 💡 Future Improvements

- User authentication
- Dark mode
- Search notes
- Categories/tags
- Rich text editor
- Pin important notes
- Archive notes

## 👨‍💻 Author

**Akhilesh**

GitHub: https://github.com/Akhileh123x

## ⭐ Support

If you like this project, give this repository a star ⭐
