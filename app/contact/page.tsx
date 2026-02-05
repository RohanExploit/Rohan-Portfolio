'use client'

import React from "react"

import { Mail, Github, Linkedin, Twitter, MessageSquare, Phone, Download } from 'lucide-react'
import { useState } from 'react'
import { ROHAN_DATA } from '@/lib/portfolio-data'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="font-mono text-sm text-github-green">/contact</p>
          <h1 className="mt-2 font-mono text-4xl font-bold text-text-primary">Get in Touch</h1>
          <p className="mt-4 text-text-secondary">
            I'm always open to discussing new projects, opportunities, collaboration, or having a conversation.
          </p>
        </div>

        {/* Resume CTA */}
        <div className="mb-12 flex justify-center">
          <a
            href={ROHAN_DATA.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1f6feb] px-8 py-4 font-mono text-base font-bold text-white transition-all duration-300 hover:bg-[#0d419d] shadow-lg"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-github-green hover:bg-steel">
              <div className="mb-3 flex items-center gap-3">
                <Mail className="h-6 w-6 text-github-green" />
                <h3 className="font-mono font-bold text-text-primary">Email</h3>
              </div>
              <a href={`mailto:${ROHAN_DATA.contact.email}`} className="text-github-green hover:underline font-semibold">
                {ROHAN_DATA.contact.email}
              </a>
              <p className="mt-2 text-sm text-text-secondary">Preferred for inquiries and collaborations</p>
            </div>

            {/* Location */}
            <div className="rounded-lg border border-slate-600 bg-steel p-6 transition-all duration-300 hover:border-info hover:bg-steel">
              <div className="mb-3 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-info" />
                <h3 className="font-mono font-bold text-text-primary">Location</h3>
              </div>
              <p className="text-info font-semibold">{ROHAN_DATA.contact.location}</p>
              <p className="mt-2 text-sm text-text-secondary">India (IST timezone)</p>
            </div>

            {/* Social Links */}
            <div className="rounded-lg border border-slate-600 bg-steel p-6">
              <h3 className="mb-4 font-mono font-bold text-text-primary">Connect on Social</h3>
              <div className="space-y-3">
                {[
                  {
                    icon: Github,
                    label: 'GitHub',
                    url: 'https://github.com/RohanExploit',
                    handle: '@RohanExploit',
                    color: 'text-github-green',
                    hoverColor: 'hover:border-github-green',
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    url: 'https://linkedin.com/in/rohanvijaygaikwad',
                    handle: 'rohanvijaygaikwad',
                    color: 'text-info',
                    hoverColor: 'hover:border-info',
                  },
                  {
                    icon: Twitter,
                    label: 'Twitter / X',
                    url: 'https://x.com/rohan_critic',
                    handle: '@rohan_critic',
                    color: 'text-text-secondary',
                    hoverColor: 'hover:border-accent-secondary',
                  },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 rounded-lg border border-slate-600 bg-obsidian p-3 transition-all duration-300 ${social.hoverColor} hover:bg-accent/5`}
                    >
                      <Icon className={`h-5 w-5 ${social.color}`} />
                      <div>
                        <p className="text-sm font-mono text-text-primary">{social.label}</p>
                        <p className={`text-xs font-mono ${social.color}`}>{social.handle}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-lg border border-github-green/30 bg-github-green/5 p-6">
              <div className="mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-github-green" />
                <h3 className="font-mono font-bold text-github-green">Response Time</h3>
              </div>
              <p className="text-sm text-text-secondary">
                I typically respond to inquiries within 24-48 hours. For urgent matters, please mention it in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-slate-600 bg-steel p-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-sm font-semibold text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-obsidian px-4 py-2 text-text-primary placeholder-text-tertiary focus:border-github-green focus:outline-none focus:ring-2 focus:ring-github-green/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-sm font-semibold text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-obsidian px-4 py-2 text-text-primary placeholder-text-tertiary focus:border-github-green focus:outline-none focus:ring-2 focus:ring-github-green/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-sm font-semibold text-text-primary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-obsidian px-4 py-2 text-text-primary placeholder-text-tertiary focus:border-github-green focus:outline-none focus:ring-2 focus:ring-github-green/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-sm font-semibold text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-slate-600 bg-obsidian px-4 py-2 text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg border border-github-green bg-github-green px-6 py-3 font-mono font-semibold text-obsidian transition-all duration-300 hover:bg-github-green-dark hover:border-github-green-dark disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <div className="rounded-lg border border-github-green/30 bg-github-green/10 p-4">
                  <p className="text-sm text-github-green">Thank you! I'll get back to you as soon as possible.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-16 rounded-lg border border-github-green bg-github-green/5 p-8 text-center">
          <p className="font-mono text-sm uppercase text-github-green">Availability</p>
          <p className="mt-2 text-2xl font-bold text-text-primary">
            Open to collaborations, internships, and exciting opportunities
          </p>
          <p className="mt-4 text-text-secondary">
            Let's build something amazing together. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  )
}
