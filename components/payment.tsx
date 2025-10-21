"use client"

interface PaymentProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "Payment Methods",
    subtitle: "Secure payment options available",
    methods: [
      {
        name: "Mastercard",
        icon: "💳",
        description: "Secure credit card payments",
        region: "Worldwide",
      },
      {
        name: "PayPal",
        icon: "🅿️",
        description: "Fast and secure PayPal transfers",
        region: "Worldwide",
      },
      {
        name: "Bank Transfer",
        icon: "🏦",
        description: "Direct bank transfer from Egypt",
        region: "Egypt",
      },
      {
        name: "Bank Transfer",
        icon: "🏦",
        description: "Direct bank transfer from UK",
        region: "United Kingdom",
      },
    ],
  },
  ar: {
    title: "طرق الدفع",
    subtitle: "خيارات دفع آمنة متاحة",
    methods: [
      {
        name: "ماستركارد",
        icon: "💳",
        description: "دفع آمن ببطاقة الائتمان",
        region: "في جميع أنحاء العالم",
      },
      {
        name: "باي بال",
        icon: "🅿️",
        description: "تحويلات PayPal سريعة وآمنة",
        region: "في جميع أنحاء العالم",
      },
      {
        name: "تحويل بنكي",
        icon: "🏦",
        description: "تحويل بنكي مباشر من مصر",
        region: "مصر",
      },
      {
        name: "تحويل بنكي",
        icon: "🏦",
        description: "تحويل بنكي مباشر من المملكة المتحدة",
        region: "المملكة المتحدة",
      },
    ],
  },
}

export default function Payment({ language }: PaymentProps) {
  const t = content[language]

  return (
    <section id="payment" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-in-up">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            {t.title}
          </h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.methods.map((method, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg animate-scale-in"
              style={{
                borderColor: "var(--primary)",
                backgroundColor: "var(--background)",
                animationDelay: `${idx * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                {method.name}
              </h3>
              <p className="mb-3" style={{ color: "var(--muted)" }}>
                {method.description}
              </p>
              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                {method.region}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
