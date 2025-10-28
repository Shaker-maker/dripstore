# 🛍️ Dripstore — Modern Clothing E-Commerce Web App

Dripstore is a **full-stack e-commerce platform** for modern fashion brands — designed to deliver a fast, secure, and elegant shopping experience.  
It combines a powerful **Django REST API backend** with a sleek **React + TypeScript frontend** powered by Tailwind CSS and ShadCN UI components.

---

## 🌐 Live Demo
🔗 [https://dripstore.vercel.app](https://dripstore.vercel.app)  
(Backend hosted on Render / Railway — PostgreSQL database)

---

## 🧩 Project Overview

### ✨ Features
- 🔐 **User Authentication & Email Verification**  
  Secure registration, login, logout, and email confirmation via Django + JWT.

- 🧢 **Product Management**  
  Admins can add, update, and delete clothing items with categories, slugs, and images.

- 🛒 **Cart & Checkout System**  
  Users can add/remove products, view totals, and checkout seamlessly.

- 📦 **Order Tracking**  
  Orders are stored and tracked in real-time via the backend API.

- 💳 **Payment Integration**  
  Stripe (or PayPal) integration for real payments (sandbox-ready).

- 🌙 **Responsive UI**  
  Built with TailwindCSS and ShadCN for a premium mobile and desktop experience.

---

## 🧠 Tech Stack

### **Frontend**
| Technology | Description |
|-------------|--------------|
| React + TypeScript | Component-based frontend |
| Tailwind CSS | Modern utility-first styling |
| ShadCN/UI | Accessible, elegant UI components |
| Vite | Lightning-fast build tool |

### **Backend**
| Technology | Description |
|-------------|--------------|
| Django | Python web framework |
| Django REST Framework | API creation and serialization |
| PostgreSQL | Relational database |
| JWT | Secure authentication |
| Cloudinary | Image storage |
| Celery + Redis | Async tasks (email, order notifications) |

---

## ⚙️ Project Structure
```bash
dripstore/
│
├── backend/                     # Django backend
│   ├── dripstore_backend/       # Core project files
│   ├── store/                   # Store app (products, cart, orders)
│   ├── users/                   # User management and authentication
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/          # UI components
│   │   ├── pages/               # Routes and views
│   │   ├── contexts/            # App context (auth, cart)
│   │   └── data/                # Static product data (fallback)
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
└── README.md


🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/Shaker-maker/dripstore.git
cd dripstore

2️⃣ Backend Setup
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver


Backend runs on → http://127.0.0.1:8000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on → http://localhost:5173

🧩 API Endpoints (Sample)
Endpoint	Method	Description
/api/products/	GET	List all products
/api/products/<slug>/	GET	Retrieve product details
/api/cart/	GET/POST	View or add to cart
/api/orders/	POST	Create new order
/api/auth/register/	POST	Register user
/api/auth/login/	POST	Login user
/api/auth/logout/	POST	Logout user
🧠 Database Schema

Users Table

id, username, email, password, is_verified

Products Table

id, name, slug, price, description, image_url, category

Orders Table

id, user_id, total, status, created_at

OrderItems Table

id, order_id, product_id, quantity

📦 Deployment

Frontend → Vercel

Backend → Render
 or Railway

Database → PostgreSQL (Render or Supabase)

Media Storage → Cloudinary

🧰 Environment Variables

Create a .env file in both /backend and /frontend directories.

Backend .env
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=postgres://user:password@localhost:5432/dripstore
CLOUDINARY_URL=your_cloudinary_url
EMAIL_HOST_USER=your_email
EMAIL_HOST_PASSWORD=your_password

Frontend .env
VITE_API_URL=http://127.0.0.1:8000/api

📈 Future Enhancements

 Wishlist and favorites

 Product reviews and ratings

 Admin dashboard (React-based)

 Mobile app version (React Native)

 AI-powered recommendations

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to change.

🧑‍💻 Author

👤 Alvin Wainaina (Shaker-maker)
Building secure, aesthetic, and scalable web apps.

🌍 GitHub

💼 LinkedIn

📧 Email

🪶 License

This project is licensed under the MIT License — free to use and modify.
