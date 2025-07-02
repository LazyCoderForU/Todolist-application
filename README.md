# Full-Stack To-Do List Application

## Overview
This is a full-stack To-Do List application built with:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL

Users can:
- Add tasks with a title, description, and status (Pending/Done).
- View all tasks.
- Edit tasks.
- Mark tasks as Done or Pending.
- Delete tasks.

## Features
- Responsive and modern UI.
- RESTful API for task management.
- PostgreSQL database for persistent storage.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd learning-react
```

### 2. Backend Setup
#### a. Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
```

#### b. Install Dependencies
```bash
pip install -r backend/requirements.txt
```

#### c. Configure Environment Variables
Create a `.env` file in the `backend` directory:
```
DATABASE_URL=postgresql+asyncpg://<username>:<password>@localhost:5432/todolist
```
Replace `<username>` and `<password>` with your PostgreSQL credentials.

#### d. Apply Migrations
```bash
cd backend
alembic upgrade head
```

#### e. Start the Backend
```bash
uvicorn app.main:app --reload
```
The backend will be available at `http://localhost:8000`.

### 3. Frontend Setup
#### a. Serve the Frontend
```bash
cd frontend
python -m http.server 5500
```
The frontend will be available at `http://localhost:5500`.

## API Endpoints
### Base URL: `http://localhost:8000`

#### 1. Create a Task
**POST** `/tasks/`
```json
{
  "title": "Task Title",
  "description": "Task Description",
  "done": false
}
```

#### 2. Get All Tasks
**GET** `/tasks/`

#### 3. Get a Task by ID
**GET** `/tasks/{task_id}`

#### 4. Update a Task
**PUT** `/tasks/{task_id}`
```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "done": true
}
```

#### 5. Delete a Task
**DELETE** `/tasks/{task_id}`

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI, SQLAlchemy
- **Database**: PostgreSQL
- **Tools**: Alembic for migrations, dotenv for environment variables


