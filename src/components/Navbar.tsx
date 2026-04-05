function Navbar() {
  return (
    <nav className="bg-transparent px-6 py-4 text-black text-2xl font-sans sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <img
          src="/images/Modrino__2_-removebg-preview 1 (1).png"
          alt="Keithston Logo"
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
        <div className="flex gap-8 text-white font-sans cursor-pointer">
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
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
