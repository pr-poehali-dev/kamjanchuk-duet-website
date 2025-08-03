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
      <header className="bg-white/80 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-ocean-200">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-ocean-500 to-emerald-500">
                <Icon name="Music" className="text-white" size={28} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-ocean-700 to-emerald-600 bg-clip-text text-transparent">
                Дуэт Камянчук
              </h1>
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
                  className={`text-slate-600 hover:text-ocean-600 transition-all duration-300 font-medium relative pb-1 ${
                    activeSection === item.id 
                      ? 'text-ocean-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-ocean-500 after:to-emerald-500' 
                      : 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-ocean-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <Button variant="outline" className="md:hidden border-ocean-300 hover:bg-ocean-50">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-ocean-50 to-emerald-50">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/004c555d-f440-4f33-bc6a-d2a9f1836897.jpg" 
            alt="Concert hall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/20 to-emerald-900/20"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Творческий дуэт
              <span className="block bg-gradient-to-r from-ocean-600 to-emerald-600 bg-clip-text text-transparent mt-4">
                Ирины и Надежды Камянчук
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Уникальное сочетание поэтического слова и музыкального искусства. 
              Надежда Камянчук — поэт, член Союза писателей России. 
              Ирина — композитор и исполнитель.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-ocean-600 to-ocean-700 hover:from-ocean-700 hover:to-ocean-800 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Icon name="User" className="mr-3" size={20} />
                Узнать больше
              </Button>
              <Button 
                onClick={() => scrollToSection('works')}
                variant="outline" 
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Icon name="Music" className="mr-3" size={20} />
                Наше творчество
              </Button>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-ocean-400 to-emerald-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-violet-400 to-ocean-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-full opacity-15 animate-ping"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">О дуэте</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/8bde9145-d144-428c-a3fc-6276039f6824.jpg"
                alt="Творческий дуэт Камянчук"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-ocean-500 to-emerald-500 rounded-full opacity-20"></div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-800">Поэзия и музыка в гармонии</h3>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Наш творческий союз объединяет глубину поэтического слова с выразительностью музыки. 
                Надежда создает стихи, полные философских размышлений и жизненной мудрости, 
                а Ирина воплощает их в мелодии, создавая уникальные музыкальные произведения.
              </p>
              
              <div className="grid gap-6">
                {[
                  { icon: "Award", text: "Член Союза писателей России", color: "ocean" },
                  { icon: "Music", text: "Профессиональный композитор", color: "emerald" },
                  { icon: "Heart", text: "Более 15 лет совместного творчества", color: "violet" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                    <div className={`p-3 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 shadow-lg`}>
                      <Icon name={item.icon as any} className="text-white" size={24} />
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works and Achievements Section */}
      <section id="works" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-ocean-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Наши достижения</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            {[
              { icon: "BookOpen", title: "Изданные книги", number: "12", subtitle: "Сборников стихов и песен", color: "ocean" },
              { icon: "Music", title: "Музыкальные композиции", number: "150+", subtitle: "Авторских песен", color: "emerald" },
              { icon: "Users", title: "Концертные выступления", number: "200+", subtitle: "Концертов по России", color: "violet" }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                  <p className={`text-4xl font-bold bg-gradient-to-r from-${item.color}-600 to-${item.color}-700 bg-clip-text text-transparent mb-2`}>
                    {item.number}
                  </p>
                  <p className="text-slate-600">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-0 max-w-4xl mx-auto">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-10 text-center">Готовятся к выпуску</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: "BookOpen", title: "Хранилище времён", subtitle: "Поэтический сборник", gradient: "from-ocean-600 to-emerald-600" },
                  { icon: "Disc", title: "Времена года", subtitle: "Музыкальный альбом", gradient: "from-emerald-600 to-violet-600" },
                  { icon: "Music", title: "Мы - русские", subtitle: "Патриотический альбом", gradient: "from-violet-600 to-ocean-600" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon name={item.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                      <p className="text-slate-600">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HeroSection;