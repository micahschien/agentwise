// AI tools directory data. Add entries here; tools.html renders them automatically.
// Descriptions are brief and editorial; verify details on each tool's site.
const TOOLS = [
  {
    "name": "ChatGPT",
    "category": "Chat",
    "description": "General-purpose AI assistant for writing, analysis and coding help.",
    "url": "https://chatgpt.com"
  },
  {
    "name": "Claude",
    "category": "Chat",
    "description": "AI assistant from Anthropic, often used for writing and code.",
    "url": "https://claude.ai"
  },
  {
    "name": "Gemini",
    "category": "Chat",
    "description": "Google's AI assistant, connected to Google apps.",
    "url": "https://gemini.google.com"
  },
  {
    "name": "Grok",
    "category": "Chat",
    "description": "xAI's assistant with access to posts on X.",
    "url": "https://grok.com"
  },
  {
    "name": "Microsoft Copilot",
    "category": "Chat",
    "description": "Microsoft's AI assistant, linked to Windows and Microsoft 365.",
    "url": "https://copilot.microsoft.com"
  },
  {
    "name": "Le Chat",
    "category": "Chat",
    "description": "Assistant from French AI lab Mistral.",
    "url": "https://chat.mistral.ai"
  },
  {
    "name": "DeepSeek",
    "category": "Chat",
    "description": "Chat assistant from the DeepSeek lab.",
    "url": "https://chat.deepseek.com"
  },
  {
    "name": "Meta AI",
    "category": "Chat",
    "description": "Meta's assistant, also found inside its social apps.",
    "url": "https://www.meta.ai"
  },
  {
    "name": "Perplexity",
    "category": "Research",
    "description": "Answer engine that cites its sources.",
    "url": "https://www.perplexity.ai"
  },
  {
    "name": "NotebookLM",
    "category": "Research",
    "description": "Summarize and ask questions about your own documents.",
    "url": "https://notebooklm.google"
  },
  {
    "name": "Elicit",
    "category": "Research",
    "description": "Research assistant aimed at finding and comparing academic papers.",
    "url": "https://elicit.com"
  },
  {
    "name": "Consensus",
    "category": "Research",
    "description": "Search engine for scientific papers with AI summaries.",
    "url": "https://consensus.app"
  },
  {
    "name": "Cursor",
    "category": "Coding",
    "description": "AI-first code editor with an agent mode that works across a project.",
    "url": "https://cursor.com"
  },
  {
    "name": "GitHub Copilot",
    "category": "Coding",
    "description": "AI coding assistant built into popular editors and GitHub.",
    "url": "https://github.com/features/copilot"
  },
  {
    "name": "Claude Code",
    "category": "Coding",
    "description": "Terminal-based coding agent from Anthropic.",
    "url": "https://www.anthropic.com/claude-code"
  },
  {
    "name": "Windsurf",
    "category": "Coding",
    "description": "AI-powered code editor with an agentic assistant.",
    "url": "https://windsurf.com"
  },
  {
    "name": "Cline",
    "category": "Coding",
    "description": "Open-source coding agent that runs inside your editor.",
    "url": "https://cline.bot"
  },
  {
    "name": "Replit",
    "category": "Coding",
    "description": "Browser-based coding environment with an AI agent; no setup needed.",
    "url": "https://replit.com"
  },
  {
    "name": "Lovable",
    "category": "Coding",
    "description": "Describe an app in plain language and get a working web app.",
    "url": "https://lovable.dev"
  },
  {
    "name": "v0",
    "category": "Coding",
    "description": "Vercel's tool for generating user interfaces from prompts.",
    "url": "https://v0.dev"
  },
  {
    "name": "Bolt",
    "category": "Coding",
    "description": "Prompt-to-app builder that runs in the browser.",
    "url": "https://bolt.new"
  },
  {
    "name": "Rosebud AI",
    "category": "Game dev",
    "description": "Browser game maker: describe a game or pick a template, then build and publish it without writing code.",
    "url": "https://rosebud.ai"
  },
  {
    "name": "Meshy",
    "category": "Game dev",
    "description": "Turns text or images into 3D models, with texturing, auto-rigging and exports for Unity, Unreal, Godot and Blender.",
    "url": "https://www.meshy.ai"
  },
  {
    "name": "Scenario",
    "category": "Game dev",
    "description": "Browser workspace for generating image, video, 3D and audio assets, including custom models trained on your own art.",
    "url": "https://www.scenario.com"
  },
  {
    "name": "Midjourney",
    "category": "Image",
    "description": "Image generator known for stylized, artistic results.",
    "url": "https://www.midjourney.com"
  },
  {
    "name": "Leonardo AI",
    "category": "Image",
    "description": "Image generation with a focus on game and design assets.",
    "url": "https://leonardo.ai"
  },
  {
    "name": "Adobe Firefly",
    "category": "Image",
    "description": "Adobe's generative AI for images and design work.",
    "url": "https://firefly.adobe.com"
  },
  {
    "name": "Ideogram",
    "category": "Image",
    "description": "Image generator that is good at including text in pictures.",
    "url": "https://ideogram.ai"
  },
  {
    "name": "ElevenLabs",
    "category": "Audio",
    "description": "Realistic AI voices and text-to-speech.",
    "url": "https://elevenlabs.io"
  },
  {
    "name": "Suno",
    "category": "Audio",
    "description": "Generate songs with vocals from a text prompt.",
    "url": "https://suno.com"
  },
  {
    "name": "Udio",
    "category": "Audio",
    "description": "AI music generator for creating songs from descriptions.",
    "url": "https://www.udio.com"
  },
  {
    "name": "Runway",
    "category": "Video",
    "description": "AI video generation and editing tools.",
    "url": "https://runwayml.com"
  },
  {
    "name": "Pika",
    "category": "Video",
    "description": "Create short AI videos from text or images.",
    "url": "https://pika.art"
  },
  {
    "name": "Luma Dream Machine",
    "category": "Video",
    "description": "Video generation from Luma AI.",
    "url": "https://lumalabs.ai"
  },
  {
    "name": "Zapier",
    "category": "Automation",
    "description": "Connects thousands of apps into automated workflows, with AI steps.",
    "url": "https://zapier.com"
  },
  {
    "name": "n8n",
    "category": "Automation",
    "description": "Workflow automation tool with a visual editor; can be self-hosted.",
    "url": "https://n8n.io"
  },
  {
    "name": "Make",
    "category": "Automation",
    "description": "Visual builder for automating tasks between apps.",
    "url": "https://www.make.com"
  },
  {
    "name": "Google AI Studio",
    "category": "Models",
    "description": "Free-to-try workspace for prototyping with Gemini models.",
    "url": "https://aistudio.google.com"
  },
  {
    "name": "Hugging Face",
    "category": "Models",
    "description": "Hub for open models, datasets and demos.",
    "url": "https://huggingface.co"
  },
  {
    "name": "Ollama",
    "category": "Models",
    "description": "Run open language models locally on your own computer.",
    "url": "https://ollama.com"
  },
  {
    "name": "LM Studio",
    "category": "Models",
    "description": "Desktop app for downloading and chatting with local models.",
    "url": "https://lmstudio.ai"
  },
  {
    "name": "Notion",
    "category": "Productivity",
    "description": "Notes and docs workspace with built-in AI features.",
    "url": "https://www.notion.com"
  },
  {
    "name": "Gamma",
    "category": "Productivity",
    "description": "Generate slide decks and web pages from a prompt.",
    "url": "https://gamma.app"
  }
];
