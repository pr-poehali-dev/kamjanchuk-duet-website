import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedSongs = () => {
  const songs = [
    {
      title: "На балу",
      subtitle: "Посвящение Александру Пушкину",
      description: "Лирическая композиция, вдохновлённая поэзией великого русского поэта. Музыка переносит слушателя в атмосферу пушкинских балов.",
      image: "https://cdn.poehali.dev/files/68bd35ec-0d3b-4923-ab8b-8eca8967e4f3.jpg",
      duration: "4:15",
      genre: "Классическая",
      url: "https://music.yandex.ru/album/37198110/track/140515919",
      badge: "Новинка",
      gradientFrom: "ocean-500",
      gradientTo: "emerald-500"
    },
    {
      title: "Колыбельная для мужчины",
      subtitle: "Ирина Камянчук",
      description: "Трогательная и нежная композиция о женской заботе и любви. Песня раскрывает тему материнской нежности к взрослому мужчине, создавая атмосферу тепла и умиротворения.",
      image: "https://cdn.poehali.dev/files/5439da28-a9d9-4141-b9f9-e6f6d9ed308c.jpg",
      duration: "3:52",
      genre: "Лирическая",
      url: "https://music.yandex.ru/album/37286920/track/140717826",
      badge: "Хит",
      gradientFrom: "emerald-500",
      gradientTo: "violet-500"
    },
    {
      title: "Я вернусь",
      subtitle: "Ирина Камянчук",
      description: "Мелодичная песня о надежде на лучшее будущее. Лирическая баллада о вере в возвращение и обновление.",
      image: "https://cdn.poehali.dev/files/129df1b7-da4d-4334-b1a0-276336f5e591.jpg",
      duration: "3:41",
      genre: "Мелодичная",
      url: "https://music.yandex.ru/album/37359043/track/140884718",
      badge: "Новая",
      gradientFrom: "violet-500",
      gradientTo: "ocean-500"
    }
  ];

  return (
    <section id="songs" className="py-24 px-6 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Новые песни творческого дуэта</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12 max-w-7xl mx-auto">
          {songs.map((song, index) => (
            <Card 
              key={index} 
              className={`shadow-2xl overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={song.image}
                      alt={song.title}
                      className="w-full h-80 lg:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className={`absolute top-6 left-6 bg-gradient-to-r from-${song.gradientFrom} to-${song.gradientTo} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                      {song.badge}
                    </div>
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 flex items-center justify-center">
                      <div className={`w-20 h-20 bg-gradient-to-r from-${song.gradientFrom} to-${song.gradientTo} rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform`}>
                        <Icon name="Play" size={32} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-3">{song.title}</h3>
                      <p className={`text-lg font-medium mb-6 bg-gradient-to-r from-${song.gradientFrom} to-${song.gradientTo} bg-clip-text text-transparent`}>
                        {song.subtitle}
                      </p>
                      <p className="text-slate-600 leading-relaxed text-lg mb-8">
                        {song.description}
                      </p>
                      
                      <div className="flex items-center gap-8 text-sm text-slate-500 mb-8">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={18} className={`text-${song.gradientFrom}`} />
                          <span className="font-medium">{song.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Music" size={18} className={`text-${song.gradientTo}`} />
                          <span className="font-medium">{song.genre}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href={song.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className={`w-full bg-gradient-to-r from-${song.gradientFrom} to-${song.gradientTo} hover:from-${song.gradientFrom} hover:to-${song.gradientTo} text-white py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                        <Icon name="Play" size={20} className="mr-3" />
                        Прослушать на Яндекс.Музыке
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-12 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open('https://vk.com/audios-16809861', '_blank')}
          >
            <Icon name="Music" className="mr-3" size={20} />
            Посмотреть все песни
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSongs;