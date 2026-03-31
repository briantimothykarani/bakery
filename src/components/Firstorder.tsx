function Firstorder() {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div
        className="relative w-full max-w-[1200px] min-h-[220px] flex items-center justify-center"
        style={{
          background: "#f5f0eb",
          backgroundImage: "url('/images/Group_497.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              color: "#7B3A2E",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontStyle: "italic",
              fontWeight: "700",
              lineHeight: 1.2,
              margin: "0 0 12px 0",
            }}
          >
            20% Off Your
            <br />
            First Order
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              maxWidth: "320px",
              lineHeight: 1.6,
              margin: "0 0 20px 0",
            }}
          >
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.
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
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Firstorder;
