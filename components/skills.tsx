"use client"

interface SkillsProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "Skills",
    categories: [
      {
        name: "Frontend",
        bgColor: "var(--accent-blue)",
        skills: ["Next.js", "React.js", "TypeScript", "Zustand", "React Native", "Chakra UI", "Responsive Design"],
      },
      {
        name: "Backend",
        bgColor: "var(--accent-purple)",
        skills: ["Express.js", "Node.js", "Prisma", "RESTful APIs"],
      },
      {
        name: "Databases",
        bgColor: "var(--accent-orange)",
        skills: ["PostgreSQL", "MongoDB", "SQL", "NoSQL"],
      },
      {
        name: "Tools & Other",
        bgColor: "var(--accent-green)",
        skills: ["Git", "SEO", "Progressive Web Apps", "Project Management", "SaaS Development"],
      },
    ],
  },
  ar: {
    title: "المهارات",
    categories: [
      {
        name: "الواجهة الأمامية",
        bgColor: "var(--accent-blue)",
        skills: ["Next.js", "React.js", "TypeScript", "Zustand", "React Native", "Chakra UI", "التصميم المتجاوب"],
      },
      {
        name: "الواجهة الخلفية",
        bgColor: "var(--accent-purple)",
        skills: ["Express.js", "Node.js", "Prisma", "واجهات برمجية RESTful"],
      },
      {
        name: "قواعد البيانات",
        bgColor: "var(--accent-orange)",
        skills: ["PostgreSQL", "MongoDB", "SQL", "NoSQL"],
      },
      {
        name: "الأدوات والأخرى",
        bgColor: "var(--accent-green)",
        skills: ["Git", "تحسين محركات البحث", "تطبيقات الويب التقدمية", "إدارة المشاريع", "تطوير SaaS"],
      },
    ],
  },
}

export default function Skills({ language }: SkillsProps) {
  const t = content[language]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 animate-slide-in-up" style={{ color: "var(--skills-text)" }}>
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.categories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 text-white animate-scale-in"
              style={{
                backgroundColor: category.bgColor,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
