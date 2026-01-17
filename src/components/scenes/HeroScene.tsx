'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Outlines } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCoin({ position, rotationSpeed = 0.02 }: { position: [number, number, number]; rotationSpeed?: number }) {
    const ref = useRef<THREE.Group>(null);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += rotationSpeed;
            ref.current.rotation.x += rotationSpeed * 0.3;
        }
    });

    return (
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.8}>
            <group ref={ref} position={position}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
                    <meshStandardMaterial color="#FFD700" metalness={0.4} roughness={0.3} />
                    <Outlines thickness={0.04} color="black" />
                </mesh>
                {/* Dollar sign on coin */}
                <mesh position={[0, 0.06, 0]}>
                    <boxGeometry args={[0.08, 0.01, 0.4]} />
                    <meshStandardMaterial color="#B8860B" roughness={0.5} />
                </mesh>
                <mesh position={[0.08, 0.06, 0]}>
                    <boxGeometry args={[0.15, 0.01, 0.08]} />
                    <meshStandardMaterial color="#B8860B" roughness={0.5} />
                </mesh>
                <mesh position={[-0.08, 0.06, 0]}>
                    <boxGeometry args={[0.15, 0.01, 0.08]} />
                    <meshStandardMaterial color="#B8860B" roughness={0.5} />
                </mesh>
            </group>
        </Float>
    );
}

function FloatingCard({ position }: { position: [number, number, number] }) {
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
            ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
            <group ref={ref} position={position}>
                {/* Card body */}
                <mesh>
                    <boxGeometry args={[1.4, 0.08, 0.9]} />
                    <meshStandardMaterial color="#7209B7" roughness={0.4} />
                    <Outlines thickness={0.04} color="black" />
                </mesh>
                {/* Chip */}
                <mesh position={[-0.35, 0.05, 0.15]}>
                    <boxGeometry args={[0.25, 0.02, 0.2]} />
                    <meshStandardMaterial color="#FFD166" metalness={0.5} roughness={0.3} />
                    <Outlines thickness={0.02} color="black" />
                </mesh>
                {/* Stripe */}
                <mesh position={[0.3, 0.05, -0.2]}>
                    <boxGeometry args={[0.6, 0.02, 0.12]} />
                    <meshStandardMaterial color="#4CC9F0" roughness={0.4} />
                </mesh>
            </group>
        </Float>
    );
}

function FloatingChart({ position }: { position: [number, number, number] }) {
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2 - 0.3;
        }
    });

    const bars = [
        { height: 0.4, color: '#FF9F1C' },
        { height: 0.6, color: '#2EC4B6' },
        { height: 0.5, color: '#F72585' },
        { height: 0.9, color: '#7209B7' },
        { height: 1.2, color: '#4CC9F0' },
    ];

    return (
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={ref} position={position}>
                {/* Base */}
                <mesh position={[0, -0.1, 0]}>
                    <boxGeometry args={[1.6, 0.08, 0.8]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
                    <Outlines thickness={0.03} color="black" />
                </mesh>

                {/* Bars */}
                {bars.map((bar, i) => (
                    <mesh key={i} position={[-0.55 + i * 0.3, bar.height / 2, 0]}>
                        <boxGeometry args={[0.2, bar.height, 0.4]} />
                        <meshStandardMaterial color={bar.color} roughness={0.4} />
                        <Outlines thickness={0.03} color="black" />
                    </mesh>
                ))}

                {/* Trend line arrow */}
                <group position={[0.7, 1.1, 0.3]} rotation={[0, 0, -0.5]}>
                    <mesh>
                        <coneGeometry args={[0.1, 0.2, 4]} />
                        <meshStandardMaterial color="#2EC4B6" roughness={0.4} />
                        <Outlines thickness={0.02} color="black" />
                    </mesh>
                </group>
            </group>
        </Float>
    );
}

function FloatingStar({ position, color }: { position: [number, number, number]; color: string }) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.z += 0.03;
            ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.5;
        }
    });

    return (
        <Float speed={4} rotationIntensity={0.8} floatIntensity={1}>
            <mesh ref={ref} position={position}>
                <octahedronGeometry args={[0.25]} />
                <meshStandardMaterial color={color} roughness={0.3} />
                <Outlines thickness={0.03} color="black" />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <group>
            {/* Central coin cluster */}
            <FloatingCoin position={[0, 0.5, 0]} rotationSpeed={0.025} />
            <FloatingCoin position={[-1.5, -0.3, 0.5]} rotationSpeed={0.018} />
            <FloatingCoin position={[1.8, 0.8, -0.3]} rotationSpeed={0.022} />

            {/* Credit card */}
            <FloatingCard position={[-1.2, 1.2, -0.8]} />

            {/* Chart */}
            <FloatingChart position={[1.5, -0.5, 0.8]} />

            {/* Decorative stars */}
            <FloatingStar position={[2.5, 1.5, 0]} color="#F72585" />
            <FloatingStar position={[-2.2, 0.3, 1]} color="#FFD166" />
            <FloatingStar position={[0.5, -1.2, 1.5]} color="#4CC9F0" />
            <FloatingStar position={[-1, 1.8, -1]} color="#2EC4B6" />
        </group>
    );
}
