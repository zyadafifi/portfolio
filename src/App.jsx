import {
  Navbar,
  GlowBackground,
  GridBackground,
  ScrollProgressBar,
} from "./components/layout";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  FeaturedProjectsSection,
  GitHubSection,
  ContactSection,
  FooterSection,
} from "./components/sections";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgressBar />
      <GlowBackground />
      <GridBackground />
      <Navbar />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <FeaturedProjectsSection />
        <GitHubSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
