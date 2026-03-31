const Featured = () => {
  const items = [
    {
      img: "/images/rectangle-154.png",
      name: "Featured 1",
      price: "$25",
    },
    {
      img: "/images/rectangle-153.png",
      name: "Featured 2",
      price: "$30",
    },
    {
      img: "/images/rectangle-156.png",
      name: "Featured 3",
      price: "$20",
    },
  ];

  return (
    <div className="flex justify-center py-12">
      {/* Grid container: 3/4 width */}
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />

            {/* Text below image */}
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-red-400 font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
