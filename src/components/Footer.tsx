function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/images/Rectangle 72.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        color: "#fff",
        borderRadius: "0px",
        overflow: "hidden",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 48px",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img
            src="/images/Modrino__2_-removebg-preview 1 (1).png"
            alt="Keithston Logo"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />
          <span
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: "2px",
              marginTop: "4px",
            }}
          ></span>
        </div>

        {/* Follow Us */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{ color: "#c8a96e", fontWeight: "600", fontSize: "1rem" }}
          >
            Follow us
          </span>
          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="#c8a96e"
                strokeWidth="1.5"
              />
              <path
                d="M22 14h-2a1 1 0 0 0-1 1v2h3l-.5 3H19v7h-3v-7h-2v-3h2v-2a4 4 0 0 1 4-4h2v3z"
                fill="#c8a96e"
              />
            </svg>
          </a>
          {/* Pinterest */}
          <a href="#" aria-label="Pinterest">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="#c8a96e"
                strokeWidth="1.5"
              />
              <path
                d="M20 10c-5.52 0-10 4.48-10 10 0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.27-1.95 3.27-4.76 0-2.49-1.79-4.23-4.34-4.23-2.96 0-4.69 2.22-4.69 4.51 0 .89.34 1.85.77 2.37a.31.31 0 0 1 .07.3c-.08.32-.25 1.04-.29 1.18-.05.19-.16.23-.37.14-1.39-.65-2.26-2.68-2.26-4.32 0-3.51 2.55-6.74 7.35-6.74 3.86 0 6.86 2.75 6.86 6.42 0 3.83-2.41 6.91-5.76 6.91-1.13 0-2.19-.59-2.55-1.28l-.69 2.59c-.25.97-.93 2.18-1.39 2.92.05.01.1.01.15.01 5.52 0 10-4.48 10-10S25.52 10 20 10z"
                fill="#c8a96e"
              />
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="#" aria-label="WhatsApp">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="#c8a96e"
                strokeWidth="1.5"
              />
              <path
                d="M20 11a9 9 0 0 0-7.74 13.57L11 29l4.57-1.2A9 9 0 1 0 20 11zm0 16.5a7.46 7.46 0 0 1-3.8-1.04l-.27-.16-2.81.74.75-2.74-.18-.28A7.5 7.5 0 1 1 20 27.5zm4.12-5.6c-.22-.11-1.32-.65-1.53-.72-.2-.08-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.17-.48.06a6.1 6.1 0 0 1-1.8-1.11 6.77 6.77 0 0 1-1.25-1.55c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.81 3.36.53.23.95.37 1.27.47.53.17 1.02.14 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.97.13-1.06-.06-.09-.2-.15-.42-.26z"
                fill="#c8a96e"
              />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="#c8a96e"
                strokeWidth="1.5"
              />
              <rect
                x="12"
                y="12"
                width="16"
                height="16"
                rx="4"
                stroke="#c8a96e"
                strokeWidth="1.5"
              />
              <circle
                cx="20"
                cy="20"
                r="3.5"
                stroke="#c8a96e"
                strokeWidth="1.5"
              />
              <circle cx="24.5" cy="15.5" r="1" fill="#c8a96e" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "40px",
          padding: "48px 48px 32px",
        }}
      >
        {/* About Us */}
        <div>
          <h3
            style={{
              color: "#fff",
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            About Us
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "2.2",
            }}
          >
            <li style={{ color: "#ddd", fontSize: "1rem" }}>(456) 789-12301</li>
            <li style={{ color: "#ddd", fontSize: "1rem" }}>
              info@modrino.co.uk
            </li>
            <li style={{ color: "#ddd", fontSize: "1rem" }}>
              South 13th street
            </li>
            <li style={{ color: "#ddd", fontSize: "1rem" }}>
              New york America
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3
            style={{
              color: "#c8a96e",
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Explore
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "2.5",
            }}
          >
            {["Home", "Blog", "Contact us", "Services"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    color: "#ddd",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "500",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8a96e")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ddd")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent News */}
        <div>
          <h3
            style={{
              color: "#c8a96e",
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Recent News
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[
              {
                date: "June 14, 2024",
                title: "Puff pastry bliss.",
                img: "/images/Rectangle 158.png",
              },
            ].map((news, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <img
                  src={news.img}
                  alt={news.title}
                  style={{
                    width: "70px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      color: "#c8a96e",
                      fontSize: "0.8rem",
                      margin: "0 0 4px",
                    }}
                  >
                    {news.date}
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    {news.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 48px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "#aaa",
          fontSize: "0.9rem",
        }}
      >
        © 2024 Bake House. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
