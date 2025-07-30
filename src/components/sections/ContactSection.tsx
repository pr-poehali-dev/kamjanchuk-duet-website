import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <>
      {/* Concerts Section */}
      <section id="concerts" className="py-20 px-6 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Концертные выступления</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Каждая песня — это частица нашей души, воплощенная в мелодию и слово
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://vk.com/audios-16809861', '_blank')}
            >
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
    </>
  );
};

export default ContactSection;