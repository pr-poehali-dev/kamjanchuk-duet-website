import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Яркий музыкальный фон */}
      <div className="fixed inset-0 dynamic-bg opacity-25 -z-10"></div>
      <div className="fixed inset-0 -z-10">
        <img 
          src="/img/d8f2e125-c6ce-437c-89ec-f0e70c0cce5e.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b-2 border-primary/40 energy-glow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-playfair font-bold text-transparent bg-clip-text artistic-gradient creative-text-shadow musical-pulse">
              🎵 Дуэт Камянчук 🎵
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                { label: '🏠 Главная', id: 'hero' },
                { label: '👥 О дуэте', id: 'about' },
                { label: '🎵 Творчество', id: 'works' },
                { label: '🎤 Концерты', id: 'concerts' },
                { label: '📺 Медиа', id: 'media' },
                { label: '📞 Контакты', id: 'contacts' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-primary transition-colors font-bold creative-hover musical-pulse text-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden creative-hover border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6 creative-text-shadow">
                Творческий дуэт
                <span className="block text-transparent bg-clip-text artistic-gradient">Ирины и Надежды</span>
                <span className="block text-secondary handwritten text-6xl md:text-8xl">Камянчук</span>
              </h1>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 floating-element">🎵</div>
              <div className="absolute -bottom-2 -left-6 text-4xl opacity-30 floating-element" style={{animationDelay: '2s'}}>✨</div>
            </div>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed relative">
              <span className="absolute -top-2 -left-4 text-3xl text-primary/40 font-dancing">"</span>
              Уникальный союз поэтического слова и музыкального искусства. 
              Надежда Камянчук — поэт, член Союза писателей России. 
              Ирина — композитор и исполнитель.
              <span className="absolute -bottom-6 -right-4 text-3xl text-secondary/40 font-dancing">"</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg creative-hover shadow-xl"
              >
                Узнать о дуэте
              </Button>
              <Button 
                onClick={() => scrollToSection('works')}
                variant="outline" 
                className="border-2 border-secondary text-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white px-8 py-3 text-lg creative-hover shadow-lg"
              >
                🎵 Послушать творчество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gradient-to-br from-white/95 to-accent/5 relative overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-10 floating-element">🎭</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-10 floating-element" style={{animationDelay: '3s'}}>📖</div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-transparent bg-clip-text artistic-gradient mb-12 creative-text-shadow">
            О дуэте
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src="/img/df8d0077-8d8f-4008-8ccf-7c7b760c24b8.jpg"
                alt="Творческий дуэт Ирины и Надежды Камянчук"
                className="rounded-lg shadow-xl w-full h-96 object-cover creative-hover"
              />
            </div>
            <div className="animate-fade-in">
              <div className="space-y-8">
                <Card className="border-l-4 border-l-primary creative-hover bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Feather" className="text-primary mt-1 floating-element" size={24} />
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                          <span className="handwritten text-2xl text-primary">Надежда</span> Камянчук
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
                
                <Card className="border-l-4 border-l-secondary creative-hover bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Music" className="text-secondary mt-1 floating-element" size={24} />
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                          <span className="handwritten text-2xl text-secondary">Ирина</span> Камянчук
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
      <section id="works" className="py-16 px-6 bg-gradient-to-r from-accent/30 to-secondary/20 relative overflow-hidden">
        <div className="absolute top-5 left-5 text-5xl opacity-20 floating-element">🎨</div>
        <div className="absolute bottom-5 right-5 text-7xl opacity-15 floating-element" style={{animationDelay: '4s'}}>🎼</div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-transparent bg-clip-text artistic-gradient mb-12 creative-text-shadow">
            Творчество
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-scale-in creative-hover bg-white/90 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <Icon name="BookOpen" className="text-primary mb-4 floating-element" size={32} />
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  <span className="casual">Поэтические</span> сборники
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">📖</span> "Отражения души" (2021)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">🌸</span> "Времена года сердца" (2022)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✍️</span> "Между строк" (2023)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">🆕</span> "Новые грани" (2024)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-scale-in creative-hover bg-white/90 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <Icon name="Headphones" className="text-secondary mb-4 floating-element" size={32} />
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  <span className="casual">Музыкальные</span> альбомы
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">🎵</span> "Звуки поэзии" (2021)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">🎶</span> "Мелодии слов" (2022)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">🎼</span> "Симфония чувств" (2023)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">🎹</span> "Гармония стиха" (2024)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <img
              src="/img/8f128f36-83d6-4663-a28a-23b6e4a856ec.jpg"
              alt="Музыкальные ноты и поэзия"
              className="rounded-lg shadow-xl mx-auto mb-8 max-w-2xl w-full h-64 object-cover creative-hover"
            />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-inter leading-relaxed italic">
              <span className="handwritten text-2xl text-primary/70">"</span>
              Наше творчество — это диалог между словом и музыкой, где каждое стихотворение 
              обретает новую жизнь в мелодии, а каждая мелодия раскрывается через поэтическое слово.
              <span className="handwritten text-2xl text-secondary/70">"</span>
            </p>
          </div>
        </div>
      </section>

      {/* Concerts Section */}
      <section id="concerts" className="py-16 px-6 bg-gradient-to-br from-white/95 to-primary/5 relative">
        <div className="absolute top-8 right-8 text-6xl opacity-15 floating-element">🎪</div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-transparent bg-clip-text artistic-gradient mb-12 creative-text-shadow">
            Концерты и выступления
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {[
              {
                date: "15 марта 2024",
                venue: "Московский дом литераторов",
                event: "Вечер поэзии и музыки 'Весенние мотивы'",
                status: "upcoming",
                emoji: "🌸"
              },
              {
                date: "28 февраля 2024",
                venue: "Центральная библиотека им. Пушкина",
                event: "Творческая встреча 'Союз слова и музыки'",
                status: "past",
                emoji: "📚"
              },
              {
                date: "20 января 2024",
                venue: "Культурный центр 'Меридиан'",
                event: "Презентация нового альбома 'Гармония стиха'",
                status: "past",
                emoji: "🎵"
              }
            ].map((concert, index) => (
              <Card key={index} className={`p-6 creative-hover bg-white/90 backdrop-blur-sm ${concert.status === 'upcoming' ? 'border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-lg font-playfair font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="text-2xl">{concert.emoji}</span>
                        {concert.event}
                      </h3>
                      <p className="text-gray-600 mb-2 casual">{concert.venue}</p>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-500">{concert.date}</span>
                      </div>
                    </div>
                    {concert.status === 'upcoming' && (
                      <Button className="mt-4 md:mt-0 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 creative-hover shadow-lg">
                        🎫 Забронировать
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
      <section id="media" className="py-16 px-6 bg-gradient-to-r from-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-7xl opacity-10 floating-element">🎬</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-10 floating-element" style={{animationDelay: '5s'}}>📸</div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-transparent bg-clip-text artistic-gradient mb-12 creative-text-shadow">
            Медиа
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="creative-hover bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6 text-center">
                <Icon name="Play" className="text-primary mb-4 mx-auto floating-element" size={48} />
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  <span className="casual">Видео</span> 🎥
                </h3>
                <p className="text-gray-600 mb-4">Записи выступлений и интервью</p>
                <Button variant="outline" className="creative-hover border-primary text-primary hover:bg-primary hover:text-white">
                  Смотреть
                </Button>
              </CardContent>
            </Card>

            <Card className="creative-hover bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6 text-center">
                <Icon name="Mic" className="text-secondary mb-4 mx-auto floating-element" size={48} />
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  <span className="casual">Аудио</span> 🎧
                </h3>
                <p className="text-gray-600 mb-4">Музыкальные композиции и чтения</p>
                <Button variant="outline" className="creative-hover border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Слушать
                </Button>
              </CardContent>
            </Card>

            <Card className="creative-hover bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6 text-center">
                <Icon name="Camera" className="text-accent mb-4 mx-auto floating-element" size={48} />
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  <span className="casual">Фото</span> 📷
                </h3>
                <p className="text-gray-600 mb-4">Галерея с концертов и мероприятий</p>
                <Button variant="outline" className="creative-hover border-accent text-accent hover:bg-accent hover:text-white">
                  Посмотреть
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute top-12 right-12 text-6xl opacity-15 floating-element">💌</div>
        <div className="absolute bottom-8 left-8 text-5xl opacity-20 floating-element" style={{animationDelay: '6s'}}>📞</div>
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center text-transparent bg-clip-text artistic-gradient mb-12 creative-text-shadow">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="creative-hover bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                  <span className="handwritten text-primary">Свяжитесь</span> с нами
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary floating-element" size={20} />
                    <span className="text-gray-700">info@duet-kamyanchuk.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary floating-element" size={20} />
                    <span className="text-gray-700">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary floating-element" size={20} />
                    <span className="text-gray-700">Москва, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="creative-hover bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                  <span className="handwritten text-secondary">Следите</span> за нами
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Instagram" className="text-secondary floating-element" size={20} />
                    <span className="text-gray-700">@duet_kamyanchuk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Youtube" className="text-secondary floating-element" size={20} />
                    <span className="text-gray-700">Дуэт Камянчук</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Facebook" className="text-secondary floating-element" size={20} />
                    <span className="text-gray-700">Творческий дуэт Камянчук</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 creative-hover shadow-lg">
                  📬 Подписаться на новости
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-6 relative overflow-hidden">
        <div className="absolute inset-0 artistic-gradient opacity-5"></div>
        <div className="container mx-auto text-center relative">
          <h3 className="text-2xl font-playfair font-bold mb-4 handwritten">Дуэт Камянчук</h3>
          <p className="text-gray-400 mb-4 casual">
            Творческий союз поэзии и музыки ✨
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Icon name="Heart" className="text-primary floating-element" size={20} />
            <Icon name="Music" className="text-secondary floating-element" size={20} />
            <Icon name="Feather" className="text-accent floating-element" size={20} />
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