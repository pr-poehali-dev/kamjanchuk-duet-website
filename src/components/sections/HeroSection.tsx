import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ activeSection, scrollToSection }: HeroSectionProps) => {
  return (
    <>
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
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Поэзия и музыка в гармонии</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Наш творческий союз объединяет глубину поэтического слова с выразительностью музыки. 
                Надежда создает стихи, полные философских размышлений и жизненной мудрости, 
                а Ирина воплощает их в мелодии, создавая уникальные музыкальные произведения.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-amber-500" size={24} />
                  <span className="text-gray-700">Член Союза писателей России</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Music" className="text-purple-600" size={24} />
                  <span className="text-gray-700">Профессиональный композитор</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Heart" className="text-rose-600" size={24} />
                  <span className="text-gray-700">Более 15 лет совместного творчества</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works and Achievements Section */}
      <section id="works" className="py-20 px-6 bg-gradient-to-r from-purple-50 to-amber-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Наши достижения</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="BookOpen" className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Изданные книги</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">12</p>
                <p className="text-gray-600">Сборников стихов и песен</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="Music" className="text-amber-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Музыкальные композиции</h3>
                <p className="text-3xl font-bold text-amber-600 mb-2">150+</p>
                <p className="text-gray-600">Авторских песен</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Icon name="Users" className="text-rose-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Концертные выступления</h3>
                <p className="text-3xl font-bold text-rose-600 mb-2">200+</p>
                <p className="text-gray-600">Концертов по России</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Готовятся к выпуску</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Icon name="BookOpen" className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Хранилище времён</h4>
                  <p className="text-gray-600">Поэтический сборник</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                  <Icon name="Disc" className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Времена года</h4>
                  <p className="text-gray-600">Музыкальный альбом</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-rose-600 rounded-full flex items-center justify-center">
                  <Icon name="Music" className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Мы - русские</h4>
                  <p className="text-gray-600">Патриотический альбом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;