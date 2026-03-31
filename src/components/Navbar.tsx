function Navbar() {
  return (
    <nav className="bg-transparent px-6 py-4 text-black text-2xl font-sans sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <p className="text-yellow-500 font-mono text-2xl cursor-pointer">
          KeithStone Bakery
        </p>

        {/* Navigation links */}
        <div className="flex gap-8 text-black cursor-pointer">
          <a
            className="hover:text-yellow-500 hover:underline font-sans transition duration-200"
            href=""
          >
            Home
          </a>
          <a
            className="hover:text-yellow-500 hover:underline font-sans transition duration-200"
            href=""
          >
            Blog
          </a>
          <a
            className="hover:text-yellow-500 hover:underline font-sans transition duration-200"
            href=""
          >
            Contact Us
          </a>
          <a
            className="hover:text-yellow-500 hover:underline font-sans transition duration-200"
            href=""
          >
            Services
          </a>
        </div>

        {/* Right section / placeholder */}
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
