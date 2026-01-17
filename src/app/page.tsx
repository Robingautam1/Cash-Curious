'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight, Play, Zap, BookOpen, Target, TrendingUp, Award,
  Users, Sparkles, Shield, ChevronRight, ExternalLink, Twitter,
  Github, Mail, X, ChevronLeft, Lightbulb, CheckCircle,
  Clock, Star, Trophy, Menu, Instagram, Linkedin
} from 'lucide-react';
import { tracks, type Track, type Mission } from '@/data/lessons';
import confetti from 'canvas-confetti';

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
        <ellipse cx="80" cy="125" rx="50" ry="10" fill="rgba(0,0,0,0.1)" />
        <ellipse cx="80" cy="70" rx="55" ry="45" fill="#FF9F1C" stroke="black" strokeWidth="3" />
        <ellipse cx="130" cy="70" rx="18" ry="15" fill="#FF9F1C" stroke="black" strokeWidth="3" />
        <circle cx="126" cy="66" r="4" fill="black" />
        <circle cx="134" cy="66" r="4" fill="black" />
        <circle cx="100" cy="50" r="12" fill="white" stroke="black" strokeWidth="2" />
        <circle cx="103" cy="50" r="6" fill="black" />
        <polygon points="55,30 70,15 80,35" fill="#2EC4B6" stroke="black" strokeWidth="2" />
        <polygon points="105,30 90,15 80,35" fill="#2EC4B6" stroke="black" strokeWidth="2" />
        <rect x="40" y="100" width="18" height="25" rx="4" fill="#FF9F1C" stroke="black" strokeWidth="2" />
        <rect x="65" y="100" width="18" height="25" rx="4" fill="#FF9F1C" stroke="black" strokeWidth="2" />
        <rect x="90" y="100" width="18" height="25" rx="4" fill="#FF9F1C" stroke="black" strokeWidth="2" />
        <rect x="65" y="28" width="30" height="6" rx="3" fill="black" />
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
        <ellipse cx="90" cy="105" rx="70" ry="10" fill="rgba(0,0,0,0.1)" />
        <rect x="10" y="85" width="160" height="18" rx="4" fill="white" stroke="black" strokeWidth="3" />
        <rect x="15" y="72" width="150" height="15" rx="3" fill="#4CC9F0" stroke="black" strokeWidth="2" />
        <rect x="15" y="40" width="50" height="35" rx="3" fill={isHovered ? colors[colorIndex] : '#7209B7'} stroke="black" strokeWidth="3" />
        <rect x="60" y="45" width="55" height="30" rx="3" fill={isHovered ? colors[colorIndex] : '#7209B7'} stroke="black" strokeWidth="3" />
        <rect x="110" y="52" width="50" height="25" rx="3" fill="white" stroke="black" strokeWidth="3" />
        <rect x="70" y="25" width="40" height="28" rx="3" fill={isHovered ? colors[(colorIndex + 1) % colors.length] : '#7209B7'} stroke="black" strokeWidth="2" />
        <path d="M35 60 Q90 70 140 50" fill="none" stroke="white" strokeWidth="5" />
        <path d="M35 60 Q90 70 140 50" fill="none" stroke="black" strokeWidth="1" />
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
        <ellipse cx="80" cy="140" rx="60" ry="8" fill="rgba(0,0,0,0.1)" />
        <polygon points="20,130 140,130 130,120 30,120" fill="#1a1a1a" stroke="black" strokeWidth="2" />
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
              {i % 2 === 0 && i < 4 && (
                <ellipse cx={80 + (i * 5 - 10)} cy={y - 5} rx="6" ry="6" fill="#FFD700" stroke="black" strokeWidth="1.5" />
              )}
            </g>
          );
        })}
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
// TRACK COLORS MAPPING
// ============================================

const trackColors: Record<string, { primary: string; accent: string }> = {
  orange: { primary: '#FF9F1C', accent: '#2EC4B6' },
  purple: { primary: '#7209B7', accent: '#4CC9F0' },
  teal: { primary: '#118AB2', accent: '#2EC4B6' },
};

// ============================================
// MISSION MODAL COMPONENT (PROPERLY FORMATTED)
// ============================================

