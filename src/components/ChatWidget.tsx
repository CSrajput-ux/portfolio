import { useEffect, useRef, useState, type FormEvent } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { profile, projects, skillGroups, startupProject } from '../data/profile'

type ChatMessage = {
  role: 'bot' | 'user'
  text: string
}

const starterMessages: ChatMessage[] = [
  { role: 'bot', text: 'Hi, I’m Chhotu’s personal chatbot. You can ask me anything about skills, projects, college, and more.' },
]

function localAnswer(question: string) {
  const q = question.toLowerCase()

  if (q.includes('contact') || q.includes('email') || q.includes('mail')) {
    return `You can reach Chhotu at ${profile.email} or call ${profile.phone}.`
  }
  if (q.includes('phone') || q.includes('call') || q.includes('number')) {
    return `Chhotu’s phone number is ${profile.phone}.`
  }
  if (q.includes('education') || q.includes('college') || q.includes('cgpa') || q.includes('study')) {
    return `${profile.education}, ${profile.cgpa} CGPA, ${profile.graduation}.`
  }
  if (q.includes('csrexus') || q.includes('startup')) {
    if (q.includes('github') || q.includes('source')) {
      return `CSrexus source: ${startupProject.github}`
    }
    if (q.includes('design') || q.includes('figma')) {
      return `CSrexus design file: ${startupProject.design}`
    }
    return `${startupProject.name}: ${startupProject.pitch} Live site: ${startupProject.live}`
  }
  if (q.includes('available') || q.includes('open') || q.includes('intern') || q.includes('job') || q.includes('role')) {
    return 'Chhotu is open to SWE-1 and internship roles in full-stack, backend, cloud, or related software engineering teams.'
  }
  if (q.includes('resume') || q.includes('cv')) {
    return 'The résumé PDF button is in the hero section. Add the PDF at /public/Chhotu-Rajput-Resume.pdf.'
  }
  if (q.includes('github')) {
    return `GitHub: ${profile.github}`
  }
  if (q.includes('linkedin')) {
    return `LinkedIn: ${profile.linkedin}`
  }
  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    return `Chhotu works across ${skillGroups.map((group) => group.name).join(', ').replace('AI / ML', 'AI/ML')}.`
  }
  if (q.includes('project') || q.includes('work') || q.includes('built')) {
    return `Main projects: ${projects.map((project) => project.name).join(', ')}, and ${startupProject.name}.`
  }

  for (const project of projects) {
    if (q.includes(project.name.toLowerCase()) || (project.name === 'HELPix' && q.includes('helpix'))) {
      return `${project.name}: ${project.pitch} Built around ${project.tags.slice(0, 5).join(', ')}.`
    }
  }

  return 'I can answer from the portfolio: projects, technical skills, education, contact details, résumé, and job availability.'
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages)
  const messagesEnd = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    const question = input.trim()
    if (!question || loading) return

    setInput('')
    setMessages((current) => [...current, { role: 'user', text: question }])
    setLoading(true)

    const apiUrl = import.meta.env.VITE_CHAT_API_URL as string | undefined
    let answer = localAnswer(question)

    if (apiUrl) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: question }),
        })
        if (!response.ok) throw new Error(`Chat API returned ${response.status}`)
        const payload = await response.json()
        answer = payload.answer || payload.response || payload.text || localAnswer(question)
      } catch {
        answer = `${localAnswer(question)}`
      }
    }

    setMessages((current) => [...current, { role: 'bot', text: answer }])
    setLoading(false)
  }

  return (
    <aside className={`chat-widget ${open ? 'chat-open' : ''}`} aria-label="Ask about Chhotu">
      {open && (
        <section className="chat-panel" aria-live="polite">
          <header className="chat-header">
            <div>
              <span className="chat-status" />
              <b>Ask about Chhotu</b>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X size={16} /></button>
          </header>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <p className={`chat-message chat-message-${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
            {loading && <p className="chat-message chat-message-bot chat-loading">Thinking<span>.</span><span>.</span><span>.</span></p>}
            <div ref={messagesEnd} />
          </div>
          <form className="chat-form" onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about projects..."
              aria-label="Chat message"
              autoComplete="off"
            />
            <button type="submit" disabled={!input.trim() || loading} aria-label="Send message"><Send size={15} /></button>
          </form>
        </section>
      )}
      <button
        className="chat-launcher"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        {!open && <span>Ask me</span>}
      </button>
    </aside>
  )
}
