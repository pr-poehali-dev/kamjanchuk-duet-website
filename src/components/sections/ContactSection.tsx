import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Mail",
      label: "Email",
      value: "duet-kamyanchuk@mail.ru",
      href: "mailto:duet-kamyanchuk@mail.ru",
      gradient: "from-ocean-500 to-emerald-500"
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (911) 888-19-66",
      href: "tel:+79118881966",
      gradient: "from-emerald-500 to-violet-500"
    },
    {
      icon: "MapPin",
      label: "Город",
      value: "Псков, Россия",
      href: null,
      gradient: "from-violet-500 to-ocean-500"
    }
  ];

  const socialLinks = [
    {
      icon: "Users",
      platform: "ВКонтакте",
      handle: "vk.com/irinamelody",
      url: "https://vk.com/irinamelody",
      gradient: "from-ocean-500 to-emerald-500"
    },
    {
      icon: "PlayCircle",
      platform: "RuTube",
      handle: "Канал дуэта",
      url: "https://rutube.ru/channel/55566203/",
      gradient: "from-emerald-500 to-violet-500"
    },
    {
      icon: "Globe",
      platform: "Одноклассники",
      handle: "Группа дуэта",
      url: "https://ok.ru/group/70000003875901",
      gradient: "from-violet-500 to-ocean-500"
    }
  ];

  return (
    <>
      {/* Concert Call to Action */}
      <section id="concerts" className="py-24 px-6 bg-gradient-to-br from-ocean-500 via-emerald-500 to-violet-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Концертные выступления
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed">
              Каждая песня — это частица нашей души, воплощенная в мелодию и слово
            </p>
            <Button 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 px-12 py-4 text-lg font-medium rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => window.open('https://vk.com/audios-16809861', '_blank')}
            >
              <Icon name="Music" className="mr-3" size={24} />
              Послушать все песни
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-ocean-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Свяжитесь с нами</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-500 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
              Мы всегда открыты для творческого сотрудничества и новых проектов
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Контактная информация</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="group">
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className={`p-3 rounded-full bg-gradient-to-r ${contact.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}>
                            <Icon name={contact.icon as any} className="text-white" size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium">{contact.label}</p>
                            <p className="text-slate-700 font-medium text-lg group-hover:text-ocean-600 transition-colors">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${contact.gradient} shadow-lg`}>
                            <Icon name={contact.icon as any} className="text-white" size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium">{contact.label}</p>
                            <p className="text-slate-700 font-medium text-lg">{contact.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Социальные сети</h3>
                <div className="space-y-6 mb-8">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${social.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon name={social.icon as any} className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-500 font-medium">{social.platform}</p>
                        <p className="text-slate-700 font-medium text-lg group-hover:text-ocean-600 transition-colors">
                          {social.handle}
                        </p>
                      </div>
                      <Icon name="ExternalLink" className="text-slate-400 group-hover:text-ocean-500 transition-colors" size={20} />
                    </a>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-ocean-600 to-emerald-600 hover:from-ocean-700 hover:to-emerald-700 text-white py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Icon name="Bell" className="mr-3" size={20} />
                  Подписаться на новости
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-ocean-500 to-emerald-500">
                <Icon name="Music" className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold">Дуэт Камянчук</h3>
            </div>
            
            <p className="text-slate-300 mb-8 text-lg">Творческий союз поэзии и музыки</p>
            
            <div className="flex justify-center space-x-8 mb-8">
              <div className="p-3 rounded-full bg-gradient-to-r from-ocean-500 to-emerald-500 shadow-lg">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-violet-500 shadow-lg">
                <Icon name="Music" className="text-white" size={24} />
              </div>
              <div className="p-3 rounded-full bg-gradient-to-r from-violet-500 to-ocean-500 shadow-lg">
                <Icon name="Feather" className="text-white" size={24} />
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400 text-sm">
                © 2024 Творческий дуэт Ирины и Надежды Камянчук. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;