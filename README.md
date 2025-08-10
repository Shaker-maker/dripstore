# Dripstore

Dripstore is a Django-based e-commerce platform for selling clothing and accessories.  
This project is part of my learning journey in **CS50's Introduction to Databases with SQL** by Harvard.  
So far, I have completed the **querying** challenges for _Cyberchase_ and _36 Views_ datasets.  

## Features
- User authentication (sign up, login, logout)
- Browse clothing items
- Shopping cart management
- Checkout process

## Tech Stack
- Python 3
- Django
- SQLite (development database)
- HTML, CSS, JavaScript

## Project Structure
accounts/ - user authentication
cart/ - cart functionality
store/ - product listings and shop logic
static/ - CSS, JS, images
templates/ - HTML templates
dripstore/ - project configuration


## Installation
```bash
git clone <repo-url>
cd dripstore-main
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

