import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SongsGrid = () => {
  const songs = [
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
      title: "Хранилище времён",
      description: "Поэтическое посвящение родному городу",
      duration: "4:33"
    },
    {
      title: "Мы - русские",
      description: "Патриотическая песня о любви к Родине",
      duration: "3:56"
    },
    {
      title: "Зимняя сказка",
      description: "Волшебная история о зимних чудесах",
      duration: "4:01"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {songs.map((song, index) => (
        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{song.title}</h3>
                <p className="text-gray-600 mb-3">{song.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon name="Clock" size={16} />
                  <span>{song.duration}</span>
                </div>
              </div>
              <div className="ml-4">
                <Button variant="outline" size="sm">
                  <Icon name="Play" size={16} className="mr-2" />
                  Слушать
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SongsGrid;