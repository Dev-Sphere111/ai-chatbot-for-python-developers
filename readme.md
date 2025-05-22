# 🚀 ai-chatbot-for-python-developers

This project is an **ai-chatbot-for-python-developers** system that communicates with a Python LLM backend to handle user inquiries. It facilitates model selection, query submission, and the preservation of dialogue history. Please ensure the `python-llm` server is operational to verify the results for the APIs outlined below.

## ✨ Capabilities

1. Transmit inquiries to the Python LLM backend.
2. Enumerate dialogue history, ordered by date (newest first).
3. Fetch particulars of a specific dialogue (questions and answers).

## 🛠 Commencing

### 📋 Requirements

- Docker
- Node.js
- PostgreSQL

### 🔧 Configuration

1. Duplicate the repository.

```sh
git clone https://github.com/Dev-Sphere111/ai-chatbot-for-python-developers
cd ai-chatbot-for-python-developers
```

2. Generate the `.env` file by executing `touch .env` in the root directory and insert the subsequent content:

```sh
POSTGRES_HOST=your_host_name
POSTGRES_USER=your_admin_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database_name
DATABASE_PORT=5432
```

3. Construct and launch the Docker container.

```sh
docker build --no-cache -t 🚀 ai-chatbot-for-python-developers .
docker run -p 3000:3000 --env-file .env 🚀 ai-chatbot-for-python-developers
```

### 📝 Sample cURL Commands

#### 📦 Submit Inquiry

```sh
curl --location 'http://localhost:3000/api/conversations/query' --header 'Content-Type: application/json' --data '{
    "user_id": "123",
    "model": "llama2",
    "question": "What is the principal city of France?"
}'
```

#### 📦 Display Dialogue History

```sh
curl --location 'http://localhost:3000/api/conversations/123'
```

#### 📦 Retrieve Dialogue Particulars

```sh
curl --location 'http://localhost:3000/api/conversations/detail/1'
```

### 📝 Sample Dialogue

1. Send the initial inquiry:

```sh
curl --location 'http://localhost:3000/api/conversations/query' --header 'Content-Type: application/json' --data '{
    "user_id": "123",
    "model": "llama2",
    "question": "Who is the current head of state of the USA?"
}'
```

2. Send a subsequent inquiry to preserve context:

```sh
curl --location 'http://localhost:3000/api/conversations/query' --header 'Content-Type: application/json' --data '{
    "user_id": "123",
    "model": "llama2",
    "question": "How old are they?"
}'
```

### 🌐 API Interfaces

#### 📦 Submit Inquiry

- **URL:** `/api/conversations/query`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "user_id": "123",
    "model": "llama2",
    "question": "What is the principal city of France?"
  }
  ```
- **Response:**
  ```json
  {
    "answer": "The principal city of France is Paris."
  }
  ```

#### 📦 Display Dialogue History

- **URL:** `/api/conversations/:user_id`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "user_id": "123",
      "question": "What is the principal city of France?",
      "answer": "The principal city of France is Paris.",
      "created_at": "2023-08-05T14:12:00Z",
      "updated_at": "2023-08-05T14:12:00Z"
    }
  ]
  ```

#### 📦 Retrieve Dialogue Particulars

- **URL:** `/api/conversations/detail/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "id": 1,
    "userId": "123",
    "question": "What is the principal city of France?",
    "answer": "The principal city of France is Paris.",
    "created_at": "2023-08-05T14:12:00Z",
    "updatedAt": "2023-08-05T14:12:00Z"
  }
  ```

### 🔧 Issue Resolution

Should you face the subsequent error:

```
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
Unable to connect to the database: ConnectionRefusedError [SequelizeConnectionRefusedError]
```

It might be required to restart the server, as it is hosted on-premises and could occasionally encounter connectivity problems.
