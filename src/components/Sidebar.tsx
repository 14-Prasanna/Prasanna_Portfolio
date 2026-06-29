import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  User,
  Code,
  GraduationCap,
  Server,
  Briefcase,
  Mail,
  FileText,
  Github,
  Linkedin,
  Download,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const Sidebar = ({ setActiveSection, activeSection }: { setActiveSection: (section: string) => void; activeSection: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { name: 'About', path: '/', icon: User },
    { name: 'Skills', path: '/skills', icon: Code },
    { name: 'Education', path: '/education', icon: GraduationCap },
    { name: 'Services', path: '/services', icon: Server },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/14-Prasanna' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/prasanna-venkatesh-k-759756278/' },
  ];

  return (
    <div
      className={`bg-slate-900 h-screen border-r border-slate-500 flex flex-col transition-all duration-300 ${
        isOpen ? 'w-65 items-start' : 'w-16 items-center'
      }`}
    >
      {/* Toggle Button Top Right (Always Visible) */}
      <div className="flex justify-end p-4 border-b border-slate-700 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-400 hover:text-cyan-400 transition"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={20} />}
        </button>
      </div>

      {/* Header with Three Colored Dots */}
      <div className="p-6 border-b border-slate-700 flex flex-col items-center w-full">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        {/* Brand Name */}
        {isOpen && (
          <h1 className="text-cyan-400 text-lg font-mono">Portfolio</h1>
        )}
      </div>

      {/* Navigation */}
      <nav className={`flex-1 px-4 py-4 overflow-y-auto ${isOpen ? 'w-full' : ''}`}>
        <ul className="space-y-2">
          {navItems.map((item) => (
            item.name !== 'Resume' ? (
              <li key={item.name}>
                <button
                  onClick={() => setActiveSection(item.path)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                    activeSection === item.path
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {isOpen && <span className="font-mono">{item.name}</span>}
                </button>
              </li>
            ) : (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  {isOpen && <span className="font-mono">{item.name}</span>}
                </NavLink>
              </li>
            )
          ))}
        </ul>
      </nav>

      {/* Social + Resume */}
      <div className="p-5 border-t border-slate-500 w-full">
        <div className={`flex ${isOpen ? 'justify-start space-x-10 mx-20' : 'flex-col items-center space-y-2'}`}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 transition"
              aria-label={`${social.name} profile`}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {isOpen && (
      <a
        href="/Prasanna Venkatesh resume.docx"
        download
        className="block w-full mt-4"
      >
      <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-all duration-200">
        <Download className="w-4 h-4" />
          <span className="font-mono text-sm">Download Resume</span>
        </button>
      </a>
      )}

      </div>
    </div>
  );
};

export default Sidebar;