# Express.js REST API

## 📘 Project Description

This is a simple RESTful API built using **Node.js** and **Express.js**. It performs CRUD operations on an in-memory list of items. Each item has an `id`, `name`, and `description`.

---

## ⚙️ Setup Instructions

1. Clone the repository or download the project files.

2. Install dependencies:

```bash
npm install


3. Start the server:

bash
node app.js
The server will run at:
http://localhost:3000

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /items      | Get all items     |
| GET    | /items/\:id | Get item by ID    |
| POST   | /items      | Create new item   |
| PUT    | /items/\:id | Update item by ID |
| DELETE | /items/\:id | Delete item by ID |

POST http://localhost:3000/items
Content-Type: application/json

{
  "name": "Book",
  "description": "A fantasy novel"
}
{
  "id": 3,
  "name": "Book",
  "description": "A fantasy novel"
}
GET http://localhost:3000/items

[
  {
    "id": 1,
    "name": "Item One",
    "description": "First item"
  },
  {
    "id": 2,
    "name": "Item Two",
    "description": "Second item"
  }
]
GET /items/1
GET http://localhost:3000/items/1
Response:
{
  "id": 1,
  "name": "Item One",
  "description": "First item"
}
PUT /items/1
PUT http://localhost:3000/items/1
Content-Type: application/json

{
  "name": "Updated Item",
  "description": "Updated description"
}

Response:
{
  "id": 1,
  "name": "Updated Item",
  "description": "Updated description"
}
DELETE /items/1
DELETE http://localhost:3000/items/1

Response:
{
  "message": "Item deleted",
  "item": {
    "id": 1,
    "name": "Updated Item",
    "description": "Updated description"
  }
}
| Code | Meaning               | When it Happens                       |
| ---- | --------------------- | ------------------------------------- |
| 400  | Bad Request           | Missing or invalid input data         |
| 404  | Not Found             | Item not found or route doesn't exist |
| 500  | Internal Server Error | Server-side errors                    |


