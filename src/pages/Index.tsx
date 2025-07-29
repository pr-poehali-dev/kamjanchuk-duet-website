import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50">
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Icon name="Music" className="text-purple-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-800">Дуэт Камянчук</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { label: 'Главная', id: 'home' },
                { label: 'О нас', id: 'about' },
                { label: 'Творчество', id: 'works' },
                { label: 'Концерты', id: 'concerts' },
                { label: 'Контакты', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-600 hover:text-purple-600 transition-colors font-medium ${
                    activeSection === item.id ? 'text-purple-600 border-b-2 border-purple-600' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/004c555d-f440-4f33-bc6a-d2a9f1836897.jpg" 
            alt="Concert hall" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Творческий дуэт
            <span className="block text-purple-600 mt-2">Ирины и Надежды Камянчук</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Уникальное сочетание поэтического слова и музыкального искусства. 
            Надежда Камянчук — поэт, член Союза писателей России. 
            Ирина — композитор и исполнитель.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              Узнать больше
            </Button>
            <Button 
              onClick={() => scrollToSection('works')}
              variant="outline" 
              className="border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 text-lg"
            >
              Наше творчество
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">О дуэте</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img/65377a4b-54de-4cfb-9c76-5f59b1ae0171.jpg"
                alt="Дуэт на сцене"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-8">
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Feather" className="text-purple-500 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Надежда Камянчук</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Поэт, член Союза писателей России. Её стихи наполнены глубокой философией, 
                        тонкой лирикой и проникновенным взглядом на мир. Творчество Надежды 
                        отражает богатство человеческих переживаний и красоту русского слова.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Music" className="text-amber-500 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Ирина Камянчук</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Талантливый композитор и исполнитель, создающая музыкальные произведения, 
                        которые идеально дополняют поэтические образы. Её мелодии способны 
                        передать всю глубину и эмоциональность стихотворного слова.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-6 bg-gradient-to-r from-purple-50 to-amber-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Наше творчество</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="BookOpen" className="text-purple-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Поэтические сборники</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    "Отражения души" (2021)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    "Времена года сердца" (2022)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    "Между строк" (2023)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    "Новые грани" (2024)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="Headphones" className="text-amber-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Музыкальные альбомы</h3>
                <ul className="space-y-3 text-gray-600 my-1.5">
                  <li className="flex items-center gap-2">"Созвездие" (2007)</li>
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Мелодии слов" (2022)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Симфония чувств" (2023)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Гармония стиха" (2024)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <blockquote className="text-xl text-gray-700 italic max-w-4xl mx-auto">
              "Наше творчество — это диалог между словом и музыкой, где каждое стихотворение 
              обретает новую жизнь в мелодии, а каждая мелодия раскрывается через поэтическое слово."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Concerts Section */}
      <section id="concerts" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Концерты и выступления</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                date: "15 марта 2024",
                venue: "Московский дом литераторов",
                event: "Вечер поэзии и музыки 'Весенние мотивы'",
                status: "upcoming"
              },
              {
                date: "28 февраля 2024",
                venue: "Центральная библиотека им. Пушкина",
                event: "Творческая встреча 'Союз слова и музыки'",
                status: "past"
              },
              {
                date: "20 января 2024",
                venue: "Культурный центр 'Меридиан'",
                event: "Презентация нового альбома 'Гармония стиха'",
                status: "past"
              }
            ].map((concert, index) => (
              <Card key={index} className={`shadow-lg ${concert.status === 'upcoming' ? 'border-l-4 border-l-green-500 bg-green-50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{concert.event}</h3>
                      <p className="text-gray-600 mb-2">{concert.venue}</p>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-purple-500" />
                        <span className="text-sm text-purple-600 font-medium">{concert.date}</span>
                      </div>
                    </div>
                    {concert.status === 'upcoming' && (
                      <Button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700">
                        Забронировать билет
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-gray-100 to-purple-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-purple-600" size={20} />
                    <span className="text-gray-600">info@duet-kamyanchuk.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-purple-600" size={20} />
                    <span className="text-gray-600">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-purple-600" size={20} />
                    <span className="text-gray-600">Москва, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Социальные сети</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Instagram" className="text-purple-600" size={20} />
                    <span className="text-gray-600">@duet_kamyanchuk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Youtube" className="text-purple-600" size={20} />
                    <span className="text-gray-600">Дуэт Камянчук</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Facebook" className="text-purple-600" size={20} />
                    <span className="text-gray-600">Творческий дуэт Камянчук</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Подписаться на новости
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Дуэт Камянчук</h3>
          <p className="text-gray-400 mb-6">Творческий союз поэзии и музыки</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Icon name="Heart" className="text-purple-400" size={24} />
            <Icon name="Music" className="text-amber-400" size={24} />
            <Icon name="Feather" className="text-purple-400" size={24} />
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Творческий дуэт Ирины и Надежды Камянчук. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;