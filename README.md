# Chhotu Rajput Portfolio

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Edit content

- Personal details and project data: `src/data/profile.ts`
- Main page sections: `src/App.tsx`
- Visual system: `src/styles.css`
- Three.js hero: `src/components/ClusterScene.tsx`

## Add assets

Place `Chhotu-Rajput-Resume.pdf` in `public/` to activate the resume buttons.
The current MUJCODE, MUJMart, and Health Helpix screenshot areas are deliberate placeholders.

## Deploy

### Vercel

Import the repository in Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

### Docker

```bash
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio
```

The GitHub Actions workflow publishes the image to GHCR on pushes to `main`.

## Connect the RAG chat

The bottom-right chat widget already answers from the portfolio as a local fallback.
Set `VITE_CHAT_API_URL` to the URL of your RAG backend before starting Vite:

```bash
VITE_CHAT_API_URL=https://your-api.example.com/chat npm run dev
```

The frontend sends `POST` JSON in this shape:

```json
{ "message": "What projects has Chhotu built?" }
```

The backend can return `answer`, `response`, or `text`. If the API is absent or unavailable, the widget falls back to local portfolio answers.
