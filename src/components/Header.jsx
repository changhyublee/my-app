import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/detail" className="hover:text-gray-300 transition">
              Detail
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
