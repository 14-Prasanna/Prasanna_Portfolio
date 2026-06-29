  import React, { useState, useEffect } from 'react';

const TerminalWindow = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const terminalContent = [
    "$ who am i",
    "PRASANNA VENKATESH K - Software Engineer",
    "",
    "$ cat about.txt",
    "Self-driven and passionate Software Engineer.",
    "Strong foundation in both frontend and backend development.",
    "Proficient in testing, debugging, and RESTful APIs.",
    "Familiar with Agile methodologies and CI/CD pipelines.",
    "Eager to learn new technologies and contribute to high-impact projects.",
    "",
    "$ education --latest",
    "B.E. in Computer Science @ KIOT, Salem (2022 - 2026)",
    "Current CGPA: 7.8",
    "",
    "$ experience --internship",
    "Web Developer Intern @ Visecure (iStart Incubated Startup)",
    "Worked from scratch to deployment as full-time developer.",
    "Handled MSME license & official startup procedures too.",
    "",
    "$ skills --primary",
    "HTML, CSS, JavaScript, TypeScript, GSAP, Spring Boot",
    "React, Node.js, MongoDB, Razorpay Integration",
    "",
    "$ current-location",
    "Based in Trichy, Tamil Nadu",
    "Open to relocate for the right opportunity.",
    "",
    "$ status",
    "Actively looking for web dev internships and fresher roles.",
    "",
    "$ motto",
    "Quick learner. Can join immediately.",
    "Willing to work hard and keep improving every day.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < terminalContent.length - 1) {
          return prev + 1;
        }
        return 0; // Reset animation
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
      <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-slate-400 font-mono text-sm">README.md</span>
      </div>
      <div className="p-6 font-mono text-sm">
        {terminalContent.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="mb-1">
            {line.startsWith('$') ? (
              <span className="text-cyan-400">{line}</span>
            ) : line === '' ? (
              <div className="h-4"></div>
            ) : (
              <span className="text-green-400">{line}</span>
            )}
            {index === currentLine && (
              <span className="animate-pulse text-white">_</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalWindow;
