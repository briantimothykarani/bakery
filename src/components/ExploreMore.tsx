import { useState } from "react";

const tabs = ["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorite"];

const images: Record<string, string[]> = {
  Cake: [
    "/images/Rectangle%2024%20%281%29.png",
    "/images/Rectangle%2023%20%281%29.png",
    "/images/Rectangle%2025%20%281%29.png",
    "/images/Rectangle%2022%20%281%29.png",
    "/images/Rectangle%2021%20%282%29.png",
    "/images/Rectangle%2020%20%281%29.png",
  ],
  Muffins: [],
  Croissant: [],
  Bread: [],
  Tart: [],
  Favorite: [],
};

function ExploreMore() {
  const [activeTab, setActiveTab] = useState("Cake");

  return (
    <section className="py-12 px-4">
      <div className="flex justify-center items-center py-10">
        <img
          src="/images/Explore More.png"
          alt="Top Products"
          className="max-w-[260px]"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-8 border-b border-gray-300 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm transition-all ${
              activeTab === tab
                ? "font-bold text-gray-900 border-b-2 border-gray-900"
                : "text-gray-400 border-b-2 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-4xl mx-auto">
        {images[activeTab]?.map((src, i) => (
          <div key={i} className="overflow-hidden rounded aspect-square">
            <img
              src={src}
              alt={`${activeTab} ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreMore;
