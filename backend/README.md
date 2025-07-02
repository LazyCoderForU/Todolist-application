# FastAPI To-Do List Backend

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
2. Set up PostgreSQL and create a database (e.g., `todo_db`).
3. Configure your `.env` file with the correct database URL.

## Alembic Migrations

1. Initialize Alembic (if not already):
   ```
   alembic init alembic
   ```
2. Edit `alembic.ini` and set `sqlalchemy.url` to match your `.env` DATABASE_URL.
3. Edit `alembic/env.py` to import `Base` from `app.database`.
4. Create and apply migration:
   ```
   alembic revision --autogenerate -m "create tasks table"
   alembic upgrade head
   ```

## Run the Backend

```
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.
