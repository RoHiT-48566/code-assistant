# CodeCritic: AI-Powered Code Review Web Application

## Overview

**CodeCritic** is an AI-driven code review platform designed to help developers improve their code quality, follow best practices, and receive actionable feedback instantly. Leveraging the power of Google Gemini AI, CodeCritic analyzes submitted code, highlights issues, and suggests improvements, making it an invaluable tool for both beginners and experienced developers.

## Features

- 🔍 **AI-Powered Code Review**: Get instant, detailed feedback on your code using advanced AI models.
- 🧠 **Syntax Highlighted Editor**: Write and edit code in a modern, syntax-highlighted editor.
- 📄 **Markdown Feedback**: Reviews are formatted in Markdown for clarity and readability.
- 📱 **Responsive UI**: Clean, user-friendly interface optimized for all devices.
- ⚡ **Real-Time Analysis**: Fast, asynchronous code review with loading indicators.
- 🔐 **Security & Best Practices**: AI checks for security vulnerabilities and adherence to industry standards.

## Tech Stack

### Frontend

- **Framework**: React (with Vite)
- **Styling**: CSS (custom), PrismJS and Highlight.js for syntax highlighting
- **Libraries**:
  - `react-simple-code-editor`
  - `prismjs`
  - `react-markdown`
  - `rehype-highlight`
  - `axios`

### Backend

- **Framework**: Node.js with Express
- **AI Integration**: Google Gemini AI via `@google/generative-ai`
- **Middleware**: CORS, dotenv

### AI/ML

- **Model**: Google Gemini (Generative AI)
- **SDK**: `@google/generative-ai`

## Installation Prerequisites

- Node.js (v18+ recommended)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/RoHiT-48566/code-assistant.git
cd code-assistant
```

### 2. Setup Backend

```bash
cd backend
cp .env.example .env   # Add your Google Gemini API key to .env
npm install
npm start              # or: node server.js
```

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Access the App

Open your browser and visit:  
[http://localhost:5173](http://localhost:5173)

## Usage

1. Enter your code in the left-hand editor panel.
2. Click the **Review** button.
3. View the AI-generated review and suggestions in the right-hand panel.
4. Iterate and improve your code based on the feedback.

## API Reference

### POST `/ai/get-review`

**Description:** Submits code for AI review.

#### Request Body:

```json
{
  "code": "// your code here"
}
```

#### Response:

- `200 OK`: AI-generated review in Markdown format.
- `400 Bad Request`: If code is missing.

#### Example:

```bash
curl -X POST http://localhost:3000/ai/get-review \
  -H "Content-Type: application/json" \
  -d '{"code": "function add(a, b) { return a + b; }"}'
```

## Contributing

1. Fork the repository.
2. Create your feature branch:  
   `git checkout -b feature/YourFeature`
3. Commit your changes:  
   `git commit -am 'Add some feature'`
4. Push to the branch:  
   `git push origin feature/YourFeature`
5. Open a pull request.

### Guidelines

- Follow the existing code style.
- Write clear commit messages.
- Document new features or changes in the README.

## Acknowledgements

- [Google Generative AI](https://ai.google.dev/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [PrismJS](https://prismjs.com/)
- [Highlight.js](https://highlightjs.org/)
- [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor)
- Inspired by modern code review tools and the open-source community.
