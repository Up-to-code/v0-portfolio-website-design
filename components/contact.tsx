"use client"

import type React from "react"

import { useState } from "react"

interface ContactProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "Contact",
    description: "Get in touch with me for any inquiries or opportunities.",
    location: "Al Mansurah, Egypt",
    email: "uptocodejs@gmail.com",
    phone: "+20 114 210 2700",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
  },
  ar: {
    title: "تواصل",
    description: "تواصل معي لأي استفسارات أو فرص.",
    location: "المنصورة، مصر",
    email: "uptocodejs@gmail.com",
    phone: "+20 114 210 2700",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
    },
  },
}

export default function Contact({ language }: ContactProps) {
  const t = content[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          {t.title}
        </h2>
        <p className="mb-12" style={{ color: "var(--muted)" }}>
          {t.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>
                📍 {language === "en" ? "Location" : "الموقع"}
              </p>
              <p className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                {t.location}
              </p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>
                📧 {language === "en" ? "Email" : "البريد الإلكتروني"}
              </p>
              <a
                href={`mailto:${t.email}`}
                className="text-lg font-semibold transition-colors duration-200"
                style={{ color: "var(--primary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--link-hover)"
                  e.currentTarget.style.textDecoration = "underline"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--primary)"
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                {t.email}
              </a>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>
                📱 {language === "en" ? "Phone" : "الهاتف"}
              </p>
              <a
                href={`tel:${t.phone}`}
                className="text-lg font-semibold transition-colors duration-200"
                style={{ color: "var(--primary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--link-hover)"
                  e.currentTarget.style.textDecoration = "underline"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--primary)"
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                {t.phone}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder={t.form.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
              required
            />
            <input
              type="email"
              placeholder={t.form.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
              required
            />
            <textarea
              placeholder={t.form.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border resize-none"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold rounded-lg transition-opacity duration-200"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1"
              }}
            >
              {t.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
