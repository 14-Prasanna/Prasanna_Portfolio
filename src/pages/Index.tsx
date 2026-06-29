import React, { useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';
import SkillsGrid from '../components/SkillsGrid';
import { Monitor, Server, Zap } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('/');
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Placeholder for EmailJS form submission
  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', e.target);
    // Add EmailJS logic here, e.g., emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    switch (section) {
      case '/':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/education':
        educationRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/services':
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case '/skills':
      case '/education':
      case '/services':
      case '/projects':
      case '/contact':
      case '/':
      default:
        return (
          <>
            {/* About Section with Ref */}
            <div ref={aboutRef} className="mb-8" id="about">
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome to <span className="text-cyan-400">PRASANNA VENKATESH K</span> Portfolio
              </h1>
              <p className="text-slate-400 font-mono">
                Click a tab on the left to get started.
              </p>
            </div>

            {/* Terminal + Profile */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <TerminalWindow />
              </div>
              <div className="xl:col-span-1">
                <ProfileCard />
              </div>
            </div>

            {/* Skills Section with Ref */}
            <div ref={skillsRef} className="mt-12" id="skills">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">$</span> Technical Skills
              </h2>
              <SkillsGrid />
            </div>

            {/* Experience Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">$</span> Experience
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">IN</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        Web Developer Intern
                      </h3>
                      <p className="text-cyan-400 font-mono mb-2">Fetchto</p>
                      <p className="text-slate-300">
                       Developing WooCommerce plugin integrated with Fetchto panel using REST API’s for data encryption AES-GCM<br>
                       </br>
                        Order, encrypted and decrypted with AES- GCM and Axios for real time data communication for status updating using webhook to transmit data from backend to plugin
                      </p>
                    </div>
                    <div className="text-slate-400 font-mono text-sm">AUG 2025 - OCT 2025</div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">IN</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        Web Developer Intern
                      </h3>
                      <p className="text-cyan-400 font-mono mb-2">Visecure (iStart Incubated)</p>
                      <p className="text-slate-300">
                        Built the website from scratch, handled MSME licensing, and worked full-time on a student startup project with real-world deployment.
                      </p>
                    </div>
                    <div className="text-slate-400 font-mono text-sm">OCT 2024 - JAN 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section with Ref */}
            <div ref={educationRef} className="mt-12" id="education">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">$</span> Education
              </h2>
              <div className="space-y-6">
                {/* B.E. */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">B</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        B.E Computer Science and Engineering
                      </h3>
                      <p className="text-cyan-400 font-mono mb-2">Knowledge Institute of Technology, Salem</p>
                      <p className="text-slate-300">CGPA: 7.8 (2022 - 2026)</p>
                    </div>
                    <div className="text-slate-400 font-mono text-sm">2022 - 2026</div>
                  </div>
                </div>

                {/* HSC */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">+2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        Higher Secondary Education
                      </h3>
                      <p className="text-cyan-400 font-mono mb-2">Boys Higher Secondary School, Srirangam, Tiruchirappalli, Tamil Nadu</p>
                      <p className="text-slate-300">Scored: 73%</p>
                    </div>
                    <div className="text-slate-400 font-mono text-sm">2021 - 2022</div>
                  </div>
                </div>

                {/* SSLC */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">10</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        SSLC (10th Grade)
                      </h3>
                      <p className="text-cyan-400 font-mono mb-2">Boys Higher Secondary School, Srirangam, Tiruchirappalli, Tamil Nadu</p>
                      <p className="text-slate-300">Scored: 67%</p>
                    </div>
                    <div className="text-slate-400 font-mono text-sm">2019 - 2020</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section with Ref */}
            <div ref={servicesRef} className="mt-12" id="services">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">$</span> Services Offered
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Front-End Development */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow hover:shadow-cyan-600/20 transition">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-cyan-500 text-white flex items-center justify-center rounded">
                      <Monitor className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Front-End Development</h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    I design clean, responsive, and animated interfaces using React, Angular, GSAP, and Tailwind. I focus on user experience and accessibility.
                  </p>
                </div>

                {/* Back-End Development */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow hover:shadow-green-600/20 transition">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded">
                      <Server className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Back-End Development</h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    I build scalable and secure server-side apps using Node.js, Express, MongoDB, and handle data flow with RESTful APIs and middleware logic.
                  </p>
                </div>

                {/* API Management & Testing */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow hover:shadow-yellow-500/20 transition">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-yellow-400 text-white flex items-center justify-center rounded">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg">API Management & Testing</h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    I manage API integration, testing, and debugging using Postman, Swagger, and ensure smooth request-response cycles with proper error handling.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Projects Section with Ref */}
            <div ref={projectsRef} className="mt-12" id="projects">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">$</span> Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:shadow-lg transition-all">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/" alt="Fetchto" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Fetchto</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">Java Spring Boot • PostgreSQL • React • AES-GCM • Woocommerce</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Developing WooCommerce plugin integrated with Fetchto panel using REST API’s for data encryption AES-GCM<br></br>
                    Order, encrypted and decrypted with AES- GCM and Axios for real time data communication for status updating using webhook to transmit data from backend to plugin
                  </p>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:shadow-lg transition-all">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/" alt="E-commerce" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">E-commerce</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">Spring Boot • MySQL • React.js</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Designed and developed a comprehensive e-commerce platform for purchasing electronic gadgets, incorporating user authentication, product catalog management, and order processing features <br></br>
                    Implemented secure backend services with Spring Boot, utilizing JWT Token for authentication on private APIs and building efficient RESTful APIs to handle business logic.
                  </p>
                  <a href="https://github.com/14-Prasanna/Techstack-Back-end" className="text-cyan-400 font-mono text-sm underline">View Project</a>
                </div>
                
                {/* Visecure */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:shadow-lg transition-all">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/Visecure.png" alt="Visecure" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Visecure</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">HTML • Bootstrap • JavaScript • Google Analytics</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Led the development of a modern, responsive website to showcase VISECURE’s AI-powered cybersecurity solution, enhancing customer confidence and visibility.
                  </p>
                  <a href="https://www.visecure.in/" className="text-cyan-400 font-mono text-sm underline">View Project</a>
                </div>

                {/* Food Court App */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:shadow-lg transition-all">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/FoodCourt.png" alt="Food Court App" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Food Court Ordering App</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">MERN Stack • Razorpay • OTP Auth</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Full-stack project with cart system, order tracking, admin dashboard, OTP login, and payment integration.
                  </p>
                  <span className="text-slate-400 text-xs font-mono">In development</span>
                </div>

                {/* AromaHut Ecommerce */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/Aromahut.png" alt="AromaHut" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">AromaHut – Ecommerce Website</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">React • Node.js • Razorpay • MongoDB</p>
                  <p className="text-slate-300 text-sm mb-2">
                    A fully functional ecommerce site with cart, OTP login, admin dashboard, and payment integration.
                  </p>
                  <a href="https://aromahut.in/" className="text-cyan-400 font-mono text-sm underline">View Project</a>
                </div>

                {/* Learnite E-Learning */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/Learnite.png" alt="Learnite" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Learnite – E-learning Platform</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">HTML • CSS • Google Docs</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Course listing, video modules, student dashboard, and modern animated UI for learners.
                  </p>
                  <a href="https://www.learnite.in/" className="text-cyan-400 font-mono text-sm underline">View Project</a>
                </div>

                {/* Movie Recommender */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/MovieRecommadation.png" alt="Movie Recommender" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Movie Recommendation System</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">Python • Machine Learning</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Suggests movies based on content similarity and user preferences using ML.
                  </p>
                  <a href="#" className="text-cyan-400 font-mono text-sm underline">View Demo</a>
                </div>

                {/* Chatbot - Gemini API */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/chatbot.png" alt="Gemini Chatbot" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Simple Chatbot with Gemini API</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">React • Gemini API • Node.js</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Basic chatbot interface powered by Google Gemini to handle smart user queries.
                  </p>
                  <a href="#" className="text-cyan-400 font-mono text-sm underline">Try Chat</a>
                </div>

                {/* Client Portfolio */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="mb-4 h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <img src="/Client.png" alt="Client Portfolio" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Client Portfolio Website</h3>
                  <p className="text-cyan-400 text-xs mb-1 font-mono">Based on their Requirement</p>
                  <p className="text-slate-300 text-sm mb-2">
                    Designed and delivered a lightweight, animated personal website for a freelance client.
                  </p>
                  <a href="https://karthikathreyatsportfolio.netlify.app/" className="text-cyan-400 font-mono text-sm underline">See Portfolio</a>
                </div>
              </div>
            </div>

            {/* Contact Section with Ref */}
            <div ref={contactRef} className="mt-20" id="contact">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">$</span> Get in Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info Card */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-md">
                  <h3 className="text-white text-xl font-bold mb-4">📬 Find Me</h3>
                  <div className="space-y-4 text-slate-300 text-sm font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="text-cyan-400">📧</span>
                      <span>prasannavenkatesh652@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyan-400">📱</span>
                      <span>+91 9385953608</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyan-400">📍</span>
                      <span>Tiruchirappalli, Tamil Nadu</span>
                    </div>
                  </div>
                </div>

                {/* EmailJS Form */}
                <form
                  onSubmit={handleEmail}
                  className="bg-slate-800 rounded-xl border border-slate-700 p-6 space-y-4 shadow-md"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                      className="bg-slate-900 text-white border border-slate-600 p-2 rounded font-mono text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                      className="bg-slate-900 text-white border border-slate-600 p-2 rounded font-mono text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    className="w-full bg-slate-900 text-white border border-slate-600 p-2 rounded font-mono text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-md font-mono text-sm flex items-center space-x-2 transition"
                  >
                    <span>Send</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l11 2-11 2 11-6z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <Sidebar setActiveSection={scrollToSection} activeSection={activeSection} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Index;
