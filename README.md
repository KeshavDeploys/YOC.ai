# YOC.ai - Your Own Coach.ai

YOC.ai is an intelligent, AI-driven interview coaching platform designed to simulate technical interviews, evaluate candidate responses, and provide detailed feedback. Built with Next.js, OpenAI, and Vapi.ai, it’s ideal for developers preparing for interviews or platforms conducting automated assessments. <br>

------
🚀 Features<br>
🗣️ Natural language Q&A with structured technical prompts <br>
📊 Automatic scoring and feedback (0–10 scale) <br>
📚 Integration with external question APIs <br>

<br>
<br>

🧠 Evaluates responses on:<br>
Technical Accuracy<br>
Communication Clarity<br>
Structural Depth<br>
Edge Case Handling<br><br>
🌐 Multilingual support (EN/HI)<br>
🔒 API key security with environment variable management<br>

📦 Tech Stack <br>
Next.js (App Router) <br>
TypeScript<br>
Vapi.ai for voice interactions <br>
OpenAI GPT for evaluation and response <br>
TailwindCSS & ShadCN UI for clean design <br>
Zustand or Redux for state management <br>
Zod & React-Hook-Form for validation <br>
Vercel (Deployment) <br>
 

🛠️ Getting Started<br>

Clone the repository:
--git clone https://github.com/KeshavDeploys/YOC.ai
--cd YOC.ai

Install dependencies: <br>
--npm install
--Create a .env.local file in the root and add your environment variables:
<br>
<br>

.env.local:
NEXT_PUBLIC_VAPI_API_KEY=your-vapi-api-key
OPENAI_API_KEY=your-openai-api-key
<br>
<br>
Start the development server:
npm run dev
🔐 Environment Variables
Make sure to define all necessary keys in .env.local and never expose them in code.
<br>
Key	Description
NEXT_PUBLIC_VAPI_API_KEY	Vapi API Key for voice interaction
OPENAI_API_KEY	OpenAI Key for GPT evaluation
...	Add any third-party service keys here
<br>
<br>


📋 Feedback Generation Logic
After all interview questions are answered, YOC.ai evaluates responses based on:<br>
Technical Accuracy<br>
Communication Clarity<br>
Structural Depth<br>
Missed Edge Cases / Assumptions<br>
Then it generates detailed per-question feedback and a final score out of 10.<br>


📦 Deployment
YOC.ai is deployed on Vercel. To deploy your own:<br>
<br>
Push your repo to GitHub<br>
Connect GitHub to Vercel<br>
Add your environment variables in Vercel Dashboard<br>

🤝 Contributing<br>
Pull requests are welcome. For major changes, please open an issue first to discuss your proposal.<br>

🛡️ License<br>
MIT © 2025 KeshavDeploys<br>
