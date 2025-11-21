import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl text-blue-600 hover:text-blue-700 transition"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <span className="hidden sm:inline">ShipHub</span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-sm mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="배를 검색하세요..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Search Icon (Mobile) */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition">
              <Search size={20} />
            </button>

            {/* MY Area - User Menu */}
            <Link
              to="/detail"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition"
            >
              <User size={20} />
              <span className="hidden sm:inline text-sm font-medium">MY</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-gray-200">
              <div className="py-2 space-y-1">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  홈
                </Link>
                <Link
                  to="/detail"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  배 목록
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* GNB Spacing */}
      <div className="h-16"></div>
    </>
  );
}
