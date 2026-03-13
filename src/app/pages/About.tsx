import { FileCheck, Building2 } from "lucide-react";

export default function About() {
  const okvedActivities = [
    {
      code: "69.20",
      description: "Деятельность по оказанию услуг в области бухгалтерского учета, по проведению финансового аудита, по налоговому консультированию",
    },
    {
      code: "47.19",
      description: "Торговля розничная прочая в неспециализированных магазинах",
    },
    {
      code: "47.41.4",
      description: "Торговля розничная офисными машинами и оборудованием в специализированных магазинах",
    },
    {
      code: "47.43",
      description: "Торговля розничная аудио- и видеотехникой в специализированных магазинах",
    },
    {
      code: "47.54",
      description: "Торговля розничная бытовыми электротоварами в специализированных магазинах",
    },
    {
      code: "47.59",
      description: "Торговля розничная мебелью, осветительными приборами и прочими бытовыми изделиями в специализированных магазинах",
    },
    {
      code: "47.59.1",
      description: "Торговля розничная мебелью в специализированных магазинах",
    },
    {
      code: "47.61",
      description: "Торговля розничная книгами в специализированных магазинах",
    },
    {
      code: "47.78.1",
      description: "Торговля розничная фотоаппаратурой, оптическими приборами и средствами измерений, кроме очков, в специализированных магазинах",
    },
    {
      code: "47.78.9",
      description: "Торговля розничная непродовольственными товарами, не включенными в другие группировки, в специализированных магазинах",
    },
    {
      code: "62.01",
      description: "Разработка компьютерного программного обеспечения",
    },
    {
      code: "62.02",
      description: "Деятельность консультативная и работы в области компьютерных технологий",
    },
    {
      code: "62.02.3",
      description: "Деятельность по обучению пользователей",
    },
    {
      code: "62.02.9",
      description: "Деятельность консультативная в области компьютерных технологий прочая",
    },
    {
      code: "62.09",
      description: "Деятельность, связанная с использованием вычислительной техники и информационных технологий, прочая",
    },
    {
      code: "63.99.2",
      description: "Деятельность по оказанию услуг по составлению обзоров новостей, услуг по подборке печатных изданий и подобной информации",
    },
    {
      code: "68.20",
      description: "Аренда и управление собственным или арендованным недвижимым имуществом",
    },
    {
      code: "69.20.2",
      description: "Деятельность по оказанию услуг в области бухгалтерского учета",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">О компании</h1>
            <p className="text-xl text-gray-300">
              ИП Магомедова Назира — официальный субъект предпринимательской деятельности, предоставляющий широкий спектр профессиональных услуг
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 rounded-xl p-8 border border-gray-300">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-gray-900" />
                <h2 className="text-2xl text-gray-900">Реквизиты</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Полное наименование:</p>
                  <p>Индивидуальный предприниматель Магомедова Назира</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Юридический адрес:</p>
                  <p>108814 г. Москва, Сосенское п., Коммунарка п, Липовый парк, дом № 11, квартира 297</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-white" />
                <h2 className="text-2xl">Официальная деятельность</h2>
              </div>
              <p className="text-gray-300">
                Наша деятельность полностью соответствует требованиям законодательства Российской Федерации. Все виды деятельности официально зарегистрированы согласно Общероссийскому классификатору видов экономической деятельности (ОКВЭД).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OKVED Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Виды деятельности по ОКВЭД</h2>
            <p className="text-lg text-gray-600">
              Полный перечень зарегистрированных видов экономической деятельности
            </p>
          </div>

          <div className="space-y-3">
            {okvedActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg p-5 hover:shadow-md hover:border-gray-900 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-gray-900 text-white rounded-md font-mono text-sm font-semibold">
                      {activity.code}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center text-gray-900">Основные направления деятельности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-gray-900 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Бухгалтерия и аудит</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Бухгалтерский учет</li>
                <li>• Финансовый аудит</li>
                <li>• Налоговое консультирование</li>
                <li>• Сдача отчетности</li>
              </ul>
            </div>
            <div className="border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-gray-900 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IT-услуги</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Разработка ПО</li>
                <li>• IT-консультирование</li>
                <li>• Обучение пользователей</li>
                <li>• Автоматизация учета</li>
              </ul>
            </div>
            <div className="border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-gray-900 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Розничная торговля</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Офисная техника</li>
                <li>• Аудио/видео техника</li>
                <li>• Бытовая техника</li>
                <li>• Мебель и фотоаппаратура</li>
              </ul>
            </div>
            <div className="border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-gray-900 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Информационные услуги</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Аналитические обзоры</li>
                <li>• Мониторинг рынка</li>
                <li>• Подборка информации</li>
                <li>• Составление отчетов</li>
              </ul>
            </div>
            <div className="border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-gray-900 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Обучение</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Индивидуальные занятия</li>
                <li>• Корпоративное обучение</li>
                <li>• Работа с ПО</li>
                <li>• Повышение квалификации</li>
              </ul>
            </div>
            <div className="border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-gray-900 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Недвижимость</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Аренда имущества</li>
                <li>• Управление недвижимостью</li>
                <li>• Консультации</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}