function MissionModal({
  mission,
  trackColor,
  onClose,
  onBack
}: {
  mission: Mission;
  trackColor: string;
  onClose: () => void;
  onBack: () => void;
}) {
  const [completed, setCompleted] = useState(false);
  const colors = trackColors[trackColor] || trackColors.orange;

  const handleComplete = () => {
    setCompleted(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: [colors.primary, colors.accent, '#FFD700', '#ffffff']
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="bg-[#FDFCF6] border-3 border-black rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: '8px 8px 0 0 rgba(0,0,0,1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-5 border-b-2 border-black flex items-center justify-between sticky top-0 z-10"
          style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-semibold text-white/90 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Missions
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-full text-white text-sm font-medium">
              <Clock size={14} />
              {mission.duration}
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-full text-white text-sm font-medium">
              <Star size={14} />
              +{mission.xpReward} XP
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors text-white rounded-full"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Mission Title */}
          <div className="mb-8">
            <p className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">Mission</p>
            <h2 className="text-3xl font-bold tracking-tight mb-2">{mission.title}</h2>
            <p className="text-gray-600 text-lg">{mission.shortDesc}</p>
          </div>

          {/* The Hook */}
          <div
            className="p-6 border-2 border-black rounded-xl mb-8"
            style={{ backgroundColor: `${colors.primary}10` }}
          >
            <p className="text-sm font-mono uppercase tracking-wider mb-3" style={{ color: colors.primary }}>
              The Hook
            </p>
            <p className="text-xl font-semibold leading-relaxed text-gray-900">{mission.content.hook}</p>
          </div>

          {/* Introduction */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {mission.content.intro}
          </p>

          {/* Lesson Points - Properly formatted */}
          <div className="space-y-6 mb-8">
            {mission.content.points.map((point, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold text-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{point.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-5 bg-gray-100 border-l-4 rounded-r-lg mb-8" style={{ borderColor: colors.accent }}>
            <p className="text-gray-800 font-medium leading-relaxed">{mission.content.summary}</p>
          </div>

          {/* Key Takeaways */}
          <div
            className="p-6 border-2 border-black rounded-xl mb-8"
            style={{ backgroundColor: `${colors.accent}10` }}
          >
            <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color: colors.accent }}>
              Key Takeaways
            </p>
            <ul className="space-y-3">
              {mission.content.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: colors.accent }} />
                  <span className="text-gray-800">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenge */}
          <div
            className="p-6 border-2 border-black rounded-xl mb-8"
            style={{ backgroundColor: '#fef3c7' }}
          >
            <p className="text-sm font-mono uppercase tracking-wider text-amber-700 mb-3">
              Your Challenge
            </p>
            <p className="text-lg text-amber-900 leading-relaxed">{mission.content.challenge}</p>
          </div>

          {/* Fun Fact */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl mb-8">
            <p className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
              Fun Fact
            </p>
            <p className="text-gray-600 leading-relaxed">{mission.content.funFact}</p>
          </div>

          {/* Action Button */}
          {!completed ? (
            <button
              onClick={handleComplete}
              className="w-full py-5 text-xl font-bold border-2 border-black rounded-xl flex items-center justify-center gap-3 text-white transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0"
              style={{
                backgroundColor: colors.primary,
                boxShadow: '6px 6px 0 0 rgba(0,0,0,1)'
              }}
            >
              <Trophy size={28} />
              {mission.content.action}
            </button>
          ) : (
            <div
              className="w-full py-8 text-center border-2 border-black rounded-xl"
              style={{ backgroundColor: '#10b981' }}
            >
              <div className="text-4xl mb-2">🎉</div>
              <div className="text-2xl font-bold text-white">Mission Complete!</div>
              <div className="text-white/80 mt-2 text-lg">+{mission.xpReward} XP earned</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// TRACK MODAL COMPONENT
// ============================================

function TrackModal({
  track,
  onClose,
  onSelectMission
}: {
  track: Track;
  onClose: () => void;
  onSelectMission: (mission: Mission) => void;
}) {
  const colors = trackColors[track.color] || trackColors.orange;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="bg-[#FDFCF6] border-3 border-black rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: '8px 8px 0 0 rgba(0,0,0,1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 border-b-2 border-black relative"
          style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors text-white rounded-full"
          >
            <X size={18} />
          </button>
          <p className="text-sm font-mono uppercase tracking-wider text-white/70 mb-2">Learning Track</p>
          <h2 className="text-2xl font-bold text-white">{track.title}</h2>
          <p className="text-white/80 mt-1">{track.tagline}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1.5 bg-white/20 rounded-full text-white text-sm font-medium flex items-center gap-1.5">
              <BookOpen size={14} />
              {track.totalLessons} Lessons
            </span>
            <span className="px-3 py-1.5 bg-white/20 rounded-full text-white text-sm font-medium flex items-center gap-1.5">
              <Clock size={14} />
              {track.totalDuration}
            </span>
            <span className="px-3 py-1.5 bg-white/20 rounded-full text-white text-sm font-medium flex items-center gap-1.5">
              <Target size={14} />
              {track.difficulty}
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <p className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-3">Skills You&apos;ll Learn</p>
          <div className="flex flex-wrap gap-2">
            {track.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-full bg-white font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missions List */}
        <div className="p-6">
          <p className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4">
            Select a Mission ({track.missions.length} available)
          </p>
          <div className="space-y-3">
            {track.missions.map((mission, i) => (
              <button
                key={mission.id}
                onClick={() => onSelectMission(mission)}
                className="w-full p-4 border-2 border-black rounded-xl text-left transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] bg-white active:translate-x-0 active:translate-y-0"
                style={{ boxShadow: '4px 4px 0 0 rgba(0,0,0,1)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-black font-bold text-white rounded-lg text-lg"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900">{mission.title}</h3>
                    <p className="text-gray-600 text-sm mt-0.5">{mission.shortDesc}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock size={12} /> {mission.duration}
                      </span>
                      <span className="text-xs font-medium flex items-center gap-1" style={{ color: colors.primary }}>
                        <Star size={12} /> +{mission.xpReward} XP
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-400 mt-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
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
  onClick: () => void;
}

function BlueprintCard({
  id, ageRange, title, subtitle, description, status, track, primaryColor, accentColor, metrics, onClick
}: BlueprintCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="blueprint-card corner-marks cursor-pointer rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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
          style={{ background: `linear-gradient(135deg, ${primaryColor}20, ${accentColor}20)` }}
        >
          <div
            className="px-4 py-2.5 border-2 border-black bg-white font-semibold text-sm flex items-center gap-2 rounded-lg"
            style={{ boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}
          >
            <Play size={14} fill="currentColor" />
            View All Missions
          </div>
        </div>
      </div>

      <div className="p-5 border-t-2 border-black">
        <div className="flex items-center justify-between mb-3">
          <div
            className="px-3 py-1 text-xs font-bold border-2 border-black text-white rounded"
            style={{ backgroundColor: accentColor }}
          >
            AGES {ageRange}
          </div>
          <span className="mono-label text-gray-400">TRACK</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-1">{title}</h3>
        <p className="mono-label mb-3" style={{ color: primaryColor }}>{subtitle}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {metrics.map((m, i) => (
            <div key={i} className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded">
              <div className="mono-label text-gray-400 mb-1">{m.label}</div>
              <div className="font-bold text-sm">{m.value}</div>
            </div>
          ))}
        </div>

        <button
          className="w-full py-3.5 font-semibold border-2 border-black flex items-center justify-center gap-2 text-white rounded-lg transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0"
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
        className="w-10 h-10 flex items-center justify-center border-2 border-black mb-3 text-white mt-4 rounded"
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
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cardData = [
    {
      id: "FIG. 01", ageRange: "6-10", title: "The Coin Collectors", subtitle: "// TRACK_A: SAVERS",
      description: "Master the fundamentals of saving. Learn needs vs. wants through interactive challenges that build lifelong habits.",
      status: "ACTIVE", track: "savers" as const, primaryColor: "#FF9F1C", accentColor: "#2EC4B6",
      metrics: [{ label: "MISSIONS", value: "8" }, { label: "DURATION", value: "8 weeks" }, { label: "LEVEL", value: "Beginner" }, { label: "XP TOTAL", value: "1,400" }],
      trackId: "track-6-10"
    },
    {
      id: "FIG. 02", ageRange: "11-15", title: "The Side-Hustlers", subtitle: "// TRACK_B: EARNERS",
      description: "Turn your skills into income. Learn budgeting, entrepreneurship, and how to avoid common money traps.",
      status: "ACTIVE", track: "earners" as const, primaryColor: "#7209B7", accentColor: "#4CC9F0",
      metrics: [{ label: "MISSIONS", value: "8" }, { label: "DURATION", value: "12 weeks" }, { label: "LEVEL", value: "Intermediate" }, { label: "XP TOTAL", value: "2,000" }],
      trackId: "track-11-15"
    },
    {
      id: "FIG. 03", ageRange: "15-18", title: "The Future Founders", subtitle: "// TRACK_C: INVESTORS",
      description: "Advanced wealth-building strategies. Master investing, credit, taxes, and building multiple income streams.",
      status: "ACTIVE", track: "investors" as const, primaryColor: "#118AB2", accentColor: "#2EC4B6",
      metrics: [{ label: "MISSIONS", value: "8" }, { label: "DURATION", value: "16 weeks" }, { label: "LEVEL", value: "Advanced" }, { label: "XP TOTAL", value: "2,650" }],
      trackId: "track-15-18"
    }
  ];

  const handleCardClick = (trackId: string) => {
    const track = tracks.find(t => t.id === trackId);
    if (track) {
      setSelectedTrack(track);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen dot-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black dark:border-white/20 bg-[#FDFCF6]/95 dark:bg-[#0B0F19]/95 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-lg text-white rounded"
              style={{ backgroundColor: '#FF9F1C', boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}
            >
              CC
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight dark:text-white">CashCurious</div>
              <div className="mono-label text-gray-500 dark:text-gray-400">v2.0</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('modules')} className="mono-label text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Modules
            </button>
            <button onClick={() => scrollToSection('features')} className="mono-label text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('footer')} className="mono-label text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('modules')}
              className="btn-blueprint bg-black text-white mono-label rounded-lg"
            >
              Get Started <ChevronRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-black dark:border-white/20 bg-[#FDFCF6] dark:bg-[#0B0F19] px-6 py-4 space-y-3">
            <button onClick={() => scrollToSection('modules')} className="block w-full text-left py-2 font-semibold dark:text-white">
              Modules
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 font-semibold dark:text-white">
              Features
            </button>
            <button onClick={() => scrollToSection('footer')} className="block w-full text-left py-2 font-semibold dark:text-white">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('modules')}
              className="w-full py-3 bg-black dark:bg-[#FFD166] text-white dark:text-black font-semibold rounded-lg"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-white rounded-lg" style={{ boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}>
                <div className="status-dot" />
                <span className="mono-label">24 Lessons • 3 Tracks • 6,000+ XP</span>
              </div>

              <h1 className="headline-heavy text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
                Financial<br />Literacy for<br />
                <span className="relative inline-block">
                  <span className="relative z-10">the Curious.</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 -z-0" style={{ backgroundColor: '#FF9F1C' }} />
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
                No boring lectures. No generic advice. Just street-smart lessons that build real wealth—one mission at a time.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('modules')}
                  className="btn-blueprint bg-black text-white rounded-lg"
                >
                  <Zap size={18} /> Start Learning
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="btn-blueprint bg-white text-black rounded-lg"
                >
                  <BookOpen size={18} /> See Features
                </button>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="mono-label text-gray-400 mb-3">Trusted by educators at</div>
                <div className="flex flex-wrap gap-6">
                  {["Stanford", "MIT", "Khan Academy", "EdSurge"].map(name => (
                    <span key={name} className="text-sm font-semibold text-gray-400 dark:text-gray-500">{name}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="blueprint-card p-6 corner-marks rounded-xl">
                <div className="id-badge">OVERVIEW</div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { color: '#FF9F1C', Icon: Target, ages: '6-10', label: 'Savers', lessons: 8 },
                    { color: '#7209B7', Icon: TrendingUp, ages: '11-15', label: 'Earners', lessons: 8 },
                    { color: '#118AB2', Icon: Award, ages: '15-18', label: 'Investors', lessons: 8 }
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleCardClick(`track-${item.ages.replace('-', '-')}`)}
                      className="text-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div
                        className="w-12 h-12 mx-auto mb-2 border-2 border-black flex items-center justify-center text-white rounded"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.Icon size={24} />
                      </div>
                      <div className="mono-label text-gray-500">Ages {item.ages}</div>
                      <div className="font-bold">{item.label}</div>
                      <div className="text-xs text-gray-400">{item.lessons} lessons</div>
                    </button>
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
      <section id="modules" className="py-20 px-6 border-t-2 border-black dark:border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="mono-label text-gray-400 mb-2">Learning Tracks</div>
              <h2 className="headline-heavy text-4xl md:text-5xl dark:text-white">Choose Your<br />Adventure</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="status-dot" />
              <span className="mono-label dark:text-gray-300">3 Tracks • 24 Missions</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map(card => (
              <BlueprintCard
                key={card.id}
                {...card}
                onClick={() => handleCardClick(card.trackId)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 border-t-2 border-black dark:border-white/20 bg-white dark:bg-[#0B0F19]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mono-label text-gray-400 mb-2">Platform Features</div>
              <h2 className="headline-heavy text-4xl mb-8 dark:text-white">Built for<br />Real Learning</h2>
              <div className="space-y-4">
                {[
                  { Icon: Zap, title: "Street-Smart Content", desc: "No fluff or filler. Real-world lessons written by finance educators who work with teens daily.", color: "#FF9F1C" },
                  { Icon: Shield, title: "COPPA Compliant", desc: "Built with child safety first. No ads, no data selling, no third-party trackers. Ever.", color: "#7209B7" },
                  { Icon: TrendingUp, title: "Progress Tracking", desc: "XP rewards, achievement badges, and detailed analytics for parents and educators.", color: "#118AB2" },
                  { Icon: Award, title: "24 Complete Missions", desc: "Comprehensive curriculum from piggy banks to investing, covering everything kids need.", color: "#2EC4B6" }
                ].map((f, i) => (
                  <div key={i} className="blueprint-card p-5 flex gap-4 items-start rounded-xl">
                    <div className="id-badge">{String(i + 1).padStart(2, '0')}</div>
                    <div
                      className="w-10 h-10 flex-shrink-0 border-2 border-black flex items-center justify-center mt-6 text-white rounded"
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
                  <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-white rounded" style={{ backgroundColor: '#4CC9F0' }}>SJ</div>
                  <div>
                    <div className="font-semibold">Sarah J.</div>
                    <div className="mono-label text-gray-500">Parent of 2 • California</div>
                  </div>
                </div>
              </div>

              <div
                className="mt-6 p-8 border-2 border-black rounded-xl"
                style={{ backgroundColor: '#118AB2', boxShadow: '6px 6px 0 0 rgba(0,0,0,1)' }}
              >
                <div className="mono-label text-white/70 mb-2">Get Started Today</div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to get curious?</h3>
                <p className="text-white/80 mb-6">Join 50,000+ families building financial literacy the fun way.</p>
                <button
                  onClick={() => scrollToSection('modules')}
                  className="btn-blueprint bg-white text-black w-full justify-center rounded-lg"
                >
                  Browse All Modules <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 px-6 border-t-2 border-black dark:border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-white rounded"
                  style={{ backgroundColor: '#FF9F1C', boxShadow: '3px 3px 0 0 rgba(0,0,0,1)' }}
                >
                  CC
                </div>
                <div>
                  <div className="font-bold dark:text-white">CashCurious</div>
                  <div className="mono-label text-gray-500">v2.0</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Financial literacy for the curious generation.</p>
              <div className="flex gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border-2 border-gray-300 dark:border-gray-600 dark:text-white flex items-center justify-center hover:border-black dark:hover:border-[#FFD166] transition-colors rounded">
                  <Twitter size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border-2 border-gray-300 dark:border-gray-600 dark:text-white flex items-center justify-center hover:border-black dark:hover:border-[#FFD166] transition-colors rounded">
                  <Instagram size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border-2 border-gray-300 dark:border-gray-600 dark:text-white flex items-center justify-center hover:border-black dark:hover:border-[#FFD166] transition-colors rounded">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
            <div>
              <div className="mono-label text-gray-400 mb-4">Product</div>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('modules')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">All Modules</button></li>
                <li><button onClick={() => handleCardClick('track-6-10')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Ages 6-10</button></li>
                <li><button onClick={() => handleCardClick('track-11-15')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Ages 11-15</button></li>
                <li><button onClick={() => handleCardClick('track-15-18')} className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Ages 15-18</button></li>
              </ul>
            </div>
            <div>
              <div className="mono-label text-gray-400 mb-4">Resources</div>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">For Educators <ExternalLink size={10} className="opacity-50" /></a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">For Parents <ExternalLink size={10} className="opacity-50" /></a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">Blog <ExternalLink size={10} className="opacity-50" /></a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">Help Center <ExternalLink size={10} className="opacity-50" /></a></li>
              </ul>
            </div>
            <div>
              <div className="mono-label text-gray-400 mb-4">Contact</div>
              <ul className="space-y-2">
                <li><a href="mailto:hello@cashcurious.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-2 transition-colors"><Mail size={14} /> hello@cashcurious.com</a></li>
              </ul>
              <div className="mt-6">
                <div className="mono-label text-gray-400 mb-2">Legal</div>
                <ul className="space-y-1">
                  <li><a href="#" className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-xs text-gray-500 hover:text-black dark:hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap justify-between items-center gap-4">
            <div className="mono-label text-gray-500">© 2026 CashCurious. All rights reserved.</div>
            <div className="text-xs text-gray-400">Made with ❤️ for the next generation of money-smart kids</div>
          </div>
        </div>
      </footer>

      {/* Track Modal */}
      {selectedTrack && !selectedMission && (
        <TrackModal
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)}
          onSelectMission={(mission) => setSelectedMission(mission)}
        />
      )}

      {/* Mission Modal */}
      {selectedTrack && selectedMission && (
        <MissionModal
          mission={selectedMission}
          trackColor={selectedTrack.color}
          onClose={() => { setSelectedTrack(null); setSelectedMission(null); }}
          onBack={() => setSelectedMission(null)}
        />
      )}
    </main>
  );
}
