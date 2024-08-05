
# 🚀 Node.js API Server

This project is a Node.js API server that interacts with a Python LLM server to process user queries. It supports selecting a model, sending queries, and maintaining conversation history. Please start the server for pyhton-llm to check the results for the APIs mentioned below.

## ✨ Features

1. Send queries to the Python LLM server.
2. List conversation history ordered by date (descending).
3. Retrieve details of a specific conversation (questions and responses).

## 🛠 Getting Started

### 📋 Prerequisites

- Docker
- Node.js
- PostgreSQL

### 🔧 Setup

1. Clone the repository.

```sh
git clone https://github.com/ANURADHAJHA99/node-api-server.git
cd NODE-API-SERVER
```

2. Install the dependencies.

```sh
npm install
```

3. Create the .env file and add the following content

```sh
POSTGRES_HOST=e2e-102-21.ssdcloudindia.net
POSTGRES_USER=admin
POSTGRES_PASSWORD=Letsmakeshalom!24
POSTGRES_DB=shalom
DATABASE_PORT=5432
```

4. Build and run the Docker container.

```sh
docker build --no-cache -t node-api-server .
docker run -p 3000:3000 --env-file .env node-api-server
```

### 🌐 API Endpoints

#### 📦 Send Query

- **URL:** `/api/conversations/query`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "user_id": "123",
    "model": "llama2",
    "question": "What is the capital of France?"
  }
  ```
- **Response:**
  ```json
  {
    "answer": "The capital of France is Paris."
  }
  ```

#### 📦 List Conversation History

- **URL:** `/api/conversations/:user_id`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "userId": "123",
      "question": "What is the capital of France?",
      "answer": "The capital of France is Paris.",
      "createdAt": "2023-08-05T14:12:00Z",
      "updatedAt": "2023-08-05T14:12:00Z"
    }
  ]
  ```

#### 📦 Get Conversation Details

- **URL:** `/api/conversations/detail/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "id": 1,
    "userId": "123",
    "question": "What is the capital of France?",
    "answer": "The capital of France is Paris.",
    "createdAt": "2023-08-05T14:12:00Z",
    "updatedAt": "2023-08-05T14:12:00Z"
  }
  ```

### 📝 Example cURL Requests

#### 📦 Send Query

```sh
curl --location 'http://localhost:3000/api/conversations/query' --header 'Content-Type: application/json' --data '{
    "user_id": "123",
    "model": "llama2",
    "question": "What is the capital of France?"
}'
```

#### 📦 List Conversation History

```sh
curl --location 'http://localhost:3000/api/conversations/123'
```

#### 📦 Get Conversation Details

```sh
curl --location 'http://localhost:3000/api/conversations/detail/1'
```

### 📝 Example Conversation

1. Send the first query:

```sh
curl --location 'http://localhost:3000/api/conversations/query' --header 'Content-Type: application/json' --data '{
    "user_id": "123",
    "model": "llama2",
    "question": "Who is the president of the USA?"
}'
```

2. Send a follow-up query to maintain context:

```sh
curl --location 'http://localhost:3000/api/conversations/query' --header 'Content-Type: application/json' --data '{
    "user_id": "123",
    "model": "llama2",
    "question": "What age is he?"
}'
```

### 📑 Postman Collection

You can import the provided Postman collection [here](https://dark-resonance-874488.postman.co/workspace/public~d3c714b6-434c-42c6-96b0-ffa97ea17e00/collection/8821057-0252beef-aad2-4b21-8774-6ef98fae99cb?action=share&creator=8821057) to test the endpoints.

### 🔧 Troubleshooting

If you encounter the following error:
```
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
Unable to connect to the database: ConnectionRefusedError [SequelizeConnectionRefusedError]
```
It may be necessary to restart the server as it is hosted on-prem and may occasionally experience connection issues.
