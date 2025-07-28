import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent/20 to-sky/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-playfair font-bold text-gray-900">
              Дуэт Камянчук
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                { label: 'Главная', id: 'hero' },
                { label: 'О дуэте', id: 'about' },
                { label: 'Творчество', id: 'works' },
                { label: 'Концерты', id: 'concerts' },
                { label: 'Медиа', id: 'media' },
                { label: 'Контакты', id: 'contacts' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6">
              Творческий дуэт
              <span className="block text-primary">Ирины и Надежды</span>
              <span className="block text-secondary">Камянчук</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Уникальный союз поэтического слова и музыкального искусства. 
              Надежда Камянчук — поэт, член Союза писателей России. 
              Ирина — композитор и исполнитель.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              >
                Узнать о дуэте
              </Button>
              <Button 
                onClick={() => scrollToSection('works')}
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 text-lg"
              >
                Послушать творчество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            О дуэте
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src="/img/df8d0077-8d8f-4008-8ccf-7c7b760c24b8.jpg"
                alt="Творческий дуэт Ирины и Надежды Камянчук"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <div className="space-y-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Feather" className="text-primary mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                          Надежда Камянчук
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Поэт, член Союза писателей России. Её стихи наполнены глубокой философией, 
                          тонкой лирикой и проникновенным взглядом на мир. Творчество Надежды 
                          отражает богатство человеческих переживаний и красоту русского слова.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Music" className="text-secondary mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                          Ирина Камянчук
                        </h3>
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
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 px-6 bg-gradient-to-r from-accent/30 to-sky/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Творчество
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-scale-in hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Icon name="BookOpen" className="text-primary mb-4" size={32} />
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  Поэтические сборники
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "Отражения души" (2021)</li>
                  <li>• "Времена года сердца" (2022)</li>
                  <li>• "Между строк" (2023)</li>
                  <li>• "Новые грани" (2024)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Icon name="Headphones" className="text-secondary mb-4" size={32} />
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  Музыкальные альбомы
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "Звуки поэзии" (2021)</li>
                  <li>• "Мелодии слов" (2022)</li>
                  <li>• "Симфония чувств" (2023)</li>
                  <li>• "Гармония стиха" (2024)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <img
              src="/img/8f128f36-83d6-4663-a28a-23b6e4a856ec.jpg"
              alt="Музыкальные ноты и поэзия"
              className="rounded-lg shadow-xl mx-auto mb-8 max-w-2xl w-full h-64 object-cover"
            />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Наше творчество — это диалог между словом и музыкой, где каждое стихотворение 
              обретает новую жизнь в мелодии, а каждая мелодия раскрывается через поэтическое слово.
            </p>
          </div>
        </div>
      </section>

      {/* Concerts Section */}
      <section id="concerts" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Концерты и выступления
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
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
              <Card key={index} className={`p-6 ${concert.status === 'upcoming' ? 'border-l-4 border-l-primary bg-primary/5' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-lg font-playfair font-semibold text-gray-900 mb-1">
                        {concert.event}
                      </h3>
                      <p className="text-gray-600 mb-2">{concert.venue}</p>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-500">{concert.date}</span>
                      </div>
                    </div>
                    {concert.status === 'upcoming' && (
                      <Button className="mt-4 md:mt-0 bg-primary hover:bg-primary/90">
                        Забронировать
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Медиа
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Play" className="text-primary mb-4 mx-auto" size={48} />
                <h3 className="text-xl font-playfair font-semibold mb-2">Видео</h3>
                <p className="text-gray-600 mb-4">Записи выступлений и интервью</p>
                <Button variant="outline">Смотреть</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Mic" className="text-secondary mb-4 mx-auto" size={48} />
                <h3 className="text-xl font-playfair font-semibold mb-2">Аудио</h3>
                <p className="text-gray-600 mb-4">Музыкальные композиции и чтения</p>
                <Button variant="outline">Слушать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Camera" className="text-navy mb-4 mx-auto" size={48} />
                <h3 className="text-xl font-playfair font-semibold mb-2">Фото</h3>
                <p className="text-gray-600 mb-4">Галерея с концертов и мероприятий</p>
                <Button variant="outline">Посмотреть</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                  Свяжитесь с нами
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <span className="text-gray-700">info@duet-kamyanchuk.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <span className="text-gray-700">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <span className="text-gray-700">Москва, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                  Следите за нами
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Instagram" className="text-secondary" size={20} />
                    <span className="text-gray-700">@duet_kamyanchuk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Youtube" className="text-secondary" size={20} />
                    <span className="text-gray-700">Дуэт Камянчук</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Facebook" className="text-secondary" size={20} />
                    <span className="text-gray-700">Творческий дуэт Камянчук</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">
                  Подписаться на новости
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">Дуэт Камянчук</h3>
          <p className="text-gray-400 mb-4">
            Творческий союз поэзии и музыки
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Heart" className="text-primary" size={20} />
            <Icon name="Music" className="text-secondary" size={20} />
            <Icon name="Feather" className="text-coral" size={20} />
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 Творческий дуэт Ирины и Надежды Камянчук. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;