"use client"

interface FooterProps {
  language: "en" | "ar"
}

const content = {
  en: {
    copyright: "© 2025 Ahmed Mansour — All Rights Reserved.",
    social: ["GitHub", "LinkedIn", "Email"],
  },
  ar: {
    copyright: "© 2025 أحمد منصور — جميع الحقوق محفوظة.",
    social: ["GitHub", "LinkedIn", "البريد الإلكتروني"],
  },
}

export default function Footer({ language }: FooterProps) {
  const t = content[language]

  return (
    <footer
      className="border-t py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {t.copyright}
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="w-5 h-5 transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)"
            }}
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-5 h-5 transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)"
            }}
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.03.042h.03v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.613 1.347 3.613 4.253v5.616zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.956-1.704 1.187 0 1.915.753 1.948 1.704 0 .946-.761 1.704-1.989 1.704zm1.581 11.019H3.656V9.807h3.262v10.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:uptocodejs@gmail.com"
            className="w-5 h-5 transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)"
            }}
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
