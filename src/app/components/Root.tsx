import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex flex-col">
              <h1 className="text-xl font-semibold text-gray-900">ИП Магомедова Назира</h1>
              <p className="text-sm text-gray-600">Официальная деятельность</p>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Главная
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive("/about")
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                О компании
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive("/services")
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Услуги и цены
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive("/contact")
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Контакты
              </Link>
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                isActive("/about")
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              О компании
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                isActive("/services")
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Услуги и цены
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                isActive("/contact")
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">ИП Магомедова Назира</h3>
              <p className="text-sm text-gray-300">
                Официальная деятельность в области бухгалтерского учета, IT-консалтинга и розничной торговли
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:89094798466" className="hover:text-white transition-colors">
                    8 (909) 479-84-66
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:accounting.officeee@yandex.ru" className="hover:text-white transition-colors">
                    accounting.officeee@yandex.ru
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Адрес</h3>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  108814 г. Москва, Сосенское п., Коммунарка п, Липовый парк, дом № 11, квартира 297
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© 2026 ИП Магомедова Назира. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}