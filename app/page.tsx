"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* KI-Weltraum Hintergrund */}
      <div className="fixed inset-0 -z-10">
        {/* Weltraum Basis */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950"></div>
        
        {/* Sterne - Erste Schicht */}
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 20% 30%, white 0.5px, transparent 0.5px), radial-gradient(circle at 80% 70%, white 0.5px, transparent 0.5px), radial-gradient(circle at 40% 80%, white 0.5px, transparent 0.5px), radial-gradient(circle at 60% 20%, white 0.5px, transparent 0.5px)',
               backgroundSize: '200px 200px',
               opacity: 0.8
             }}>
        </div>

        {/* Zweite Sternschicht - Größer und funkeln */}
        <div className="absolute inset-0 animate-pulse" 
             style={{
               backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 90% 40%, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 30% 90%, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 70% 10%, rgba(255,255,255,0.8) 1px, transparent 1px)',
               backgroundSize: '300px 300px',
               opacity: 0.6
             }}>
        </div>

        {/* KI-Netzwerk Struktur */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Großer leuchtender Nebel */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        
        {/* Datenströme / KIs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 animate-pulse">
          <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute inset-2 border-2 border-blue-400/30 rounded-full animate-ping"></div>
        </div>

        {/* Weiteres KI-Element */}
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-4 border border-purple-400/30 rounded-full"></div>
          <div className="absolute inset-8 border border-purple-400/20 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-purple-300/30 text-4xl animate-spin-slow">⚡</span>
          </div>
        </div>

        {/* Fallende Datenpartikel */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white/40 rounded-full animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mammo.dev
            </span>
            <div className="flex gap-8 text-sm font-medium text-white/80">
              <a href="#about" className="hover:text-purple-400 transition relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#skills" className="hover:text-purple-400 transition relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" className="hover:text-purple-400 transition relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="hover:text-purple-400 transition relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 text-white">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/10">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 font-medium text-sm border border-purple-500/30">
              👾 System Integrator & KI-Enthusiast
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, ich bin{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mammo
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Als angehender Systemintegrator verbinde ich die Welt der 
              Infrastruktur mit künstlicher Intelligenz. Ich baue Brücken 
              zwischen klassischen Systemen und modernen KI-Lösungen im 
              digitalen Universum.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" 
                 className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition shadow-lg shadow-purple-500/30">
                Kontakt
              </a>
              <a href="#projects" 
                 className="px-8 py-3 border border-white/20 backdrop-blur-sm rounded-lg font-medium hover:bg-white/10 transition">
                Projekte ansehen
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-ping"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xl rounded-full flex items-center justify-center text-6xl text-white font-bold border-2 border-white/30 shadow-2xl">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  M
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="mt-32">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Meine Expertise im KI-Universum</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "System Integration",
                desc: "Netzwerke, Server, Cloud-Infrastruktur und Automatisierung mit modernen Tools.",
                color: "blue"
              },
              {
                icon: "🤖",
                title: "KI & Machine Learning",
                desc: "Integration von KI-Modellen, Prompt Engineering und LLM-Implementierung.",
                color: "purple"
              },
              {
                icon: "🚀",
                title: "DevOps & Tools",
                desc: "Docker, CI/CD, Versionskontrolle und Infrastructure as Code.",
                color: "pink"
              }
            ].map((skill, i) => (
              <div key={i} 
                   className={`group p-8 backdrop-blur-md bg-black/30 rounded-2xl border border-white/10 hover:border-${skill.color}-400/50 transition-all hover:transform hover:-translate-y-2`}>
                <div className={`w-14 h-14 bg-${skill.color}-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl border border-${skill.color}-500/30 group-hover:scale-110 transition`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{skill.title}</h3>
                <p className="text-white/60">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aktuelles Projekt */}
        <section className="mt-32 p-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl border border-white/10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium bg-white/10 px-4 py-2 rounded-full border border-white/20">
              🚀 Aktuelles KI-Projekt
            </span>
            <h2 className="text-3xl font-bold mt-6 mb-4 text-white">
              KI-gestützte Systemüberwachung im Weltraum-Maßstab
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Entwicklung einer intelligenten Monitoring-Lösung, die KI nutzt, 
              um Systemausfälle vorherzusagen und automatisch zu reagieren. 
              Kombination von klassischem System-Monitoring mit Machine Learning 
              für predictive Analytics.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              {["Python", "TensorFlow", "Docker", "Prometheus", "Kubernetes"].map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm border border-white/10 hover:border-purple-400/30 transition">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Lass uns durchs KI-Universum connecten</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Interesse an KI-Integration oder Systemarchitektur? Ich bin immer offen für neue Projekte und Ideen im digitalen Raum.
          </p>
          <div className="flex justify-center gap-6">
            {["github", "linkedin", "x"].map((social, i) => (
              <a key={i} href="#" 
                 className="p-4 backdrop-blur-md bg-white/5 rounded-full border border-white/10 hover:bg-white/20 hover:scale-110 transition shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm"></div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-white/10 text-center text-white/40">
          <p>© 2024 Mammo - System Integrator & KI-Enthusiast im digitalen Universum</p>
        </footer>
      </main>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
