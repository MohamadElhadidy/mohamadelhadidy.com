'use client';

import Header from "@sections/header";
import Hero from "@sections/Hero";
import About from "@sections/About";
import Projects from "@sections/Projects";
import Footer from "@sections/footer";


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
