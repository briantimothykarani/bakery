function Topproducts() {
  const products = [
    {
      img: "/images/240_F_127988957_BWUPTcOlkrtyRPwIVrUsKPG4LN3eL6nN-removebg-preview 1.png",
      name: "Baguette",
      price: "$25",
      info: "Flour, water, yeast. Contains gluten.",
    },
    {
      img: "/images/240_F_811650375_Gh9LdTs3v7gYR5BJyFGEdy8D6c3mmR4o-removebg-preview 1.png",
      name: "Croissant",
      price: "$30",
      info: "Butter, flour. Contains dairy & gluten.",
    },
    {
      img: "/images/240_F_292903339_fwMo8C8RQCPvCqeaphKVVnmZMUBF1cxW-removebg-preview 1.png",
      name: "Sourdough",
      price: "$20",
      info: "Fermented dough. Contains gluten.",
    },
    {
      img: "/images/240_F_52954465_71BU4c18YSkFEAt8duzFR37eNBVuEP4C-removebg-preview 1.png",
      name: "Whole Wheat",
      price: "$15",
      info: "Whole grain flour. Contains gluten.",
    },
    {
      img: "/images/240_F_704728810_JFFKbwZHU3u4ROeDaauuTRv7YCnaWnwm-removebg-preview 1.png",
      name: "Rye Bread",
      price: "$18",
      info: "Rye flour. Contains gluten.",
    },
    {
      img: "/images/240_F_704728810_JFFKbwZHU3u4ROeDaauuTRv7YCnaWnwm-removebg-preview 1.png",
      name: "Milk Bread",
      price: "$22",
      info: "Milk, butter. Contains dairy & gluten.",
    },
  ];

  return (
    <>
      {/* Title */}
      <div className="flex justify-center items-center py-10">
        <img
          src="/images/Top Products.png"
          alt="Top Products"
          className="max-w-[260px]"
        />
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-y-3 gap-x-3 w-[50%]">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-[270px] h-[340px] bg-cover bg-center flex flex-col justify-between p-4 font-sans"
              style={{ backgroundImage: "url('/images/Rectangle 72.png')" }}
            >
              {/* Product Image */}
              <div className="flex justify-center items-center h-[55%]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="text-white">
                <div className="flex justify-between items-center relative">
                  <span className="text-lg font-semibold">{product.price}</span>
                  <div className="group relative">
                    <div className="w-5 h-5 flex items-center justify-center bg-red-400 text-white rounded-full text-xs cursor-pointer">
                      !
                    </div>
                    <div className="absolute bottom-7 right-0 hidden group-hover:block bg-white text-black text-xs p-2 shadow w-[160px]">
                      {product.info}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-medium">{product.name}</span>
                  <button className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 text-sm">
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Topproducts;
