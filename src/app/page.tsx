'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera, Float, Outlines, ContactShadows } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, X, CheckCircle, XCircle, Sparkles, Coins, TrendingUp, LogIn } from 'lucide-react';
import * as THREE from 'three';

// ============================================
// 3D MODELS - Built Programmatically
// ============================================

// Model A: Piggy Bank with Hovering Coin (Ages 6-10 "Explorers")
function PiggyBankModel({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const coinRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Bouncy movement
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * (isHovered ? 6 : 3)) * (isHovered ? 0.25 : 0.15);
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
    if (coinRef.current) {
      // Coin hovers and spins above piggy
      coinRef.current.position.y = 1.4 + Math.sin(state.clock.elapsedTime * 4) * 0.15;
      coinRef.current.rotation.y += isHovered ? 0.08 : 0.03;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} rotation={[0.1, -0.4, 0]} scale={0.85}>
        {/* Main body - Pink cylinder */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.7, 0.8, 1.3, 32]} />
          <meshStandardMaterial color="#FF9F1C" roughness={0.4} />
          <Outlines thickness={0.05} color="black" />
        </mesh>

        {/* Snout */}
        <mesh position={[0.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.32, 0.22, 32]} />
          <meshStandardMaterial color="#FFBF69" roughness={0.4} />
          <Outlines thickness={0.04} color="black" />
        </mesh>

        {/* Nostrils */}
        <mesh position={[0.96, 0.06, 0.08]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.96, 0.06, -0.08]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Ears */}
        <mesh position={[0.15, 0.65, 0.3]} rotation={[0.3, 0, 0.25]}>
          <coneGeometry args={[0.18, 0.35, 4]} />
          <meshStandardMaterial color="#FF9F1C" roughness={0.4} />
          <Outlines thickness={0.04} color="black" />
        </mesh>
        <mesh position={[0.15, 0.65, -0.3]} rotation={[-0.3, 0, 0.25]}>
          <coneGeometry args={[0.18, 0.35, 4]} />
          <meshStandardMaterial color="#FF9F1C" roughness={0.4} />
          <Outlines thickness={0.04} color="black" />
        </mesh>

        {/* Eyes */}
        <mesh position={[0.5, 0.3, 0.32]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0.55, 0.33, 0.36]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.5, 0.3, -0.32]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0.55, 0.33, -0.36]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Coin slot */}
        <mesh position={[0, 0.78, 0]}>
          <boxGeometry args={[0.4, 0.05, 0.08]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Legs */}
        {[
          [0.35, -0.55, 0.35],
          [0.35, -0.55, -0.35],
          [-0.35, -0.55, 0.35],
          [-0.35, -0.55, -0.35],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <cylinderGeometry args={[0.1, 0.12, 0.28, 16]} />
            <meshStandardMaterial color="#FFBF69" roughness={0.4} />
            <Outlines thickness={0.03} color="black" />
          </mesh>
        ))}

        {/* Curly tail */}
        <mesh position={[-0.7, 0.12, 0]} rotation={[0, 0, 0.4]}>
          <torusGeometry args={[0.1, 0.035, 8, 16, Math.PI * 1.5]} />
          <meshStandardMaterial color="#FFBF69" roughness={0.4} />
          <Outlines thickness={0.02} color="black" />
        </mesh>

        {/* Hovering Coin */}
        <group ref={coinRef} position={[0, 1.4, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.06, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.4} roughness={0.3} />
            <Outlines thickness={0.03} color="black" />
          </mesh>
          {/* Dollar sign on coin */}
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.06, 0.01, 0.2]} />
            <meshStandardMaterial color="#B8860B" />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

// Model B: Voxel Game Controller (Ages 11-15 "Creators")
function GameControllerModel({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += isHovered ? 0.05 : 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} rotation={[0.15, 0, 0.08]} scale={0.8}>
        {/* Main body */}
        <mesh>
          <boxGeometry args={[2, 0.45, 1.1]} />
          <meshStandardMaterial color="#7209B7" roughness={0.4} />
          <Outlines thickness={0.05} color="black" />
        </mesh>

        {/* Left grip */}
        <mesh position={[-0.75, -0.25, 0]} rotation={[0, 0, 0.15]}>
          <boxGeometry args={[0.45, 0.6, 0.8]} />
          <meshStandardMaterial color="#7209B7" roughness={0.4} />
          <Outlines thickness={0.04} color="black" />
        </mesh>

        {/* Right grip */}
        <mesh position={[0.75, -0.25, 0]} rotation={[0, 0, -0.15]}>
          <boxGeometry args={[0.45, 0.6, 0.8]} />
          <meshStandardMaterial color="#7209B7" roughness={0.4} />
          <Outlines thickness={0.04} color="black" />
        </mesh>

        {/* D-Pad */}
        <mesh position={[-0.5, 0.25, 0]}>
          <boxGeometry args={[0.1, 0.06, 0.35]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[-0.5, 0.25, 0]}>
          <boxGeometry args={[0.35, 0.06, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Action buttons */}
        {[
          { pos: [0.5, 0.27, 0.12] as [number, number, number], color: '#4CC9F0' },
          { pos: [0.5, 0.27, -0.12] as [number, number, number], color: '#06D6A0' },
          { pos: [0.32, 0.27, 0] as [number, number, number], color: '#FF9F1C' },
          { pos: [0.68, 0.27, 0] as [number, number, number], color: '#F72585' },
        ].map((btn, i) => (
          <mesh key={i} position={btn.pos}>
            <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
            <meshStandardMaterial color={btn.color} roughness={0.3} />
            <Outlines thickness={0.02} color="black" />
          </mesh>
        ))}

        {/* Joysticks */}
        <mesh position={[-0.22, 0.3, 0.2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
          <meshStandardMaterial color="#4CC9F0" roughness={0.4} />
          <Outlines thickness={0.02} color="black" />
        </mesh>
        <mesh position={[0.22, 0.3, -0.2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
          <meshStandardMaterial color="#4CC9F0" roughness={0.4} />
          <Outlines thickness={0.02} color="black" />
        </mesh>

        {/* Center buttons */}
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[0.15, 0.05, 0.1]} />
          <meshStandardMaterial color="#4CC9F0" roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

// Model C: Rising Staircase with Door (Ages 15-18 "Investors")
function StaircaseModel({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow, steady drift
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
      groupRef.current.rotation.y += isHovered ? 0.015 : 0.004;
    }
  });

  const stairs = [
    { height: 0.25, color: '#06D6A0' },
    { height: 0.45, color: '#0BC9A0' },
    { height: 0.7, color: '#118AB2' },
    { height: 1.0, color: '#0A7A9A' },
    { height: 1.35, color: '#06D6A0' },
  ];

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.2}>
      <group ref={groupRef} rotation={[0, -0.7, 0]} scale={0.75}>
        {/* Base platform */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[2.8, 0.12, 1.3]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
          <Outlines thickness={0.04} color="black" />
        </mesh>

        {/* Stairs */}
        {stairs.map((stair, i) => (
          <mesh key={i} position={[-0.9 + i * 0.45, stair.height / 2 - 0.08, 0]}>
            <boxGeometry args={[0.35, stair.height, 0.8]} />
            <meshStandardMaterial color={stair.color} roughness={0.4} />
            <Outlines thickness={0.04} color="black" />
          </mesh>
        ))}

        {/* Door at the top */}
        <group position={[1.1, 1.1, 0]}>
          {/* Door frame */}
          <mesh>
            <boxGeometry args={[0.5, 0.8, 0.1]} />
            <meshStandardMaterial color="#118AB2" roughness={0.4} />
            <Outlines thickness={0.04} color="black" />
          </mesh>
          {/* Door knob */}
          <mesh position={[0.15, 0, 0.08]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#FFD700" metalness={0.5} roughness={0.3} />
          </mesh>
          {/* Glow effect - star */}
          <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI / 4]}>
            <octahedronGeometry args={[0.12]} />
            <meshStandardMaterial color="#FFD166" roughness={0.3} />
            <Outlines thickness={0.02} color="black" />
          </mesh>
        </group>

        {/* Coins on stairs */}
        {[0, 2, 4].map((stairIndex, i) => (
          <mesh
            key={i}
            position={[-0.9 + stairIndex * 0.45, stairs[stairIndex].height + 0.15, 0.25]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.1, 0.1, 0.03, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.4} roughness={0.3} />
            <Outlines thickness={0.02} color="black" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// ============================================
// TRACK CARD COMPONENT
// ============================================

interface TrackCardProps {
  title: string;
  subtitle: string;
  ageRange: string;
  description: string;
  icon: React.ReactNode;
  colorTheme: {
    primary: string;
    secondary: string;
  };
  model: 'piggy' | 'controller' | 'staircase';
  onClick: () => void;
}

function TrackCard({
  title,
  subtitle,
  ageRange,
  description,
  icon,
  colorTheme,
  model,
  onClick,
}: TrackCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card-brutal overflow-hidden cursor-pointer"
      style={{
        backgroundColor: isHovered ? colorTheme.primary : 'white',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* 3D Canvas */}
      <div
        className="h-52 w-full relative border-b-2 border-black"
        style={{
          background: `linear-gradient(135deg, ${colorTheme.primary}25, ${colorTheme.secondary}25)`,
        }}
      >
        <Canvas>
          <OrthographicCamera makeDefault position={[5, 5, 5]} zoom={50} near={0.1} far={1000} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-5, 5, -5]} intensity={0.4} />
          {model === 'piggy' && <PiggyBankModel isHovered={isHovered} />}
          {model === 'controller' && <GameControllerModel isHovered={isHovered} />}
          {model === 'staircase' && <StaircaseModel isHovered={isHovered} />}
          <ContactShadows position={[0, -1.2, 0]} opacity={0.35} scale={6} blur={2} far={3} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Age Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border-2 border-black text-sm font-bold mb-3"
          style={{
            backgroundColor: isHovered ? 'white' : colorTheme.primary,
            color: isHovered ? colorTheme.primary : 'white',
          }}
        >
          {icon}
          Ages {ageRange}
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold mb-1"
          style={{ color: isHovered ? 'white' : '#1a1a1a' }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          className="text-sm font-semibold mb-2"
          style={{ color: isHovered ? 'rgba(255,255,255,0.85)' : colorTheme.primary }}
        >
          {subtitle}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: isHovered ? 'rgba(255,255,255,0.9)' : '#666' }}
        >
          {description}
        </p>

        {/* CTA Button */}
        <button
          className="mt-4 w-full py-3 rounded-lg border-2 border-black font-bold shadow-brutal-sm transition-all hover:shadow-brutal"
          style={{
            backgroundColor: isHovered ? 'white' : colorTheme.secondary,
            color: isHovered ? colorTheme.primary : 'white',
          }}
        >
          🎮 Start Quest
        </button>
      </div>
    </motion.div>
  );
}

// ============================================
// MINI-EXERCISE MODAL
// ============================================

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeLesson: 'explorers' | 'creators' | 'investors' | null;
}

function LessonModal({ isOpen, onClose, activeLesson }: LessonModalProps) {
  const [answered, setAnswered] = useState<'correct' | 'wrong' | null>(null);

  const lessons = {
    explorers: {
      title: '💰 The $5 Decision!',
      question: 'You found $5! What do you do?',
      optionA: { text: '🍬 Buy Candy Now', isCorrect: false },
      optionB: { text: '🧸 Save for a Toy', isCorrect: true },
      successMsg: "Amazing! Saving helps you get bigger things! 🎉",
      failMsg: "Candy is yummy, but saving gets you MORE! 🤔",
      color: '#FF9F1C',
    },
    creators: {
      title: '🎮 The Sneaker Goal!',
      question: 'You want $100 sneakers. You earn $20/week. How do you reach your goal?',
      optionA: { text: '😅 Borrow from friends', isCorrect: false },
      optionB: { text: '📊 Save $20/week for 5 weeks', isCorrect: true },
      successMsg: "Smart! Patience + Planning = Success! 🚀",
      failMsg: "Borrowing feels easy but saving builds REAL power! 💪",
      color: '#7209B7',
    },
    investors: {
      title: '📈 Compound Interest!',
      question: 'You invest $100 at 10% yearly. After 1 year, you have...',
      optionA: { text: '💵 $110 (It grows!)', isCorrect: true },
      optionB: { text: '💵 $100 (Same amount)', isCorrect: false },
      successMsg: "Exactly! Money can GROW while you sleep! 🌙",
      failMsg: "With investing, your money works FOR you! Learn more! 📚",
      color: '#06D6A0',
    },
  };

  const lesson = activeLesson ? lessons[activeLesson] : null;

  const handleAnswer = (isCorrect: boolean) => {
    setAnswered(isCorrect ? 'correct' : 'wrong');
  };

  const handleClose = () => {
    setAnswered(null);
    onClose();
  };

  if (!lesson) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white border-4 border-black rounded-2xl p-8 max-w-md w-full shadow-brutal-lg relative"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full border-2 border-black bg-white hover:bg-gray-100 transition-colors shadow-brutal-sm"
              onClick={handleClose}
            >
              <X size={20} />
            </button>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-black text-white font-bold mb-4 shadow-brutal-sm"
              style={{ backgroundColor: lesson.color }}
            >
              <Sparkles size={18} />
              Quick Challenge!
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>

            {/* Question */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{lesson.question}</p>

            {/* Answer feedback or options */}
            {answered ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`p-6 rounded-xl border-2 border-black text-center ${answered === 'correct' ? 'bg-green-100' : 'bg-red-100'
                  }`}
              >
                {answered === 'correct' ? (
                  <>
                    <motion.div
                      className="animate-celebrate inline-block"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle size={56} className="mx-auto mb-3 text-green-600" />
                    </motion.div>
                    <p className="text-xl font-bold text-green-700">Success! 🎉</p>
                    <p className="text-gray-600 mt-2">{lesson.successMsg}</p>
                  </>
                ) : (
                  <>
                    <XCircle size={56} className="mx-auto mb-3 text-red-500" />
                    <p className="text-xl font-bold text-red-600">Not quite! 🤔</p>
                    <p className="text-gray-600 mt-2">{lesson.failMsg}</p>
                  </>
                )}
                <button
                  className="mt-5 btn-brutal bg-black text-white w-full"
                  onClick={handleClose}
                >
                  Continue Learning →
                </button>
              </motion.div>
            ) : (
              <div className="space-y-3">
                <button
                  className="w-full btn-brutal bg-red-400 text-white hover:bg-red-500 text-left"
                  onClick={() => handleAnswer(lesson.optionA.isCorrect)}
                >
                  {lesson.optionA.text}
                </button>
                <button
                  className="w-full btn-brutal bg-green-400 text-white hover:bg-green-500 text-left"
                  onClick={() => handleAnswer(lesson.optionB.isCorrect)}
                >
                  {lesson.optionB.text}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function Home() {
  const [activeLesson, setActiveLesson] = useState<'explorers' | 'creators' | 'investors' | null>(null);

  const openLesson = (track: 'explorers' | 'creators' | 'investors') => {
    setActiveLesson(track);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FFFBF0]/95 backdrop-blur-sm border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF9F1C] rounded-xl border-2 border-black shadow-brutal-sm flex items-center justify-center">
              <Coins size={22} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">MoneyQuest</span>
          </div>

          {/* Gamified Login Button */}
          <button className="btn-pill flex items-center gap-2 bg-[#7209B7] text-white hover:bg-[#5c07a0]">
            <LogIn size={18} />
            Gamified Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg border-2 border-black bg-white shadow-brutal-sm">
            <span className="text-xl">🎮</span>
            <span className="font-bold">Financial Literacy for Kids</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Level Up Your{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #FF9F1C, #7209B7, #06D6A0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Money.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
            Choose your character to start learning.
            <strong> Earn, save, and grow!</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-brutal text-lg px-8 py-4 bg-[#FF9F1C] text-white">
              🚀 Start Free
            </button>
            <button className="btn-brutal text-lg px-8 py-4 bg-white text-black">
              📖 How It Works
            </button>
          </div>
        </motion.div>
      </section>

      {/* Age Tracks Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-3 rounded-lg border-2 border-black bg-[#06D6A0] text-white font-bold shadow-brutal-sm">
              🎯 Choose Your Track
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Pick Your <span style={{ color: '#7209B7' }}>Character</span>
            </h2>
          </motion.div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <TrackCard
                title="The Explorers"
                subtitle="Bouncy & Simple"
                ageRange="6-10"
                description="Start your money adventure! Learn wants vs. needs and make your piggy bank happy."
                icon={<Coins size={16} />}
                colorTheme={{ primary: '#FF9F1C', secondary: '#FFBF69' }}
                model="piggy"
                onClick={() => openLesson('explorers')}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <TrackCard
                title="The Creators"
                subtitle="Tech & Gamer Vibes"
                ageRange="11-15"
                description="Level up your hustle! Set savings goals and unlock your first side quest."
                icon={<Gamepad2 size={16} />}
                colorTheme={{ primary: '#7209B7', secondary: '#4CC9F0' }}
                model="controller"
                onClick={() => openLesson('creators')}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <TrackCard
                title="The Investors"
                subtitle="Growth & Future"
                ageRange="15-18"
                description="Master the money game! Discover compound interest and build real wealth."
                icon={<TrendingUp size={16} />}
                colorTheme={{ primary: '#06D6A0', secondary: '#118AB2' }}
                model="staircase"
                onClick={() => openLesson('investors')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: '🎮', title: 'Game-Based', color: '#FF9F1C' },
              { emoji: '🏆', title: 'Win Badges', color: '#7209B7' },
              { emoji: '👨‍👩‍👧', title: 'Family Safe', color: '#06D6A0' },
              { emoji: '📱', title: 'Play Anywhere', color: '#4CC9F0' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-brutal p-4 text-center"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 border-black flex items-center justify-center text-xl mx-auto mb-2 shadow-brutal-sm"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.emoji}
                </div>
                <h3 className="font-bold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-black mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Coins size={20} className="text-[#FF9F1C]" />
            <span className="font-bold">MoneyQuest</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 MoneyQuest. Made with 💜 for kids everywhere.
          </div>
        </div>
      </footer>

      {/* Mini-Exercise Modal */}
      <LessonModal
        isOpen={activeLesson !== null}
        onClose={() => setActiveLesson(null)}
        activeLesson={activeLesson}
      />
    </main>
  );
}
