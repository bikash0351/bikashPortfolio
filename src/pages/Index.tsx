import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactFormSection from "@/components/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]"> {/* Set background color */}
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactFormSection />
      {/* Add other sections here later */}
    </div>
  );
};

export default Index;