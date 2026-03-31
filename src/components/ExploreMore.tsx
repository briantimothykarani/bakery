import { useState } from "react";

const tabs = ["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorite"];

const images: Record<string, string[]> = {
  Cake: [
    "/images/explore/cake1.png",
    "/images/explore/cake2.png",
    "/images/explore/cake3.png",
    "/images/explore/cake4.png",
    "/images/explore/cake5.png",
    "/images/explore/cake6.png",
  ],
  Muffins: [
    "/images/explore/muffin1.png",
    "/images/explore/muffin2.png",
    "/images/explore/muffin3.png",
    "/images/explore/muffin4.png",
    "/images/explore/muffin5.png",
    "/images/explore/muffin6.png",
  ],
  Croissant: [
    "/images/explore/croissant1.png",
    "/images/explore/croissant2.png",
    "/images/explore/croissant3.png",
    "/images/explore/croissant4.png",
    "/images/explore/croissant5.png",
    "/images/explore/croissant6.png",
  ],
  Bread: [
    "/images/explore/bread1.png",
    "/images/explore/bread2.png",
    "/images/explore/bread3.png",
    "/images/explore/bread4.png",
    "/images/explore/bread5.png",
    "/images/explore/bread6.png",
  ],
  Tart: [
    "/images/explore/tart1.png",
    "/images/explore/tart2.png",
    "/images/explore/tart3.png",
    "/images/explore/tart4.png",
    "/images/explore/tart5.png",
    "/images/explore/tart6.png",
  ],
  Favorite: [
    "/images/explore/fav1.png",
    "/images/explore/fav2.png",
    "/images/explore/fav3.png",
    "/images/explore/fav4.png",
    "/images/explore/fav5.png",
    "/images/explore/fav6.png",
  ],
};

function ExploreMore() {
  const [activeTab, setActiveTab] = useState("Cake");

  return (
    <section className="py-12 px-4">
      {/* Title */}
      <h2
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontStyle: "italic",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "24px",
          color: "#1a1a1a",
        }}
      >
        Explore More
      </h2>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          borderBottom: "1px solid #ddd",
          marginBottom: "32px",
          flexWrap: "wrap",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              paddingBottom: "10px",
              fontSize: "1rem",
              fontWeight: activeTab === tab ? "700" : "400",
              color: activeTab === tab ? "#1a1a1a" : "#888",
              borderBottom:
                activeTab === tab
                  ? "2px solid #1a1a1a"
                  : "2px solid transparent",
              transition: "all 0.2s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Photo Grid — 3 columns, 2 rows */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {images[activeTab].map((src, i) => (
          <div
            key={i}
            style={{
              overflow: "hidden",
              borderRadius: "4px",
              aspectRatio: "1 / 1",
            }}
          >
            <img
              src={src}
              alt={`${activeTab} ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreMore;
