"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

interface HeaderProps {
  language: "en" | "ar"
  setLanguage: (lang: "en" | "ar") => void
}

const content = {
  en: {
    name: "Ahmed Mansour",
    nav: ["About", "Experience", "Skills", "Projects", "Contact"],
    arLabel: "العربية",
    menuLabel: "Toggle navigation menu",
    closeLabel: "Close menu",
  },
  ar: {
    name: "أحمد منصور",
    nav: ["حول", "الخبرة", "المهارات", "المشاريع", "تواصل"],
    arLabel: "English",
    menuLabel: "فتح قائمة التنقل",
    closeLabel: "إغلاق القائمة",
  },
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = content[language]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-sm shadow-sm animate-fade-in"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold hover:transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
          style={{ color: "var(--primary)" }}
        >
          {t.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {t.nav.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm px-2 py-1 transition-colors duration-200"
              style={{
                color: "var(--foreground)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--foreground)"
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-3 py-2 text-sm font-medium rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--border)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--card)"
            }}
            aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
          >
            {t.arLabel}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onKeyDown={handleKeyDown}
            className="md:hidden p-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200"
            style={{
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--card)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
            aria-label={mobileMenuOpen ? t.closeLabel : t.menuLabel}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t px-4 py-4 space-y-2 animate-slide-in-down"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--card)",
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {t.nav.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg transition-colors duration-200"
              style={{
                color: "var(--foreground)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--border)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
              onClick={handleNavClick}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
