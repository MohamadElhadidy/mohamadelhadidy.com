import Header from "./ui/header";
import Hero from "./ui/Hero";
import Footer from "./ui/footer";
import About from "./ui/About";
import Projects from "./ui/Projects";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />
      
      {/* Footer Section */}
      <Footer />
    </>
  );
}
