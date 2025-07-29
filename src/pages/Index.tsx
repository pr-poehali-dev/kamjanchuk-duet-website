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
                src="https://cdn.poehali.dev/files/8bde9145-d144-428c-a3fc-6276039f6824.jpg"
                alt="Творческий дуэт Камянчук"
                className="rounded-lg shadow-xl w-full h-96 object-cover object-top"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Поэтические сборники Надежды Камянчук</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    «Ожидание весны»
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    «Заплатки для души»
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    «На пороге осени»
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    «На родине полыни»
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Book" size={16} className="text-purple-500" />
                    «Рождение стиха»
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="Headphones" className="text-amber-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Музыкальные альбомы Ирины Камянчук</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Созвездие" (2007)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Я вернусь" (2008)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Свет Булата" (2009)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Я – надежда" (2019)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Disc" size={16} className="text-amber-500" />
                    "Я рисую лето" (2019)
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">Готовятся к выпуску:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Icon name="Clock" size={14} className="text-purple-500" />
                      "Мы - русские"
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Clock" size={14} className="text-purple-500" />
                      "Старая пластинка"
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Clock" size={14} className="text-purple-500" />
                      "Псковская тетрадь"
                    </li>
                  </ul>
                </div>
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

      {/* Songs Section */}
      <section id="songs" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Песни творческого дуэта</h2>
          {/* Featured Songs Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* First Featured Song */}
            <Card className="shadow-xl overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="https://cdn.poehali.dev/files/68bd35ec-0d3b-4923-ab8b-8eca8967e4f3.jpg" 
                      alt="На балу - посвящение Пушкину" 
                      className="w-50 h-50 object-cover rounded-lg"
                      style={{width: '200px', height: '200px'}}
                    />
                    <div className="absolute top-2 left-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Новинка
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">На балу</h3>
                      <p className="text-amber-700 font-medium mb-2">Посвящение Александру Пушкину</p>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        Лирическая композиция, вдохновлённая поэзией великого поэта.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} className="text-amber-600" />
                          <span>4:15</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Music" size={16} className="text-amber-600" />
                          <span>Классическая</span>
                        </div>
                      </div>
                    </div>
                    <a 
                      href="https://music.yandex.ru/album/37198110/track/140515919" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        <Icon name="Play" size={18} className="mr-2" />
                        Прослушать
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Featured Song */}
            <Card className="shadow-xl overflow-hidden bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="https://cdn.poehali.dev/files/5439da28-a9d9-4141-b9f9-e6f6d9ed308c.jpg" 
                      alt="Колыбельная для мужчины" 
                      className="w-50 h-50 object-cover rounded-lg"
                      style={{width: '200px', height: '200px'}}
                    />
                    <div className="absolute top-2 left-2 bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Хит
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Колыбельная для мужчины</h3>
                      <p className="text-rose-700 font-medium mb-2">Ирина Камянчук</p>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        Трогательная композиция о женской заботе и любви.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} className="text-rose-600" />
                          <span>3:52</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Heart" size={16} className="text-rose-600" />
                          <span>Лирическая</span>
                        </div>
                      </div>
                    </div>
                    <a 
                      href="https://music.yandex.ru/album/37286920/track/140717826" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                        <Icon name="Play" size={18} className="mr-2" />
                        Прослушать
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Third Featured Song - Full Width */}
          <div className="mb-16">
            <Card className="shadow-xl overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src="https://cdn.poehali.dev/files/129df1b7-da4d-4334-b1a0-276336f5e591.jpg" 
                      alt="Я вернусь" 
                      className="w-full h-80 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Новая
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Я вернусь</h3>
                      <p className="text-blue-700 font-medium mb-2">Ирина Камянчук</p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Мелодичная песня о надежде на лучшее будущее. 
                        Лирическая баллада о вере в возвращение и обновление.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} className="text-blue-600" />
                          <span>3:41</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Star" size={16} className="text-blue-600" />
                          <span>Мелодичная</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href="https://music.yandex.ru/album/37359043/track/140884718" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Icon name="Play" size={18} className="mr-2" />
                          Прослушать на Яндекс.Музыке
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Осенние мотивы",
                description: "Лирическая композиция о красоте осенней природы",
                duration: "3:45"
              },
              {
                title: "Мамина молитва",
                description: "Трогательная песня о материнской любви",
                duration: "4:12"
              },
              {
                title: "Старая пластинка",
                description: "Ностальгическая мелодия о воспоминаниях",
                duration: "3:28"
              },
              {
                title: "Псковская тетрадь",
                description: "Поэтическое посвящение родному городу",
                duration: "4:33"
              },
              {
                title: "Мы - русские",
                description: "Патриотическая песня о любви к Родине",
                duration: "3:56"
              },
              {
                title: "Я рисую лето",
                description: "Солнечная композиция о летних днях",
                duration: "3:21"
              }
            ].map((song, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Music" className="text-purple-600" size={24} />
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{song.title}</h3>
                        <p className="text-sm text-gray-600">{song.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-purple-600">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm font-medium">{song.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Прослушать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Каждая песня — это частица нашей души, воплощенная в мелодию и слово
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
              Послушать все песни
            </Button>
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
                    <a href="mailto:duet-kamyanchuk@mail.ru" className="text-gray-600 hover:text-purple-600 transition-colors">duet-kamyanchuk@mail.ru</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-purple-600" size={20} />
                    <a href="tel:+79118881966" className="text-gray-600 hover:text-purple-600 transition-colors">+7 (911) 888-19-66</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-purple-600" size={20} />
                    <span className="text-gray-600">Псков, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Социальные сети</h3>
                <div className="space-y-4">
                  <a href="https://vk.com/irinamelody" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                    <Icon name="Users" className="text-purple-600" size={20} />
                    <span className="text-gray-600">VK: vk.com/irinamelody</span>
                  </a>
                  <a href="https://rutube.ru/channel/55566203/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                    <Icon name="PlayCircle" className="text-purple-600" size={20} />
                    <span className="text-gray-600">RuTube: Канал дуэта</span>
                  </a>
                  <a href="https://ok.ru/group/70000003875901" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                    <Icon name="Globe" className="text-purple-600" size={20} />
                    <span className="text-gray-600">Одноклассники: Группа дуэта</span>
                  </a>
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