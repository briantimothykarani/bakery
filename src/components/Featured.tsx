const Featured = () => {
  const items = [
    { img: "/images/rectangle-154.png", name: "Puff Pastry", price: "$8" },
    { img: "/images/rectangle-153.png", name: "Doughnuts", price: "$8" },
    { img: "/images/rectangle-156.png", name: "Brownies", price: "$8" },
  ];

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
          marginBottom: "40px",
          color: "#1a1a1a",
        }}
      >
        Featured Treats
      </h2>

      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-red-400 font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
