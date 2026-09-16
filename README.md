# LEAGLE — Indian Legal Assistant UI Prototype

LEAGLE is a frontend prototype for exploring legal information and navigating common topics in the Indian legal system. The application combines a topic-driven interface, help/resources views, responsive navigation, and a conversational legal-assistant UI.

## Current status

This repository is a **UI/prototype project**, not a production legal-advice service.

- Legal-topic browsing is implemented in the frontend.
- The chat interface currently uses a simulated local response rather than a live AI/legal backend.
- The microphone control is a placeholder; voice input is not implemented.
- The project should not be relied on for professional legal advice.

Keeping those limitations explicit makes the repository accurately represent what the code currently does.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Radix UI / shadcn-style components
- Framer Motion
- Lucide icons

## Run locally

```bash
git clone https://github.com/h55n/LEAGLE.git
cd LEAGLE/legal-assistant
npm install
npm run dev
```

Then open the local URL printed by Next.js, normally `http://localhost:3000`.

## Build

```bash
cd legal-assistant
npm run build
npm start
```

## Repository structure

```text
LEAGLE/
└── legal-assistant/
    ├── app/
    │   ├── components/     # Chat, navigation, resources and topic UI
    │   ├── data/           # Legal topic data
    │   ├── page.tsx        # Main application shell
    │   └── layout.tsx
    ├── components/         # Shared UI primitives
    ├── hooks/
    ├── lib/
    ├── public/
    └── package.json
```

## Important note

LEAGLE is an informational prototype. Any future production version should add verified legal sources, jurisdiction-aware retrieval, citations, clear uncertainty handling, and professional/legal escalation paths before presenting generated guidance as authoritative.
