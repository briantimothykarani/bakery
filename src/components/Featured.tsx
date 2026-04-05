const Featured = () => {
  const items = [
    { img: "/images/rectangle-154.png", name: "Puff Pastry", price: "$8" },
    { img: "/images/rectangle-153.png", name: "Doughnuts", price: "$8" },
    { img: "/images/rectangle-156.png", name: "Brownies", price: "$8" },
  ];

  return (
    <section className="py-12 px-4">
      {/* Title */}
      <div className="flex justify-center items-center py-10">
        <img
          src="/images/Featured Treats.png"
          alt="Top Products"
          className="max-w-[260px]"
        />
      </div>

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
