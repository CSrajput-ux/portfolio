# Chhotu Rajput — Developer Portfolio

A personal portfolio for Chhotu Rajput, a software engineer focused on full-stack, backend, and cloud development. The site uses an editorial “living cluster” visual direction to tell the story behind shipped products, startup work, research, and technical skills.

**Production portfolio:** _Add the deployed portfolio URL here._

## What’s inside

- **Interactive hero:** lazily loaded Three.js service-mesh scene with pointer-reactive nodes.
- **Startup:** CSrexus, a college-ecosystem technology platform, with verified live, source, and design links.
- **Project case studies:** MUJCODE, JobPilot, Health Helpix, and HELPix.
- **MUJCODE product image:** original homepage screenshot at `public/images/mujcode-home.png`, followed by the submission and deployment architecture diagrams.
- **Skills and proof:** grouped skill map, education, and supplied achievements.
- **Contact:** email, tap-to-call phone link, GitHub, and LinkedIn.
- **Portfolio chat:** a bottom-right assistant with local portfolio answers and an optional API endpoint for a RAG backend.
- **Motion and accessibility:** Lenis smooth scrolling, GSAP section reveals, reduced-motion handling, keyboard focus states, and a cursor spotlight on fine-pointer devices.
- **Responsive design:** mobile layout with touch-friendly controls and no custom cursor on touch devices.

## Technology

React 19 · TypeScript · Vite 7 · Three.js · React Three Fiber · Drei · GSAP · ScrollTrigger · Lenis · Lucide

The hero Three.js canvas is lazy-loaded. Vite creates a production-ready static site in `dist/`.

## Run locally

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm ci
npm run dev
```

Vite prints the local URL, usually `http://localhost:5173`.

Create and preview a production build:

```bash
npm run build
npm run preview
```

The build command runs the TypeScript project checks before bundling the site.

## Update content and assets

| What | Where |
| --- | --- |
| Profile details, project descriptions, skills, and links | `src/data/profile.ts` |
| Page sections, project visuals, and chat UI | `src/App.tsx`, `src/components/` |
| Three.js cluster scene | `src/components/ClusterScene.tsx` |
| Colors, typography, responsive layout, and effects | `src/styles.css` |
| Page title and SEO description | `index.html` |

### Personal assets

- Add the résumé PDF as `public/Chhotu-Rajput-Resume.pdf`; the hero button already points there.
- The MUJCODE screenshot is `public/images/mujcode-home.png`. Replace it with a new image at the same path to update the case study.
- JobPilot and Health Helpix still use designed visual placeholders. Replace those in `ProjectVisual` in `src/App.tsx` when screenshots are available.
- Update social, live-site, and repository URLs in `src/data/profile.ts`.

## Connect a RAG chat backend

Without a backend URL, the chat widget uses a small local answer map for portfolio questions. To connect a RAG service, create `.env.local` in the project root:

```dotenv
VITE_CHAT_API_URL=https://your-api.example.com/chat
```

Restart Vite after changing environment variables. The widget sends:

```http
POST /chat
Content-Type: application/json
```

```json
{
  "message": "What did Chhotu build with Redis?"
}
```

Return JSON with one of these string fields: `answer`, `response`, or `text`.

```json
{
  "answer": "Chhotu used Redis as a job queue for code execution in MUJCODE."
}
```

The browser falls back to its local answer map if the endpoint is unavailable or returns an unsupported response. The `VITE_` URL is public in the built client; **never put API keys or other secrets in frontend environment variables**. Keep secrets in the RAG server, configure CORS for the portfolio domain, and secure/rate-limit the API there.

## Deploy

### Vercel

1. Import the GitHub repository into Vercel.
2. Select **Vite** as the framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. If using the RAG backend, add `VITE_CHAT_API_URL` in the Vercel project environment variables and redeploy.
5. Add a custom domain in Vercel’s project settings if needed.

### Docker

The multi-stage `Dockerfile` builds the Vite site and serves the static output from Nginx.

```bash
docker build -t chhotu-portfolio .
docker run --rm -p 8080:80 chhotu-portfolio
```

Open `http://localhost:8080`.

### GitHub Actions / GHCR

`.github/workflows/deploy.yml` builds and publishes `ghcr.io/<owner>/<repository>:latest` on pushes to `main`. It uses the repository-provided `GITHUB_TOKEN` and does not deploy to a running host. To publish from a fork or a private package, verify the repository’s Actions and package permissions.

## Portfolio links

- CSrexus live site: <https://c-srexus.vercel.app>
- MUJCODE live site: <https://mujcode.in>
- GitHub profile: <https://github.com/CSrajput-ux>
- LinkedIn: <https://linkedin.com/in/chhotu-rajput-08a0713a1>
