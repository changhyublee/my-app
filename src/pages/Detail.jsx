import { useNavigate } from 'react-router-dom';

export default function Detail() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Detail Page</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow">
        <p className="text-gray-600 mb-4">
          This is the detail page. You can add more content here.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
