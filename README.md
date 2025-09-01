# 🔍 Gemini Search

<div align="center">

![Gemini Search Logo](https://img.shields.io/badge/Gemini-Search-4285f4?style=for-the-badge&logo=google&logoColor=white)

**A Perplexity-style search engine powered by Google's Gemini 2.5 Flash model**

*Get AI-powered answers to your questions with real-time web sources and citations*

---

[![GitHub stars](https://img.shields.io/github/stars/preetam-90/Gemini-Search?style=social)](https://github.com/preetam-90/Gemini-Search/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/preetam-90/Gemini-Search?style=social)](https://github.com/preetam-90/Gemini-Search/network/members)
[![GitHub issues](https://img.shields.io/github/issues/preetam-90/Gemini-Search)](https://github.com/preetam-90/Gemini-Search/issues)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

**Created by [@preetam-90](https://github.com/preetam-90)**

</div>

---

## 🎬 Demo

![Gemini Search Demo](https://github.com/user-attachments/assets/2302898e-03ae-40a6-a16c-301d6b91c5af)

*Experience intelligent search with real-time AI responses and source citations*

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🚀 **Core Features**
- 🔍 **Real-time Web Search** - Lightning-fast search integration
- 🤖 **Gemini 2.0 Flash** - Powered by Google's latest AI model
- 📚 **Smart Citations** - Source references for every answer
- 💬 **Contextual Chat** - Follow-up questions in the same session

</td>
<td width="50%">

### 🎨 **User Experience**
- 🎨 **Modern UI** - Clean interface inspired by Perplexity
- ⚡ **Fast Response** - Optimized for speed and performance
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🌙 **Elegant Styling** - Beautiful, professional appearance

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | AI & Search | Styling |
|----------|---------|-------------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) | ![Google AI](https://img.shields.io/badge/Google%20Gemini-4285f4?style=for-the-badge&logo=google&logoColor=white) | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![Google Search](https://img.shields.io/badge/Google%20Search-4285f4?style=for-the-badge&logo=google&logoColor=white) | ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | | |

</div>

---

## 🚀 Quick Start

### 📋 Prerequisites

<details>
<summary>🔧 <strong>System Requirements</strong></summary>

- **Node.js** `v18+` - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Google API Key** - With Gemini API access

</details>

### ⚡ Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/preetam-90/Gemini-Search.git
cd Gemini-Search

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
cp .env.example .env
# Add your Google API key to .env file

# 4️⃣ Start development server
npm run dev

# 5️⃣ Open in browser
# Navigate to http://localhost:3000
```

### 🔐 Environment Configuration

Create a `.env` file in your root directory:

```bash
# 🔑 Required: Your Google API Key
GOOGLE_API_KEY=your_api_key_here

# 🌍 Optional: Environment setting
NODE_ENV=development
```

> **⚠️ Security Note:** Never commit your `.env` file or expose your API keys publicly!

---

## 💻 Development Commands

<div align="center">

| Command | Description | Usage |
|---------|-------------|-------|
| `npm run dev` | 🔥 Start development server | Hot reload enabled |
| `npm run build` | 🏗️ Build for production | Optimized bundle |
| `npm run start` | 🚀 Run production server | After building |
| `npm run check` | 🔍 TypeScript type checking | Code validation |

</div>

---

## 📁 Project Structure

```
Gemini-Search/
├── 📂 src/
│   ├── 📂 components/          # React components
│   ├── 📂 pages/              # Application pages
│   ├── 📂 utils/              # Utility functions
│   └── 📂 styles/             # CSS and styling
├── 📂 server/                 # Backend Express server
├── 📂 public/                 # Static assets
├── 📄 package.json            # Dependencies
├── 📄 .env.example            # Environment template
└── 📄 README.md              # This file
```

---

## 🎯 Usage Examples

<details>
<summary>💡 <strong>How to Ask Questions</strong></summary>

**Simple Questions:**
```
What is the weather in New York today?
```

**Complex Queries:**
```
Compare the latest smartphones released in 2024 and their key features
```

**Follow-up Questions:**
```
Tell me more about the camera specifications
```

</details>

<details>
<summary>🔍 <strong>Search Tips</strong></summary>

- ✅ Be specific in your queries
- ✅ Ask follow-up questions for deeper insights
- ✅ Check the source citations for verification
- ✅ Use natural language - no need for keywords

</details>

---

## 🔒 Security & Privacy

<div align="center">

| Security Feature | Status | Description |
|------------------|--------|-------------|
| 🔐 **API Key Protection** | ✅ **Secure** | Keys stored in environment variables |
| 🚫 **No Data Logging** | ✅ **Private** | Search queries are not permanently stored |
| 🛡️ **Input Sanitization** | ✅ **Protected** | All inputs are properly validated |
| 🔒 **HTTPS Ready** | ✅ **Encrypted** | SSL/TLS support for production |

</div>

---

## 🤝 Contributing

<div align="center">

**We welcome contributions!** 🎉

[![Contributors](https://img.shields.io/github/contributors/preetam-90/Gemini-Search)](https://github.com/preetam-90/Gemini-Search/graphs/contributors)

</div>

1. 🍴 Fork the repository
2. 🌿 Create your feature branch: `git checkout -b feature/amazing-feature`
3. ✅ Commit your changes: `git commit -m 'Add amazing feature'`
4. 🚀 Push to the branch: `git push origin feature/amazing-feature`
5. 📬 Open a Pull Request

---

## 📄 License

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)

**This project is licensed under the MIT License**

*Feel free to use this code for your own projects!*

</div>

---

## 🙏 Acknowledgments

<div align="center">

| Inspiration | Technology | UI Framework |
|-------------|------------|--------------|
| 🔍 [**Perplexity**](https://www.perplexity.ai/) | 🤖 [**Google Gemini API**](https://ai.google.dev/) | 🎨 [**shadcn/ui**](https://ui.shadcn.com/) |
| *For the amazing UX inspiration* | *For the powerful AI capabilities* | *For the beautiful components* |

</div>

---

## 📊 Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=preetam-90&show_icons=true&theme=radical)

**Made with ❤️ by [@preetam-90](https://github.com/preetam-90)**

⭐ **Star this repo if you find it helpful!** ⭐

</div>

---

<div align="center">

### 🚀 Ready to search smarter? [Get Started Now!](https://github.com/preetam-90/Gemini-Search)

</div>
