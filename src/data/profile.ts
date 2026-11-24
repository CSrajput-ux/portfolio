export const profile = {
  name: 'Chhotu Rajput',
  title: 'Software Engineer',
  subtitle: 'Full-Stack · Backend · Cloud',
  location: 'Agra, India',
  email: 'csjadon415@gmail.com',
  phone: '+91 7579948087',
  github: 'https://github.com/CSrajput-ux',
  linkedin: 'https://linkedin.com/in/chhotu-rajput-08a0713a1',
  resume: '/Chhotu-Rajput-Resume.pdf',
  education: 'B.Tech CSE · Manipal University Jaipur',
  graduation: 'Expected 2028',
  cgpa: '7.33/10',
}

export const projects = [
  {
    id: '01',
    name: 'MUJCODE',
    pitch: 'A university coding and placement layer that stays out of the way.',
    story: ['Students submit code and track placement activity', 'I built the queue-backed execution and recruiter workflows', 'Docker images move through ECR to Helm-managed EKS'],
    tags: ['React', 'Node.js', 'Socket.IO', 'Redis', 'Judge0', 'MongoDB', 'Docker', 'AWS EKS', 'Helm', 'GitHub Actions'],
    live: 'https://mujcode.in',
    github: 'https://github.com/CSrajput-ux/mujcode-',
  },
  {
    id: '02',
    name: 'JobPilot',
    pitch: 'An AI-assisted job search workflow, from discovery to follow-up.',
    story: ['Job hunting was spread across disconnected tools', 'I built matching, tracking, outreach and application workflows', 'FastAPI services run behind a Next.js dashboard with Redis caching'],
    tags: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Docker Compose', 'GitHub Actions'],
    github: 'https://github.com/CSrajput-ux/Jobar-',
  },
  {
    id: '03',
    name: 'Health Helpix',
    pitch: 'A patient-and-doctor pocket, from appointments to vitals.',
    story: ['Healthcare tasks were scattered across tools', 'I designed patient and doctor workflows', 'The app works offline-minded with Maps, history and planning'],
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Hilt', 'MVVM', 'Retrofit', 'Room', 'TensorFlow Lite', 'Firebase', 'CameraX'],
    github: 'https://github.com/CSrajput-ux/Helpix',
  },
  {
    id: '04',
    name: 'HELPix',
    pitch: 'Skin-lesion classification with less data leakage and more trust.',
    story: ['Public datasets make evaluation deceptively easy', 'I built hashing, leak checks and calibrated comparisons', 'Grad-CAM and uncertainty analysis expose weak confidence'],
    tags: ['PyTorch', 'EfficientNet-B0', 'SE Attention', 'Focal Loss', 'Temperature Scaling', 'MC-Dropout', 'Grad-CAM', 'Pytest'],
    note: 'First author · manuscript in preparation',
    github: 'https://github.com/CSrajput-ux/Helpix-reasearh-',
  },
]

export const startupProject = {
  name: 'CSrexus',
  pitch: 'A technology platform built to connect, empower, and streamline the college ecosystem.',
  tags: ['TypeScript', 'React', 'Vite', 'CSS3', 'PostCSS', 'Vercel'],
  live: 'https://c-srexus.vercel.app',
  github: 'https://github.com/CSrajput-ux/CSrexus',
  design: 'https://www.figma.com/design/obmMWUtdmb0nTZ13tB8UTq/Corporate-Website-Design',
}

export const skillGroups = [
  { name: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'Kotlin', 'SQL'] },
  { name: 'Backend', items: ['Next.js', 'React', 'Vite', 'FastAPI', 'Node.js', 'REST', 'Socket.IO', 'Redis', 'PostgreSQL', 'MongoDB'] },
  { name: 'Cloud', items: ['AWS ECR', 'AWS EKS', 'Docker', 'Helm', 'GitHub Actions', 'CI/CD', 'Linux', 'Git'] },
  { name: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'TensorFlow Lite', 'Scikit-learn', 'NumPy', 'Pandas', 'CNNs', 'Grad-CAM', 'pgvector'] },
  { name: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Retrofit', 'Room', 'CameraX', 'Coroutines'] },
]
