function AboutBanner() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/Rectangle 72.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 48px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        {/* Left bread image */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src="/images/about-left.png"
            alt="Bread left"
            style={{
              width: "100%",
              maxWidth: "280px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Center text */}
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#fff",
            }}
          >
            About us
          </h2>
          <p
            style={{
              color: "#ccc",
              fontSize: "0.95rem",
              lineHeight: "1.7",
              marginBottom: "24px",
              maxWidth: "280px",
              margin: "0 auto 24px",
            }}
          >
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis.
          </p>
          <button
            style={{
              backgroundColor: "#7B3A2E",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "12px 36px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              letterSpacing: "0.5px",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#5e2c22")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#7B3A2E")
            }
          >
            Read More
          </button>
        </div>

        {/* Right bread image */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <img
            src="/images/about-right.png"
            alt="Bread right"
            style={{
              width: "100%",
              maxWidth: "280px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
