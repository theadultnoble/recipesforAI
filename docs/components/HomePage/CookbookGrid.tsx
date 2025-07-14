import React from "react";

const cookbooks = [
  {
    title: "Advanced Prompting",
    href: "/advanced-prompt-guide",
    bg: "linear-gradient(120deg, #a1c4fd 0%, #fbc2eb 100%)",
    textColor: "white",
    date: "2024-06-01",
  },
  {
    title: "Prompt Guide",
    href: "/prompt-guide",
    bg: "linear-gradient(120deg, #f7b267 0%, #a1c4fd 100%)",
    textColor: "white",
    date: "2024-05-20",
  },
  {
    title: "Build an Agent",
    href: "/build-an-agent",
    bg: "linear-gradient(120deg, #a8e063 0%, #56ab2f 100%)",
    textColor: "white",
    date: "2024-05-10",
  },
];

export function CookbookGrid() {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
        Starter Cookbooks
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {cookbooks.map((cb) => (
          <a
            key={cb.title}
            href={cb.href}
            style={{
              background: cb.bg,
              color: cb.textColor,
              borderRadius: 16,
              minHeight: 120,
              height: 120,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              transition: "transform 0.1s, box-shadow 0.1s",
              cursor: "pointer",
              position: "relative",
              padding: 20,
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 22, fontWeight: 600 }}>{cb.title}</span>
            </div>
            <span
              style={{
                bottom: 16,
                textAlign: "center",
                fontSize: 14,
                opacity: 0.85,
                fontWeight: 400,
              }}
            >
              {cb.date}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
