'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Outlines } from '@react-three/drei';
import * as THREE from 'three';

function SneakerBody({ isHovered }: { isHovered: boolean }) {
    const ref = useRef<THREE.Group>(null);
    const colorPhase = useRef(0);
    const [currentColor, setCurrentColor] = useState('#7209B7');

    const colors = ['ease#7209B7', '#4CC9F0', '#F72585', '#FFD166', '#2EC4B6'];

    useFrame(() => {
        if (ref.current) {
            if (isHovered) {
                ref.current.rotation.y += 0.08;
                colorPhase.current += 0.05;
                const colorIndex = Math.floor(colorPhase.current) % colors.length;
                setCurrentColor(colors[colorIndex]);
            } else {
                ref.current.rotation.y += 0.01;
            }
        }
    });

    return (
        <group ref={ref} rotation={[0.1, 0, 0.05]} scale={0.6}>
            {/* Sole - bottom platform */}
            <mesh position={[0, -0.4, 0]}>
                <boxGeometry args={[3, 0.3, 1.2]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Midsole - chunky platform */}
            <mesh position={[0, -0.15, 0]}>
                <boxGeometry args={[2.8, 0.2, 1.1]} />
                <meshStandardMaterial color="white" roughness={0.5} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Main body - toe box */}
            <mesh position={[0.8, 0.2, 0]}>
                <boxGeometry args={[1.4, 0.6, 1]} />
                <meshStandardMaterial color={currentColor} roughness={0.4} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Toe cap - rounded front */}
            <mesh position={[1.4, 0.1, 0]} rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.6, 0.6, 0.95]} />
                <meshStandardMaterial color="white" roughness={0.5} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Heel counter */}
            <mesh position={[-0.9, 0.35, 0]}>
                <boxGeometry args={[0.8, 0.9, 1]} />
                <meshStandardMaterial color={currentColor} roughness={0.4} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Collar/Ankle padding */}
            <mesh position={[-0.6, 0.75, 0]}>
                <boxGeometry args={[1.2, 0.3, 0.9]} />
                <meshStandardMaterial color="#4CC9F0" roughness={0.4} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Tongue */}
            <mesh position={[0.1, 0.7, 0]} rotation={[0, 0, 0.3]}>
                <boxGeometry args={[1, 0.6, 0.7]} />
                <meshStandardMaterial color="#4CC9F0" roughness={0.4} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Laces - represented as small boxes */}
            {[0.3, 0, -0.3].map((x, i) => (
                <mesh key={i} position={[x, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[0.15, 0.8, 0.05]} />
                    <meshStandardMaterial color="white" roughness={0.5} />
                    <Outlines thickness={0.02} color="black" />
                </mesh>
            ))}

            {/* Side swoosh/stripe */}
            <mesh position={[0.2, 0.15, 0.52]} rotation={[0, 0, -0.2]}>
                <boxGeometry args={[1.8, 0.15, 0.05]} />
                <meshStandardMaterial color="#FFD166" roughness={0.4} />
                <Outlines thickness={0.02} color="black" />
            </mesh>
            <mesh position={[0.2, 0.15, -0.52]} rotation={[0, 0, -0.2]}>
                <boxGeometry args={[1.8, 0.15, 0.05]} />
                <meshStandardMaterial color="#FFD166" roughness={0.4} />
                <Outlines thickness={0.02} color="black" />
            </mesh>
        </group>
    );
}

export default function SneakerScene() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
            <group
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
            >
                <SneakerBody isHovered={isHovered} />
            </group>
        </Float>
    );
}
