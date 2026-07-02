import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-body mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 rounded-xl border border-line bg-white text-soft-black text-sm outline-none transition-all duration-200 focus:border-muted focus:ring-2 focus:ring-gray-200/50 min-h-[48px]"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-body mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 rounded-xl border border-line bg-white text-soft-black text-sm outline-none transition-all duration-200 focus:border-muted focus:ring-2 focus:ring-gray-200/50 min-h-[48px]"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-body mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 rounded-xl border border-line bg-white text-soft-black text-sm outline-none transition-all duration-200 focus:border-muted focus:ring-2 focus:ring-gray-200/50 resize-none"
          placeholder="Tell us what you need..."
        />
      </div>
      <button
        type="submit"
        disabled={sent}
        className="w-full bg-charcoal text-white text-sm font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:bg-soft-black active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer min-h-[52px]"
      >
        {sent ? (
          <>Sent! We'll be in touch.</>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
