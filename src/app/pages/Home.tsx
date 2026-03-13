import { Link } from "react-router";
import { FileText, Code, ShoppingBag, GraduationCap, TrendingUp, CheckCircle, Newspaper } from "lucide-react";

export default function Home() {
  const mainServices = [
    {
      icon: FileText,
      title: "Бухгалтерские услуги",
      description: "Ведение учета, отчетность, налоговое консультирование и финансовый аудит",
      color: "gray",
    },
    {
      icon: Code,
      title: "IT-разработка",
      description: "Разработка сайтов, корпоративных порталов и автоматизация учета",
      color: "gray",
    },
    {
      icon: TrendingUp,
      title: "IT-консалтинг",
      description: "Консультации, разработка стратегий и подбор программного обеспечения",
      color: "gray",
    },
    {
      icon: GraduationCap,
      title: "Обучение пользователей",
      description: "Индивидуальное и корпоративное обучение работе с программами",
      color: "gray",
    },
    {
      icon: Newspaper,
      title: "Информационные услуги",
      description: "Аналитические обзоры, мониторинг рынка и подборка информации",
      color: "gray",
    },
    {
      icon: ShoppingBag,
      title: "Розничная торговля",
      description: "Офисная техника, аудио/видео, бытовая техника, мебель и фотоаппаратура",
      color: "gray",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              ИП Магомедова Назира
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Официальная деятельность в области бухгалтерского учета, IT-услуг и розничной торговли
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Услуги и цены
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors border border-gray-500"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексное обслуживание бизнеса: от бухгалтерии до IT-решений и поставки оборудования
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-xl hover:border-gray-900 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
            >
              Смотреть все услуги и цены
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Официальная деятельность</h3>
                <p className="text-gray-600">
                  Зарегистрированное ИП с полным пакетом разрешительных документов
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Широкий спектр услуг</h3>
                <p className="text-gray-600">
                  От бухгалтерии до IT-разработки и розничной торговли — всё в одном месте
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Прозрачные цены</h3>
                <p className="text-gray-600">
                  Четкий прайс-лист без скрытых платежей и дополнительных комиссий
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Профессионализм</h3>
                <p className="text-gray-600">
                  Опыт в бухгалтерском учете, IT-технологиях и коммерческой деятельности
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">
                  Учитываем специфику вашего бизнеса и предлагаем оптимальные решения
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Оперативность</h3>
                <p className="text-gray-600">
                  Быстрое реагирование на запросы и соблюдение установленных сроков
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Готовы начать сотрудничество?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения деталей и получения консультации
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}