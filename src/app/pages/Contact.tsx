import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Контакты</h1>
            <p className="text-xl text-gray-300">
              Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-8 hover:shadow-lg hover:border-gray-900 transition-all">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Телефон</h3>
              <p className="text-gray-600 mb-4">Рабочий мобильный номер:</p>
              <a
                href="tel:89094798466"
                className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
              >
                8 (909) 479-84-66
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-8 hover:shadow-lg hover:border-gray-900 transition-all">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Email</h3>
              <p className="text-gray-600 mb-4">Электронная почта:</p>
              <a
                href="mailto:accounting.officeee@yandex.ru"
                className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors break-all"
              >
                accounting.officeee@yandex.ru
              </a>
            </div>

            {/* Address */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-8 hover:shadow-lg hover:border-gray-900 transition-all md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Адрес</h3>
              <p className="text-gray-600 mb-4">Юридический адрес:</p>
              <p className="text-gray-800">
                108814 г. Москва, Сосенское п., Коммунарка п, Липовый парк, дом № 11, квартира 297
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-xl p-8 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl">Режим работы</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 mb-2">Понедельник - Пятница:</p>
                <p className="text-xl font-semibold">09:00 - 18:00</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">Суббота - Воскресенье:</p>
                <p className="text-xl font-semibold">По предварительной договоренности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl mb-4 text-gray-900">Форма обратной связи</h2>
              <p className="text-gray-600">
                Отправьте нам сообщение через электронную почту
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тема обращения
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors">
                  <option value="">Выберите тему</option>
                  <option value="accounting">Бухгалтерские услуги</option>
                  <option value="it-development">IT-разработка</option>
                  <option value="it-consulting">IT-консалтинг</option>
                  <option value="training">Обучение</option>
                  <option value="retail">Розничная торговля</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-colors resize-none"
                  placeholder="Опишите ваш вопрос или предложение..."
                ></textarea>
              </div>

              <a
                href="mailto:accounting.officeee@yandex.ru"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors text-lg"
              >
                <Send className="w-5 h-5" />
                Отправить сообщение на email
              </a>

              <p className="text-sm text-gray-500 text-center">
                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center text-gray-900">Как с нами связаться</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Позвоните нам</h3>
              <p className="text-gray-600 text-sm mb-3">
                Свяжитесь по рабочему мобильному номеру для быстрой консультации
              </p>
              <a
                href="tel:89094798466"
                className="text-gray-900 hover:text-gray-700 font-semibold"
              >
                8 (909) 479-84-66
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Напишите email</h3>
              <p className="text-gray-600 text-sm mb-3">
                Отправьте подробное описание вашего запроса на электронную почту
              </p>
              <a
                href="mailto:accounting.officeee@yandex.ru"
                className="text-gray-900 hover:text-gray-700 font-semibold break-all"
              >
                accounting.officeee@yandex.ru
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Посетите офис</h3>
              <p className="text-gray-600 text-sm mb-3">
                Личная встреча по предварительной договоренности
              </p>
              <p className="text-gray-900 font-semibold text-sm">
                г. Москва, Коммунарка
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}