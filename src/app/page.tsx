'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight, Play, Zap, BookOpen, Target, TrendingUp, Award,
  Users, Sparkles, Shield, ChevronRight, ExternalLink, Twitter,
  Github, Mail
} from 'lucide-react';

// ============================================
// SVG ILLUSTRATION COMPONENTS
// ============================================

function PolyPiggy({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className={`transition-all duration-300 ${isHovered ? '' : 'animate-float'}`}
      style={{ transform: isHovered ? 'scale(1.15)' : 'scale(1)' }}
    >
      <svg width="160" height="140" viewBox="0 0 160 140">
        {/* Shadow */}
        <ellipse cx="80" cy="125" rx="50" ry="10" fill="rgba(0,0,0,0.1)" />
        {/* Body */}
        <ellipse cx="80" cy="70" rx="55" ry="45" fill="#FF9F1C" stroke="black" strokeWidth="3" />
        {/* Snout */}
        <ellipse cx="130" cy="70" rx="18" ry="15" fill="#FF9F1C" stroke="black" strokeWidth="3" />
        <circle cx="126" cy="66" r="4" fill="black" />
        <circle cx="134" cy="66" r="4" fill="black" />
        {/* Eyes */}
        <circle cx="100" cy="50" r="12" fill="white" stroke="black" strokeWidth="2" />
        <circle cx="103" cy="50" r="6" fill="black" />
        {/* Ears */}
        <polygon points="55,30 70,15 80,35" fill="#2EC4B6" stroke="black" strokeWidth="2" />
        <polygon points="105,30 90,15 80,35" fill="#2EC4B6" stroke="black" strokeWidth="2" />
        {/* Legs */}
        <rect x="40" y="100" width="18" height="25" rx="4" fill="#FF9F1C" stroke="black" strokeWidth="2" />
        <rect x="65" y="100" width="18" height="25" rx="4" fill="#FF9F1C" stroke="black" strokeWidth="2" />
        <rect x="90" y="100" width="18" height="25" rx="4" fill="#FF9F1C" stroke="black" strokeWidth="2" />
        {/* Coin slot */}
        <rect x="65" y="28" width="30" height="6" rx="3" fill="black" />
        {/* Floating coin */}
        {isHovered && (
          <g className="animate-float">
            <ellipse cx="80" cy="10" rx="12" ry="12" fill="#FFD700" stroke="black" strokeWidth="2" />
            <text x="80" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#8B6914">$</text>
          </g>
        )}
      </svg>
    </div>
  );
}

function VoxelSneaker({ isHovered }: { isHovered: boolean }) {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#7209B7', '#4CC9F0', '#F72585', '#FFD166'];

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => setColorIndex(i => (i + 1) % colors.length), 200);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="transition-all duration-300"
      style={{
        transform: isHovered ? 'scale(1.15) rotateY(30deg)' : 'scale(1)',
        animation: isHovered ? 'spin 2s linear infinite' : 'float 4s ease-in-out infinite'
      }}
    >
      <svg width="180" height="120" viewBox="0 0 180 120">
        {/* Shadow */}
        <ellipse cx="90" cy="105" rx="70" ry="10" fill="rgba(0,0,0,0.1)" />
        {/* Sole */}
        <rect x="10" y="85" width="160" height="18" rx="4" fill="white" stroke="black" strokeWidth="3" />
        {/* Midsole */}
        <rect x="15" y="72" width="150" height="15" rx="3" fill="#4CC9F0" stroke="black" strokeWidth="2" />
        {/* Heel */}
        <rect x="15" y="40" width="50" height="35" rx="3" fill={isHovered ? colors[colorIndex] : '#7209B7'} stroke="black" strokeWidth="3" />
        {/* Mid body */}
        <rect x="60" y="45" width="55" height="30" rx="3" fill={isHovered ? colors[colorIndex] : '#7209B7'} stroke="black" strokeWidth="3" />
        {/* Toe box */}
        <rect x="110" y="52" width="50" height="25" rx="3" fill="white" stroke="black" strokeWidth="3" />
        {/* Tongue */}
        <rect x="70" y="25" width="40" height="28" rx="3" fill={isHovered ? colors[(colorIndex + 1) % colors.length] : '#7209B7'} stroke="black" strokeWidth="2" />
        {/* Swoosh */}
        <path d="M35 60 Q90 70 140 50" fill="none" stroke="white" strokeWidth="5" />
        <path d="M35 60 Q90 70 140 50" fill="none" stroke="black" strokeWidth="1" />
        {/* Laces */}
        <line x1="75" y1="42" x2="105" y2="42" stroke="white" strokeWidth="4" />
        <line x1="78" y1="52" x2="102" y2="52" stroke="white" strokeWidth="4" />
      </svg>
    </div>
  );
}

function GrowthTower({ isHovered }: { isHovered: boolean }) {
  const [steps, setSteps] = useState(5);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => setSteps(s => Math.min(s + 1, 8)), 200);
      return () => clearInterval(interval);
    } else {
      setSteps(5);
    }
  }, [isHovered]);

  return (
    <div
      className={`transition-all duration-300 ${isHovered ? '' : 'animate-float'}`}
      style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
    >
      <svg width="160" height="150" viewBox="0 0 160 150">
        {/* Shadow */}
        <ellipse cx="80" cy="140" rx="60" ry="8" fill="rgba(0,0,0,0.1)" />
        {/* Base */}
        <polygon points="20,130 140,130 130,120 30,120" fill="#1a1a1a" stroke="black" strokeWidth="2" />
        {/* Hexagonal platforms */}
        {Array.from({ length: steps }).map((_, i) => {
          const y = 115 - i * 18;
          const width = 100 - i * 8;
          const x = 80 - width / 2;
          const color = i % 2 === 0 ? '#118AB2' : '#2EC4B6';
          return (
            <g key={i}>
              <polygon
                points={`${x},${y} ${x + width},${y} ${x + width - 5},${y - 15} ${x + 5},${y - 15}`}
                fill={color}
                stroke="black"
                strokeWidth="2"
              />
              {/* Coins on some platforms */}
              {i % 2 === 0 && i < 4 && (
                <ellipse cx={80 + (i * 5 - 10)} cy={y - 5} rx="6" ry="6" fill="#FFD700" stroke="black" strokeWidth="1.5" />
              )}
            </g>
          );
        })}
        {/* Growth arrow */}
        <polygon
          points={`80,${25 - (steps - 5) * 10} 72,${40 - (steps - 5) * 10} 88,${40 - (steps - 5) * 10}`}
          fill="#2EC4B6"
          stroke="black"
          strokeWidth="2"
        />
        <rect x="77" y={40 - (steps - 5) * 10} width="6" height={50 + (steps - 5) * 5} fill="#2EC4B6" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
}

// ============================================
// BLUEPRINT CARD COMPONENT
// ============================================

interface BlueprintCardProps {
  id: string;
  ageRange: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  track: 'savers' | 'earners' | 'investors';
  primaryColor: string;
  accentColor: string;
  metrics: { label: string; value: string }[];
}

