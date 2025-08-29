# 📦 Subscription Tracker API

A simple and efficient API to manage and track recurring subscriptions.  
Built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features
- Add, update, and delete subscriptions  
- Track renewal dates and next billing cycles  
- Automatic reminders for upcoming payments  
- User authentication (JWT-based)  
- Secure MongoDB Atlas integration  

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Environment Management:** dotenv  

---

📡 API Endpoints
🔑 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user & get JWT
📜 Subscriptions
Method	Endpoint	Description
GET	/api/subscriptions	Get all subscriptions (user)
POST	/api/subscriptions	Add a new subscription
PUT	/api/subscriptions/:id	Update a subscription
DELETE	/api/subscriptions/:id	Delete a subscription
🔔 Reminders

The API sends notifications 7 days before renewal.

You can configure reminder intervals in the code.
