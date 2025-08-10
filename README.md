🍲 Recipe App (MERN Stack) :
This is a recipe sharing web app where anyone can create an account, log in, and post their favorite recipes with pictures. You can browse all recipes, search for specific ones, and edit or delete your own posts. The app works on both mobile and desktop, making it easy to cook along anywhere. It’s built using the MERN stack (MongoDB, Express, React, Node) with secure login and image upload features

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
git clone https://github.com/Sumeetbonde/Food-recipe-app.git
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

⚡ From Run to Deploy
1️⃣ Run Locally
bash
Copy
Edit
# Clone project
git clone https://github.com/your-username/recipe-app.git
cd recipe-app

# Backend
cd backend && npm install
# .env → PORT, MONGO_URI, JWT_SECRET
npm start

# Frontend
cd ../frontend && npm install
# .env → REACT_APP_API_URL=http://localhost:5000
npm start
2️⃣ Deploy Backend (Render)
Push code to GitHub.

Go to Render → New Web Service.

Connect your repo → Select backend folder as root.

Set environment variables (PORT, MONGO_URI, JWT_SECRET).

Deploy → Copy the deployed backend URL.

3️⃣ Deploy Frontend (Netlify)
Go to Netlify → New Site from Git.

Connect your repo → Select frontend folder as root.

Set environment variable:

ini
Copy
Edit
REACT_APP_API_URL=your_render_backend_url
Deploy → Your live site link will be ready.

✅ Done!
Backend running on Render.
Frontend running on Netlify.
Users can access your app live.

📜 License
MIT License — Free to use.

