import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function NewPartnerShips() {
  const navigate = useNavigate();

  // Sample data - sorted by latest registration
  const newShips = [
    {
      id: 14,
      name: '새로운호',
      port: '부산항',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=300&h=300&fit=crop',
      registeredDate: '2025-11-20',
    },
    {
      id: 15,
      name: '신선호',
      port: '인천항',
      image: 'https://images.unsplash.com/photo-1574080566159-a0fdc0563b5c?w=300&h=300&fit=crop',
      registeredDate: '2025-11-19',
    },
    {
      id: 16,
      name: '미래호',
      port: '울산항',
      image: 'https://images.unsplash.com/photo-1570555886111-e80fcca6a029?w=300&h=300&fit=crop',
      registeredDate: '2025-11-18',
    },
    {
      id: 17,
      name: '희망호',
      port: '목포항',
      image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=300&h=300&fit=crop',
      registeredDate: '2025-11-17',
    },
    {
      id: 18,
      name: '성공호',
      port: '여수항',
      image: 'https://images.unsplash.com/photo-1552574605-5fefe8c9ef14?w=300&h=300&fit=crop',
      registeredDate: '2025-11-16',
    },
    {
      id: 19,
      name: '발전호',
      port: '부산항',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=300&h=300&fit=crop',
      registeredDate: '2025-11-15',
    },
  ];

  const handleShipClick = (ship) => {
    navigate(`/detail/${ship.id}`, { state: { ship } });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">신규 제휴 배</h2>
          <p className="text-gray-600">최신 등록된 배들을 만나보세요</p>
        </div>

        {/* Ships Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newShips.map((ship) => (
            <div
              key={ship.id}
              onClick={() => handleShipClick(ship)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56 bg-gray-200">
                <img
                  src={ship.image}
                  alt={ship.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
                {/* Badge */}
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </div>
              </div>

              {/* Info Container */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{ship.name}</h3>

                {/* Port Name */}
                <p className="text-blue-600 font-medium mt-2">{ship.port}</p>

                {/* Registration Date */}
                <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                  <Calendar size={16} />
                  <span>{formatDate(ship.registeredDate)}</span>
                </div>

                {/* Button */}
                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-medium">
                  더보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
