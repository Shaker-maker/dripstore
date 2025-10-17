# Dripstore

Dripstore is a Django-based e-commerce platform for selling clothing and accessories.  
This project is part of my learning journey in **CS50's Introduction to Databases with SQL** by Harvard.  
So far, I have completed the **querying** challenges for _Cyberchase_ and _36 Views_ datasets.  

## Features
- User authentication (sign up, login, logout)
- Browse clothing items by category or all products
- View detailed product pages with images and descriptions
- Category navigation on homepage
- Product search by title (global & within category)
- Filter products by price range
- Persistent search & filter values when navigating categories
- Shopping cart management (upcoming)
- Checkout process (upcoming)

## Tech Stack
- Python 3
- Django
- SQLite (development database)
- HTML, CSS, JavaScript

## Project Structure
- **accounts/** – user authentication
- **cart/** – cart functionality
- **store/** – product listings and shop logic
- **static/** – CSS, JS, images
- **templates/** – HTML templates
- **dripstore/** – project configuration

## Progress
### ✅ Completed
- **Accounts app**: Full authentication system with registration, login, logout.
- **Store app**: 
  - Models for `Category` and `Product` with unique slugs
  - Admin panel with search, filters, and prepopulated slugs
  - Product browsing by category
  - Product detail view
  - Category navigation on homepage
  - Image uploads for products
  - Product search by title
  - Price range filtering
  - Persistent search/filter values when switching categories

### 🔜 Next Steps
- Implement shopping cart and checkout
- Style with Tailwind CSS for a **kith.com**-like design

## Installation
```bash
git clone <repo-url>
cd dripstore-main
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
