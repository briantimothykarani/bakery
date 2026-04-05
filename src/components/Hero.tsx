function Hero() {
  return (
    <div className="bg-[url('/images/Rectangle%2010.png')] bg-cover bg-center h-[70vh] flex items-center">
      <div className="text-left text-white space-y-4 pl-10 md:pl-20">
        <div className="flex justify-center items-center py-10">
          <img
            src="/images/Delicious Cafe.png"
            alt="Top Products"
            className="max-w-[260px]"
          />
        </div>
        <div className="flex justify-center items-center py-10">
          <img
            src="/images/Sweet Treats, Perfect Eats.png"
            alt="Top Products"
            className="max-w-[260px]"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-red-700 w-40 h-12 text-white font-mono px-4 py-2 text-center cursor-pointer rounded hover:bg-red-800">
            Shop Now
          </button>
          <button className="bg-white border border-gray-300 w-40 h-12 text-black font-mono px-4 py-2 text-center cursor-pointer rounded hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
