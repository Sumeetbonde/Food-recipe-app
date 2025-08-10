🍲 Recipe App (MERN Stack)
A full-stack recipe management application built with MongoDB, Express.js, React.js, and Node.js.
Users can add, view, edit, delete, and search recipes with images.

🚀 Features
🔐 Authentication (Sign up / Login with JWT)

📜 CRUD for recipes (Create, Read, Update, Delete)

🖼 Image Uploads (Multer)

🔍 Search & Filter recipes

📱 Responsive UI (Mobile-friendly)

☁ Cloud Database (MongoDB Atlas)

🛠 Tech Stack
Frontend: React.js, Axios, React Router DOM, Tailwind CSS
Backend: Node.js, Express.js, Multer, JWT, MongoDB, Mongoose

📦 Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file inside backend:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend:

bash
Copy
Edit
npm start
3️⃣ Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
Create a .env file inside frontend:

env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Start the frontend:

bash
Copy
Edit
npm start
4️⃣ Project Structure
bash
Copy
Edit
recipe-app/
│
├── backend/
│   ├── models/       # Database schemas
│   ├── routes/       # API endpoints
│   ├── middleware/   # Auth & file upload handling
│   ├── uploads/      # Recipe images
│   ├── server.js     # Backend entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Pages
│   │   ├── App.js
5️⃣ API Endpoints
Method	Endpoint	Action
POST	/api/auth/signup	Register user
POST	/api/auth/login	Login user
GET	/api/recipe	Get all recipes
POST	/api/recipe	Add recipe
PUT	/api/recipe/:id	Update recipe
DELETE	/api/recipe/:id	Delete recipe

6️⃣ How to Use
Sign up or Login to your account.

Add recipes with title, ingredients, instructions, and image.

Search for recipes using the search bar.

Edit or Delete recipes if needed.

7️⃣ Deployment
Backend: Render / Railway / Heroku

Frontend: Netlify / Vercel

Make sure to update REACT_APP_API_URL in frontend .env with deployed backend URL.

📜 License
MIT License — Free to use.
