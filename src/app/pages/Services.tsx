import { FileText, Code, Briefcase, GraduationCap, TrendingUp, ShoppingCart } from "lucide-react";

export default function Services() {
  const services = [
    {
      category: "Бухгалтерские услуги",
      icon: FileText,
      color: "blue",
      items: [
        { name: "Ведение ИП (УСН)", price: "от 35 000 ₽ / мес." },
        { name: "Ведение ООО (до 20 операций)", price: "от 50 000 ₽ / мес." },
        { name: "Нулевая отчётность", price: "6 000 ₽" },
        { name: "Сдача отчётности", price: "8 000 ₽" },
        { name: "Налоговая консультация", price: "6 500 ₽ / час" },
        { name: "Финансовый аудит", price: "от 55 000 ₽" },
      ],
    },
    {
      category: "IT-разработка",
      icon: Code,
      color: "indigo",
      items: [
        { name: "Сайт-визитка", price: "от 52 000 ₽" },
        { name: "Корпоративный сайт", price: "от 120 000 ₽" },
        { name: "Автоматизация учёта", price: "от 180 000 ₽" },
      ],
    },
    {
      category: "IT-консалтинг",
      icon: Briefcase,
      color: "purple",
      items: [
        { name: "Консультация", price: "5 500 ₽ / час" },
        { name: "Разработка IT-стратегии", price: "от 75 000 ₽" },
        { name: "Подбор ПО", price: "от 18 000 ₽" },
      ],
    },
    {
      category: "Обучение пользователей",
      icon: GraduationCap,
      color: "green",
      items: [
        { name: "Индивидуальное обучение", price: "6 000 ₽ / занятие" },
        { name: "Корпоративное обучение", price: "от 45 000 ₽" },
      ],
    },
    {
      category: "Информационные услуги",
      icon: TrendingUp,
      color: "pink",
      items: [
        { name: "Подготовка аналитического обзора", price: "от 28 000 ₽" },
        { name: "Мониторинг рынка", price: "от 32 000 ₽ / мес." },
      ],
    },
    {
      category: "Торговля (розница)",
      icon: ShoppingCart,
      color: "orange",
      items: [
        { name: "МФУ", price: "от 26 000 ₽", subcategory: "Офисная техника" },
        { name: "ТВ", price: "от 39 000 ₽", subcategory: "Аудио/видео" },
        { name: "Стиральные машины", price: "от 43 000 ₽", subcategory: "Бытовая техника" },
        { name: "Офисная мебель", price: "от 15 000 ₽", subcategory: "Мебель" },
        { name: "Фотооборудование", price: "от 64 000 ₽", subcategory: "Фотоаппаратура" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Услуги и цены</h1>
            <p className="text-xl text-gray-300">
              Прозрачный прайс-лист на все виды услуг и товаров. Цены актуальны на март 2026 года.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden hover:shadow-xl hover:border-gray-900 transition-all"
                >
                  <div className="bg-gray-900 text-white p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8" />
                      <h2 className="text-2xl">{service.category}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-start gap-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            {item.subcategory && (
                              <p className="text-sm text-gray-500 mt-1">{item.subcategory}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900 whitespace-nowrap">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 border border-gray-300 rounded-xl p-8">
            <h2 className="text-2xl mb-4 text-gray-900">Дополнительная информация</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                • Все цены указаны в российских рублях и могут быть изменены без предварительного уведомления
              </p>
              <p>
                • Стоимость услуг может варьироваться в зависимости от сложности и объема работ
              </p>
              <p>
                • Для получения точной стоимости и индивидуального предложения свяжитесь с нами
              </p>
              <p>
                • Возможна оплата безналичным расчетом для юридических лиц
              </p>
              <p>
                • При заключении договора на комплексное обслуживание предоставляются специальные условия
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Нужна консультация?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения условий сотрудничества и получения индивидуального предложения
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:89094798466"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg"
            >
              Позвонить: 8 (909) 479-84-66
            </a>
            <a
              href="mailto:accounting.officeee@yandex.ru"
              className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-lg border border-gray-500"
            >
              Написать на email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}