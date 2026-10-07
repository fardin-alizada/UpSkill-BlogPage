function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="text-2xl font-bold text-sky-500">
          UPSKILL
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a href="#" className="text-sm text-gray-600 hover:text-sky-500">
            Home
          </a>

          <a href="#" className="text-sm text-gray-600 hover:text-sky-500">
            Courses
          </a>

          <a href="#" className="text-sm text-gray-600 hover:text-sky-500">
            Testimonials
          </a>

          <a href="#" className="text-sm text-gray-600 hover:text-sky-500">
            Scholarship
          </a>

          <a href="#" className="text-sm text-gray-600 hover:text-sky-500">
            About
          </a>

          <a href="#" className="text-sm text-gray-600 hover:text-sky-500">
            Partners
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-full border border-gray-200 px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
            Log in
          </button>

          <button className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600">
            Start Learning
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;