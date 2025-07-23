🧠 YOC.ai – AI-Powered Interview Assistant <br>
YOC.ai is an intelligent AI interview coach that simulates technical interviews, evaluates responses, and provides detailed feedback based on key criteria such as accuracy, communication, <br>and problem-solving depth. Designed to streamline interview preparation and candidate assessment for developers and recruiters.<br>

🚀 Features<br>
🗣️ Natural language Q&A with structured technical prompts <br>

📊 Automatic scoring and feedback (0–10 scale) <br>

📚 Integration with external question APIs <br>

🧠 Evaluates responses on:

Technical Accuracy

Communication Clarity

Structural Depth

Edge Case Handling

🌐 Multilingual support (EN/HI)

🔒 API key security with environment variable management

📦 Tech Stack
Next.js (App Router)

TypeScript

Vapi.ai for voice interactions

OpenAI GPT for evaluation and response

TailwindCSS & ShadCN UI for clean design

Zustand or Redux for state management

Zod & React-Hook-Form for validation

Vercel (Deployment)

🛠️ Getting Started
Clone the repository:

bash
Copy
Edit
git clone https://github.com/KeshavDeploys/YOC.ai
cd YOC.ai
Install dependencies:

bash
Copy
Edit
npm install
Create a .env.local file in the root and add your environment variables:

.env.local

NEXT_PUBLIC_VAPI_API_KEY=your-vapi-api-key
OPENAI_API_KEY=your-openai-api-key
...

Start the development server:

bash
Copy
Edit
npm run dev
🔐 Environment Variables
Make sure to define all necessary keys in .env.local and never expose them in code.

Key	Description
NEXT_PUBLIC_VAPI_API_KEY	Vapi API Key for voice interaction
OPENAI_API_KEY	OpenAI Key for GPT evaluation
...	Add any third-party service keys here

📁 Project Structure
bash
Copy
Edit
/ (root)
├── app/               # App Router (Next.js)
├── components/        # Reusable UI components
├── lib/               # API clients, helpers
├── types/             # TypeScript interfaces
├── public/            # Static assets
├── .env.local         # Your local environment keys
├── README.md          # You are here!
📋 Feedback Generation Logic
After all interview questions are answered, YOC.ai evaluates responses based on:

Technical Accuracy

Communication Clarity

Structural Depth

Missed Edge Cases / Assumptions

Then it generates detailed per-question feedback and a final score out of 10.

📦 Deployment
YOC.ai is deployed on Vercel. To deploy your own:

Push your repo to GitHub

Connect GitHub to Vercel

Add your environment variables in Vercel Dashboard

Deploy 🚀

📸 Demo
!Click to Watch Demo

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss your proposal.

🛡️ License
MIT © 2025 KeshavDeploys
