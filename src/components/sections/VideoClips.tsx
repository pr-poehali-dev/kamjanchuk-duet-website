import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VideoClips = () => {
  const videos = [
    {
      id: "575740",
      title: "Девясил",
      thumbnail: "https://cdn.poehali.dev/files/b5c74c8b-4061-4b55-abf4-6b2adbd61ff9.jpeg",
      url: "https://music.yandex.ru/video?ids=575740"
    },
    {
      id: "575249", 
      title: "На балу",
      thumbnail: "https://cdn.poehali.dev/files/bd10c0f4-2477-42e9-b904-98c4cdc61441.jpg",
      url: "https://music.yandex.ru/video?ids=575249"
    },
    {
      id: "575738",
      title: "Колыбельная для мужчины", 
      thumbnail: "https://cdn.poehali.dev/files/acd176ee-cdf0-4ff8-aade-ff0dbd7aac64.jpg",
      url: "https://music.yandex.ru/video?ids=575738"
    },
    {
      id: "575739",
      title: "Я рисую лето",
      thumbnail: "https://cdn.poehali.dev/files/9404a8d9-b807-4cd3-a9de-3dbe03c80f76.jpg", 
      url: "https://music.yandex.ru/video?ids=575739"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Новые видеоклипы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <Card key={video.id} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-white">
              <div className="relative">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={48} className="text-white" />
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  HD
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-4">Творческий дуэт Камянчук</p>
                <a 
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Icon name="Play" size={16} className="mr-2" />
                    Смотреть
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoClips;