"use client";

import { 
  GraduationCap, 
  Layers, 
  PawPrint, 
  FlaskConical, 
  Sliders, 
  Award, 
  Settings, 
  HelpCircle, 
  Download 
} from "lucide-react";

const modules = [
  { label: "Introduction", icon: GraduationCap },
  { label: "Managing Ingredients", icon: Layers },
  { label: "Learning Nutrients", icon: PawPrint },
  { label: "Feed Formulation", icon: FlaskConical },
  { label: "Advanced Features", icon: Award },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1E5631] text-white flex flex-col justify-between p-6 h-[calc(100vh-4rem)] sticky top-16">
      {/* Top Section: Navigation Links */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Curriculum</h2>
          <p className="text-xs text-emerald-200/70 mt-1">6 Modules • 20 Lessons</p>
        </div>

        <nav className="space-y-1">
          {modules.map((mod) => (
            <button
              key={mod.label}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:bg-emerald-800/50 transition-colors text-left"
            >
              <mod.icon className="w-4 h-4 text-emerald-200" />
              <span>{mod.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Section: Footer Actions */}
      <div className="space-y-4 pt-4 border-t border-emerald-800">
        <button className="w-full bg-[#A36A3B] hover:bg-[#8F5B30] text-white text-sm font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
          <Download className="w-4 h-4" />
          Download Resources
        </button>

        <div className="space-y-1 text-sm text-emerald-100">
          <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-emerald-800/50 rounded-lg transition-colors text-left">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-emerald-800/50 rounded-lg transition-colors text-left">
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </button>
        </div>
      </div>
    </aside>
  );
}