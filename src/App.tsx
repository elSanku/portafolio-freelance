import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

//INI SPEC-003 - 06
// Estructura completa de la página integrando el perfil profesional real
export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
//FIN SPEC-003 - 06
