import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
      <div className="text-center mb-6">
        {/* Profile Image with Gradient Border */}
        <div className="w-31 h-31 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-[px] mx-auto mb-4">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src="/me.jpeg"
              alt="Prasanna Venkatesh K"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">PRASANNA VENKATESH K</h2>
        <p className="text-cyan-400 font-mono">Software Engineer</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-slate-300">
          <Mail className="w-5 h-5 text-cyan-400" />
          <span className="font-mono text-sm">prasannavenkatesh652@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-300">
          <Phone className="w-5 h-5 text-cyan-400" />
          <span className="font-mono text-sm">+91 9384953608</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-300">
          <MapPin className="w-5 h-5 text-cyan-400" />
          <span className="font-mono text-sm">Tiruchirappalli, Tamil Nadu</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-300">
          <Calendar className="w-5 h-5 text-cyan-400" />
          <span className="font-mono text-sm">Available for hire</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-white">Fresher</div>
            <div className="text-xs text-slate-400 font-mono">Years Exp</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">7</div>
            <div className="text-xs text-slate-400 font-mono">Projects</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">100%</div>
            <div className="text-xs text-slate-400 font-mono">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
