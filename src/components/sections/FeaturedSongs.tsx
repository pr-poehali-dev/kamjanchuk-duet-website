import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedSongs = () => {
  return (
    <section id="songs" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Новые песни творческого дуэта</h2>
        
        {/* First Featured Song - На балу */}
        <div className="mb-16">
          <Card className="shadow-xl overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/68bd35ec-0d3b-4923-ab8b-8eca8967e4f3.jpg" 
                    alt="На балу - посвящение Пушкину" 
                    className="w-full h-80 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Новинка
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">На балу</h3>
                    <p className="text-amber-700 font-medium mb-2">Посвящение Александру Пушкину</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Лирическая композиция, вдохновлённая поэзией великого русского поэта. 
                      Музыка переносит слушателя в атмосферу пушкинских балов.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
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
                      Прослушать на Яндекс.Музыке
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second Featured Song - Колыбельная для мужчины */}
        <div className="mb-16">
          <Card className="shadow-xl overflow-hidden bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/5439da28-a9d9-4141-b9f9-e6f6d9ed308c.jpg" 
                    alt="Колыбельная для мужчины" 
                    className="w-full h-80 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Хит
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Колыбельная для мужчины</h3>
                    <p className="text-rose-700 font-medium mb-2">Ирина Камянчук</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Трогательная и нежная композиция о женской заботе и любви. 
                      Песня раскрывает тему материнской нежности к взрослому мужчине, 
                      создавая атмосферу тепла и умиротворения.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
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
                      Прослушать на Яндекс.Музыке
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Third Featured Song - Я вернусь */}
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
                  <a 
                    href="https://music.yandex.ru/album/37359043/track/140884718" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Icon name="Play" size={18} className="mr-2" />
                      Прослушать на Яндекс.Музыке
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSongs;