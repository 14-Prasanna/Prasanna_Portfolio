
import React from 'react';
import { Code, Database, Globe, Brain, Server, Smartphone } from 'lucide-react';

const SkillsGrid = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: Globe,
      skills: ['React.js', 'HTML/CSS/TypeScript', 'GASP'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Spring Boot', 'Express.js', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'AI/ML',
      icon: Brain,
      skills: ['OpenAI'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Tools',
      icon: Code,
      skills: ['Git','VS Code','Putty','Linux'],
      color: 'from-pink-500 to-rose-500'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category) => (
        <div
          key={category.name}
          className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {category.name}
            </h3>
          </div>
          <div className="space-y-2">
            {category.skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 bg-slate-700 rounded-md text-slate-300 text-sm font-mono hover:bg-slate-600 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
