"use client"

interface ExperienceProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "Experience",
    jobs: [
      {
        title: "Freelance Full-Stack Developer",
        company: "Self-Employed (Remote, Egypt)",
        period: "01/2022 – Present",
        highlights: [
          "Designed and developed responsive web applications using Next.js, TypeScript, and React.js",
          "Built and deployed AI-powered chatbots integrated with WhatsApp Cloud API",
          "Developed dashboards and lead management systems using Express.js, Prisma, and PostgreSQL",
          "Created modern landing pages with optimized SEO using Next.js and Chakra UI",
        ],
      },
      {
        title: "Front-End Developer",
        company: "Etija Real Estate Company",
        period: "01/2023 – 01/2024",
        highlights: [
          "Developed a modern property listing platform using Next.js and TypeScript",
          "Collaborated with marketing and design teams to build dashboards and analytics tools",
          "Integrated APIs for client management and performance tracking",
          "Improved UI/UX, responsiveness, and website performance",
        ],
      },
    ],
  },
  ar: {
    title: "الخبرة",
    jobs: [
      {
        title: "مطور Full-Stack مستقل",
        company: "العمل الحر (عن بعد، مصر)",
        period: "01/2022 – الحالي",
        highlights: [
          "تصميم وتطوير تطبيقات ويب سريعة الاستجابة باستخدام Next.js و TypeScript و React.js",
          "بناء ونشر روبوتات محادثة مدعومة بالذكاء الاصطناعي متكاملة مع WhatsApp Cloud API",
          "تطوير لوحات معلومات وأنظمة إدارة العملاء باستخدام Express.js و Prisma و PostgreSQL",
          "إنشاء صفحات هبوط حديثة مع تحسين محركات البحث باستخدام Next.js و Chakra UI",
        ],
      },
      {
        title: "مطور Front-End",
        company: "شركة إيتيجا للعقارات",
        period: "01/2023 – 01/2024",
        highlights: [
          "تطوير منصة حديثة لعرض العقارات باستخدام Next.js و TypeScript",
          "التعاون مع فريق التسويق والتصميم لبناء لوحات معلومات وأدوات تحليلات",
          "دمج واجهات برمجية لإدارة العملاء وتتبع الأداء",
          "تحسين واجهة المستخدم والاستجابة وأداء الموقع",
        ],
      },
    ],
  },
}

export default function Experience({ language }: ExperienceProps) {
  const t = content[language]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--foreground)" }}>
          {t.title}
        </h2>

        <div className="space-y-8">
          {t.jobs.map((job, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 sm:p-8 border"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                    {job.title}
                  </h3>
                  <p className="font-semibold" style={{ color: "var(--primary)" }}>
                    {job.company}
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap" style={{ color: "var(--muted)" }}>
                  {job.period}
                </p>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3" style={{ color: "var(--muted)" }}>
                    <span className="font-bold mt-1" style={{ color: "var(--primary)" }}>
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
