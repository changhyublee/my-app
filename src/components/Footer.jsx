import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <h3 className="text-white text-lg font-bold">ShipHub</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              배 예약 서비스의 새로운 기준을 제시합니다.
            </p>
            <p className="text-xs text-gray-500">
              © 2025 ShipHub. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  홈
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  배 검색
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  예약하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  내 예약
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  채용정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  뉴스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  1:1 상담
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  공지사항
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-6">
            <a href="#" className="hover:text-blue-400 transition">
              이용약관
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-blue-400 transition">
              개인정보 처리방침
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-blue-400 transition">
              이용자 보호정책
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-blue-400 transition">
              고객문의
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-xs text-gray-500 space-y-1">
            <p>주소: 서울시 강남구 테헤란로 123</p>
            <p>전화: 1234-5678 | 이메일: support@shiphub.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <p>ShipHub | 배 예약 서비스 | All rights reserved © 2025</p>
        </div>
      </div>
    </footer>
  );
}
