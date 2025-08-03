import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VideoClips = () => {
  const videos = [
    {
      id: "575740",
      title: "Девясил",
      thumbnail: "https://cdn.poehali.dev/files/b5c74c8b-4061-4b55-abf4-6b2adbd61ff9.jpeg",
      url: "https://music.yandex.ru/video?ids=575740",
      gradient: "from-ocean-500 to-emerald-500"
    },
    {
      id: "575249", 
      title: "На балу",
      thumbnail: "https://cdn.poehali.dev/files/bd10c0f4-2477-42e9-b904-98c4cdc61441.jpg",
      url: "https://music.yandex.ru/video?ids=575249",
      gradient: "from-emerald-500 to-violet-500"
    },
    {
      id: "575738",
      title: "Колыбельная для мужчины", 
      thumbnail: "https://cdn.poehali.dev/files/acd176ee-cdf0-4ff8-aade-ff0dbd7aac64.jpg",
      url: "https://music.yandex.ru/video?ids=575738",
      gradient: "from-violet-500 to-ocean-500"
    },
    {
      id: "575739",
      title: "Я рисую лето",
      thumbnail: "https://cdn.poehali.dev/files/9404a8d9-b807-4cd3-a9de-3dbe03c80f76.jpg", 
      url: "https://music.yandex.ru/video?ids=575739",
      gradient: "from-ocean-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-ocean-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Новые видеоклипы</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-emerald-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Погрузитесь в мир музыки через визуальные образы наших композиций
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/90 backdrop-blur-sm border-0 transform hover:-translate-y-3"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${video.gradient} rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
                
                {/* HD Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  HD
                </div>
                
                {/* Video duration (mockup) */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {index === 0 ? "3:42" : index === 1 ? "4:15" : index === 2 ? "3:52" : "3:28"}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-800 mb-2 text-lg leading-tight group-hover:text-ocean-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">Творческий дуэт Камянчук</p>
                
                <a 
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className={`w-full bg-gradient-to-r ${video.gradient} hover:shadow-lg text-white py-3 font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1`}>
                    <Icon name="Play" size={16} className="mr-2" />
                    Смотреть
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Больше видео на наших каналах</h3>
            <p className="text-slate-600 mb-6">
              Подписывайтесь на наши каналы и не пропускайте новые релизы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium"
                onClick={() => window.open('https://rutube.ru/channel/55566203/', '_blank')}
              >
                <Icon name="PlayCircle" className="mr-2" size={18} />
                RuTube канал
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-ocean-500 text-ocean-600 hover:bg-ocean-500 hover:text-white px-6 py-3 rounded-xl font-medium"
                onClick={() => window.open('https://music.yandex.ru/users/duet-kamyanchuk/playlists', '_blank')}
              >
                <Icon name="Music" className="mr-2" size={18} />
                Яндекс.Музыка
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoClips;