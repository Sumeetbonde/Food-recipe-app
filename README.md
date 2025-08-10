🍲 Recipe App (MERN Stack)
A full-stack recipe management app built using MongoDB, Express.js, React.js, Node.js.
Users can add, view, edit, delete, and search recipes with images.

🚀 Features
🔐 User Sign up / Login (JWT Auth)

📜 CRUD recipes with images

🔍 Search & filter

📱 Responsive design

☁ MongoDB Atlas

🛠 Tech Stack
Frontend: React.js, Axios, React Router DOM, Tailwind CSS
Backend: Node.js, Express.js, Multer, JWT, MongoDB, Mongoose

📦 Setup
bash
Copy
Edit
# Clone repo
git clone https://github.com/your-username/recipe-app.git
cd recipe-app

# Backend setup
cd backend && npm install
# Create .env with PORT, MONGO_URI, JWT_SECRET
npm start

# Frontend setup
cd ../frontend && npm install
# Create .env with REACT_APP_API_URL
npm start
🔗 API
Method	Endpoint	Action
POST	/api/auth/signup	Register
POST	/api/auth/login	Login
GET	/api/recipe	Get recipes
POST	/api/recipe	Create recipe
PUT	/api/recipe/:id	Update recipe
DELETE	/api/recipe/:id	Delete recipe

📜 License
MIT License — Free to use.

