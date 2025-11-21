import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PortShips() {
  const navigate = useNavigate();
  const [selectedPort, setSelectedPort] = useState('부산항');

  // Sample data
  const ports = ['부산항', '인천항', '울산항', '목포항', '여수항'];

  const shipsByPort = {
    부산항: [
      { id: 1, name: '부산호', image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=300&h=300&fit=crop' },
      { id: 2, name: '대양호', image: 'https://images.unsplash.com/photo-1552574605-5fefe8c9ef14?w=300&h=300&fit=crop' },
      { id: 3, name: '해양호', image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=300&h=300&fit=crop' },
      { id: 4, name: '황금호', image: 'https://images.unsplash.com/photo-1574080566159-a0fdc0563b5c?w=300&h=300&fit=crop' },
    ],
    인천항: [
      { id: 5, name: '인천호', image: 'https://images.unsplash.com/photo-1570555886111-e80fcca6a029?w=300&h=300&fit=crop' },
      { id: 6, name: '서해호', image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=300&h=300&fit=crop' },
      { id: 7, name: '평양호', image: 'https://images.unsplash.com/photo-1552574605-5fefe8c9ef14?w=300&h=300&fit=crop' },
    ],
    울산항: [
      { id: 8, name: '울산호', image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=300&h=300&fit=crop' },
      { id: 9, name: '태양호', image: 'https://images.unsplash.com/photo-1574080566159-a0fdc0563b5c?w=300&h=300&fit=crop' },
    ],
    목포항: [
      { id: 10, name: '목포호', image: 'https://images.unsplash.com/photo-1570555886111-e80fcca6a029?w=300&h=300&fit=crop' },
      { id: 11, name: '남해호', image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=300&h=300&fit=crop' },
    ],
    여수항: [
      { id: 12, name: '여수호', image: 'https://images.unsplash.com/photo-1552574605-5fefe8c9ef14?w=300&h=300&fit=crop' },
      { id: 13, name: '순천호', image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=300&h=300&fit=crop' },
    ],
  };

  const currentShips = shipsByPort[selectedPort] || [];

  const handleShipClick = (ship) => {
    navigate(`/detail/${ship.id}`, { state: { ship, port: selectedPort } });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">항구별 배 리스트</h2>

        {/* Port Tabs */}
        <div className="mb-8 border-b border-gray-200 overflow-x-auto">
          <div className="flex gap-4 min-w-min">
            {ports.map((port) => (
              <button
                key={port}
                onClick={() => setSelectedPort(port)}
                className={`px-6 py-3 font-medium whitespace-nowrap transition border-b-2 ${
                  selectedPort === port
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent hover:text-gray-800'
                }`}
              >
                {port}
              </button>
            ))}
          </div>
        </div>

        {/* Ship Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentShips.map((ship) => (
            <div
              key={ship.id}
              onClick={() => handleShipClick(ship)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer transform hover:scale-105"
            >
              <div className="relative pb-full overflow-hidden h-56">
                <img
                  src={ship.image}
                  alt={ship.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{ship.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{selectedPort}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {currentShips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">해당 항구에 등록된 배가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}
