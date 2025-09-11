# 📝 BlogNest – A Full-Stack Blogging Platform  

BlogNest is a **full-stack MERN application** where users can write, edit, and share blogs.  
It’s built with modern web technologies and demonstrates **authentication, CRUD operations, media storage, and responsive UI design**.  

### 👉 **Live Demo:** [BlogNest](https://blognest-nu.vercel.app/)  

---

## 📸 Preview  

![BlogNest Preview](https://res.cloudinary.com/dhhhr2skx/image/upload/v1757599789/blognest_ix30mq.png)

---

## ✨ Features  

- 📝 **CRUD Operations** – Create, edit, and delete blogs  
- 🔑 **Authentication & Authorization** – Secure login/signup via Clerk  
- 💬 **Comments** – Add and view comments on blogs  
- 📌 **Bookmarks** – Save your favorite blogs for later  
- 🌄 **Image Uploads** – Integrated with ImageKit for media storage  
- 🎨 **Responsive UI** – Styled with Tailwind CSS & animations  
- 🔔 **Notifications** – Integrated with React Toastify  

---

## ⚙️ Tech Stack  

### Frontend  
- React.js  
- Tailwind CSS  
- Clerk (Authentication)  
- React Router DOM  
- React-Toastify  

### Backend  
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- ImageKit (Media Storage)  

---

## 📦 Setup Instructions  

### Prerequisites  
- Node.js & npm installed  
- MongoDB Atlas account (or local MongoDB)  
- ImageKit account for image storage  
- Clerk account for authentication
- Emailjs account

#### 1. Clone the repo
```
git clone https://github.com/Piyush-20045/BlogNest.git
cd BlogNest
```

#### 2. Install dependencies for both frontend & backend
```
cd frontend && npm install
cd backend && npm install
```

#### 3. Create a .env file
- In backend :
```
MONGO_URI=mongodb+srv://example;faskdjfjhk&appName=BlogNest
PORT=5000
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/example
```
- In frontend :
```
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-key
VITE_EMAILJS_PUBLIC_KEY=your-emailjs-public-key
VITE_BACKEND_PORT=http://localhost:5000
```

#### 4. Run the app
- In Backend :
```
npm start
```
- In Frontend :
```
npm run dev
```

---

## 📁 Folder Structure
```
BlogNest/
├── backend/            
├── frontend/                           
├── README.md
└── ...
```

---

## 📚 What I Learned
- Gained hands-on experience with **CRUD operations** using REST API  
- Integrated **Clerk authentication** for secure and seamless login/signup  
- Implemented **ImageKit** for efficient image storage and delivery  
- Managed global state effectively with **Context API** 
---
## 🧑 Author
**Piyush Yadav**
- Twitter/X: [@piyush9436](https://x.com/Piyush9436)
- LinkedIn: [@piyushyadav](https://www.linkedin.com/in/piyush-yadav-a4b164260/)
