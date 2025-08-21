import React from "react";

const cookbooks = [
  {
    title: "Advanced Prompting",
    href: "/advanced-prompt-guide",
    bg: "linear-gradient(120deg, #a1c4fd 0%, #fbc2eb 100%)",
    textColor: "white",
    date: "Jul 28, 2025",
  },
  {
    title: "Prompt Guide",
    href: "/prompt-guide",
    bg: "linear-gradient(120deg, #f7b267 0%, #a1c4fd 100%)",
    textColor: "white",
    date: "Jun 23, 2025",
  },
  {
    title: "Build an Agent",
    href: "/build-an-agent",
    bg: "linear-gradient(120deg, #a8e063 0%, #56ab2f 100%)",
    textColor: "white",
    date: "Jul 5, 2025",
  },
];

export function CookbookGrid() {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 30, fontWeight: 400, marginBottom: 30 }}>
        Starter Cookbooks
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(350px, 1fr))",
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
              borderRadius: 10,
              minHeight: 120,
              height: 200,
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
            {/* <img
              src="/assets/ChatGPT-Image.png"
              alt="Profile"
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "0.5px solid #fff",
                background: "#e0e0e0",
                objectFit: "cover",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            /> */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 22, fontWeight: 400 }}>{cb.title}</span>
            </div>
            <span
              style={{
                position: "absolute",
                right: 16,
                bottom: 16,
                fontSize: 12,
                opacity: 0.85,
                fontWeight: 400,
                textAlign: "right",
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