function BlueprintCard({
  id, ageRange, title, subtitle, description, status, track, primaryColor, accentColor, metrics
}: BlueprintCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="blueprint-card corner-marks cursor-pointer rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="id-badge">{id}</div>
      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
        <span className="mono-label text-gray-500">{status}</span>
        <div className="status-dot" />
      </div>

      <div className="h-56 w-full relative bg-gradient-to-b from-gray-50 to-white tech-grid flex items-center justify-center pt-6">
        {track === 'savers' && <PolyPiggy isHovered={isHovered} />}
        {track === 'earners' && <VoxelSneaker isHovered={isHovered} />}
        {track === 'investors' && <GrowthTower isHovered={isHovered} />}

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: `linear-gradient(135deg, ${primaryColor}15, ${accentColor}15)` }}
        >
          <div
            className="px-4 py-2 border-2 border-black bg-white font-semibold text-sm flex items-center gap-2"
            style={{ boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}
          >
            <Play size={14} fill="currentColor" />
            View Module
          </div>
        </div>
      </div>

      <div className="p-5 border-t-2 border-black">
        <div className="flex items-center justify-between mb-3">
          <div
            className="px-3 py-1 text-xs font-bold border-2 border-black text-white"
            style={{ backgroundColor: accentColor }}
          >
            AGES {ageRange}
          </div>
          <span className="mono-label text-gray-400">MODULE</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-1">{title}</h3>
        <p className="mono-label mb-3" style={{ color: primaryColor }}>{subtitle}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {metrics.map((m, i) => (
            <div key={i} className="px-3 py-2 bg-gray-50 border border-gray-200">
              <div className="mono-label text-gray-400 mb-1">{m.label}</div>
              <div className="font-bold text-sm">{m.value}</div>
            </div>
          ))}
        </div>

        <button
          className="w-full py-3 font-semibold border-2 border-black flex items-center justify-center gap-2 text-white rounded-lg"
          style={{ backgroundColor: primaryColor, boxShadow: '4px 4px 0 0 rgba(0,0,0,1)' }}
        >
          Start Learning
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ============================================
// STAT CARD COMPONENT
// ============================================

function StatCard({ icon: Icon, value, label, color }: {
  icon: React.ComponentType<{ size?: number }>;
  value: string;
  label: string;
  color: string
}) {
  return (
    <div className="blueprint-card p-5 rounded-xl">
      <div className="id-badge">STAT</div>
      <div
        className="w-10 h-10 flex items-center justify-center border-2 border-black mb-3 text-white mt-4"
        style={{ backgroundColor: color }}
      >
        <Icon size={20} />
      </div>
      <div className="text-3xl font-bold tracking-tight">{value}</div>
      <div className="mono-label text-gray-500 mt-1">{label}</div>
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function Home() {
  const cardData: BlueprintCardProps[] = [
    {
      id: "FIG. 01", ageRange: "6-10", title: "The Piggy Bank Challenge", subtitle: "// TRACK_A: SAVERS",
      description: "Master the fundamentals of saving. Learn needs vs. wants through interactive challenges that build lifelong habits.",
      status: "ACTIVE", track: "savers", primaryColor: "#FF9F1C", accentColor: "#2EC4B6",
      metrics: [{ label: "LESSONS", value: "12" }, { label: "DURATION", value: "4 weeks" }, { label: "LEVEL", value: "Beginner" }, { label: "RATING", value: "4.9/5" }]
    },
    {
      id: "FIG. 02", ageRange: "11-15", title: "Side Hustle Simulator", subtitle: "// TRACK_B: EARNERS",
      description: "Discover entrepreneurship basics. Set savings goals, track progress, and learn how compound interest accelerates growth.",
      status: "ACTIVE", track: "earners", primaryColor: "#7209B7", accentColor: "#4CC9F0",
      metrics: [{ label: "LESSONS", value: "18" }, { label: "DURATION", value: "6 weeks" }, { label: "LEVEL", value: "Intermediate" }, { label: "RATING", value: "4.8/5" }]
    },
    {
      id: "FIG. 03", ageRange: "15-18", title: "The Compound Lab", subtitle: "// TRACK_C: INVESTORS",
      description: "Unlock investing fundamentals. Understand market dynamics, portfolio basics, and the power of compound returns.",
      status: "ACTIVE", track: "investors", primaryColor: "#118AB2", accentColor: "#2EC4B6",
      metrics: [{ label: "LESSONS", value: "24" }, { label: "DURATION", value: "8 weeks" }, { label: "LEVEL", value: "Advanced" }, { label: "RATING", value: "4.9/5" }]
    }
  ];

  return (
    <main className="min-h-screen dot-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-[#FDFCF6]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-lg text-white"
              style={{ backgroundColor: '#FF9F1C', boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}
            >
              MQ
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight">MoneyQuest</div>
              <div className="mono-label text-gray-500">v2.0</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="mono-label text-gray-600 hover:text-black transition-colors">Modules</a>
            <a href="#" className="mono-label text-gray-600 hover:text-black transition-colors">For Schools</a>
            <a href="#" className="mono-label text-gray-600 hover:text-black transition-colors">Documentation</a>
            <button className="btn-blueprint bg-black text-white mono-label rounded-lg">
              Get Started <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-white rounded-lg" style={{ boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}>
                <div className="status-dot" />
                <span className="mono-label">System Online — 50,000+ Active Users</span>
              </div>

              <h1 className="headline-heavy text-6xl md:text-7xl lg:text-8xl">
                Financial<br />Literacy for<br />
                <span className="relative inline-block">
                  <span className="relative z-10">the Next Gen.</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 -z-0" style={{ backgroundColor: '#FF9F1C' }} />
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-md leading-relaxed">
                Interactive 3D learning modules designed to build real financial skills. No boring lectures. Just engaging, game-based education.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-blueprint bg-black text-white rounded-lg">
                  <Zap size={18} /> Launch Platform
                </button>
                <button className="btn-blueprint bg-white text-black rounded-lg">
                  <BookOpen size={18} /> View Curriculum
                </button>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="mono-label text-gray-400 mb-3">Trusted By</div>
                <div className="flex flex-wrap gap-6">
                  {["Stanford Ed Lab", "MIT Media Lab", "Khan Academy", "EdSurge"].map(name => (
                    <span key={name} className="text-sm font-semibold text-gray-400">{name}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="blueprint-card p-6 corner-marks rounded-xl">
                <div className="id-badge">OVERVIEW</div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { color: '#FF9F1C', Icon: Target, ages: '6-10', label: 'Savers' },
                    { color: '#7209B7', Icon: TrendingUp, ages: '11-15', label: 'Earners' },
                    { color: '#118AB2', Icon: Award, ages: '15-18', label: 'Investors' }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-12 h-12 mx-auto mb-2 border-2 border-black flex items-center justify-center text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.Icon size={24} />
                      </div>
                      <div className="mono-label text-gray-500">Ages {item.ages}</div>
                      <div className="font-bold">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard icon={Users} value="50K+" label="Active Learners" color="#FF9F1C" />
                <StatCard icon={Sparkles} value="98%" label="Completion Rate" color="#7209B7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-6 border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="mono-label text-gray-400 mb-2">Learning Tracks</div>
              <h2 className="headline-heavy text-4xl md:text-5xl">Choose Your<br />Adventure</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="status-dot" />
              <span className="mono-label">3 Modules Available</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map(card => <BlueprintCard key={card.id} {...card} />)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-t-2 border-black bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mono-label text-gray-400 mb-2">Platform Features</div>
              <h2 className="headline-heavy text-4xl mb-8">Built for<br />Real Learning</h2>
              <div className="space-y-4">
                {[
                  { Icon: Zap, title: "3D Interactive Simulations", desc: "Engaging visual experiences that make abstract concepts tangible.", color: "#FF9F1C" },
                  { Icon: Shield, title: "COPPA Compliant & Safe", desc: "Built with child safety as the foundation. No ads, no data selling.", color: "#7209B7" },
                  { Icon: TrendingUp, title: "Progress Tracking", desc: "Real-time analytics for parents and educators to monitor growth.", color: "#118AB2" },
                  { Icon: Award, title: "Achievement System", desc: "Gamified rewards that motivate continued learning and mastery.", color: "#2EC4B6" }
                ].map((f, i) => (
                  <div key={i} className="blueprint-card p-5 flex gap-4 items-start rounded-xl">
                    <div className="id-badge">{String(i + 1).padStart(2, '0')}</div>
                    <div
                      className="w-10 h-10 flex-shrink-0 border-2 border-black flex items-center justify-center mt-6 text-white"
                      style={{ backgroundColor: f.color }}
                    >
                      <f.Icon size={20} />
                    </div>
                    <div className="pt-6">
                      <h3 className="font-bold mb-1">{f.title}</h3>
                      <p className="text-sm text-gray-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="blueprint-card p-8 corner-marks rounded-xl">
                <div className="id-badge">TESTIMONIAL</div>
                <div className="mono-label text-gray-400 mb-4 pt-6">Featured Review</div>
                <blockquote className="text-2xl font-bold tracking-tight leading-tight mb-6">
                  &quot;My kids actually ASK to do their financial lessons now. That&apos;s never happened with any educational platform.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#4CC9F0' }}>SJ</div>
                  <div>
                    <div className="font-semibold">Sarah J.</div>
                    <div className="mono-label text-gray-500">Parent of 2 — California</div>
                  </div>
                </div>
              </div>

              <div
                className="mt-6 p-8 border-2 border-black rounded-xl"
                style={{ backgroundColor: '#118AB2', boxShadow: '6px 6px 0 0 rgba(0,0,0,1)' }}
              >
                <div className="mono-label text-white/70 mb-2">Get Started</div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to launch?</h3>
                <p className="text-white/80 mb-6">Join 50,000+ families building financial literacy the fun way.</p>
                <button className="btn-blueprint bg-white text-black w-full justify-center rounded-lg">
                  Create Free Account <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: '#FF9F1C', boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}
                >
                  MQ
                </div>
                <div>
                  <div className="font-bold">MoneyQuest</div>
                  <div className="mono-label text-gray-500">v2.0</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Financial literacy for the next generation.</p>
            </div>
            {[
              { title: "Product", links: ["All Modules", "For Schools", "For Parents", "Pricing"] },
              { title: "Resources", links: ["Documentation", "API", "Blog", "Support"] },
              { title: "Company", links: ["About", "Careers", "Privacy", "Terms"] }
            ].map(col => (
              <div key={col.title}>
                <div className="mono-label text-gray-400 mb-4">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-600 hover:text-black flex items-center gap-1 transition-colors">
                        {link} <ExternalLink size={10} className="opacity-50" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center gap-4">
            <div className="mono-label text-gray-500">© 2026 MoneyQuest. All rights reserved.</div>
            <div className="flex gap-4">
              {[Twitter, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
