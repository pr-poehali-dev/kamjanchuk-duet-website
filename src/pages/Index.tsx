import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSongs from "@/components/sections/FeaturedSongs";
import SongsGrid from "@/components/sections/SongsGrid";
import VideoClips from "@/components/sections/VideoClips";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50">
      <HeroSection 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <FeaturedSongs />
      

      
      <VideoClips />
      
      <ContactSection />
    </div>
  );
};

export default Index;