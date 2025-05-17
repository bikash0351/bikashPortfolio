import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer"; // Import the new Footer component

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col"> {/* Added flex-col to push footer down */}
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactFormSection />
      {/* Add other sections here later */}
      <div className="flex-grow"></div> {/* Added flex-grow to push footer to the bottom */}
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Index;