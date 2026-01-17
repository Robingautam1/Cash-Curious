'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Outlines } from '@react-three/drei';
import * as THREE from 'three';

function Stair({
    position,
    width,
    height,
    depth,
    color,
    targetHeight,
    delay
}: {
    position: [number, number, number];
    width: number;
    height: number;
    depth: number;
    color: string;
    targetHeight: number;
    delay: number;
}) {
    const ref = useRef<THREE.Mesh>(null);
    const currentHeight = useRef(height);

    useFrame(() => {
        if (ref.current) {
            currentHeight.current += (targetHeight - currentHeight.current) * 0.08;
            ref.current.scale.y = currentHeight.current / height;
            ref.current.position.y = position[1] + (currentHeight.current - height) / 2;
        }
    });

    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[width, height, depth]} />
            <meshStandardMaterial color={color} roughness={0.4} />
            <Outlines thickness={0.05} color="black" />
        </mesh>
    );
}

function GrowingStaircase({ isHovered }: { isHovered: boolean }) {
    const groupRef = useRef<THREE.Group>(null);

    const baseHeights = [0.4, 0.7, 1.0, 1.4, 1.9];
    const hoverMultiplier = isHovered ? 1.5 : 1;

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    const colors = ['#F72585', '#FF6B9D', '#FFD166', '#FFDF8C', '#FFE9B3'];

    return (
        <group ref={groupRef} rotation={[0, -0.8, 0]}>
            {baseHeights.map((baseHeight, i) => (
                <Stair
                    key={i}
                    position={[-1.2 + i * 0.6, baseHeight / 2, 0]}
                    width={0.5}
                    height={baseHeight}
                    depth={1.2}
                    color={colors[i]}
                    targetHeight={baseHeight * hoverMultiplier}
                    delay={i * 0.1}
                />
            ))}

            {/* Rising arrow indicator */}
            <group position={[1.4, isHovered ? 2.5 : 1.5, 0]}>
                <mesh rotation={[0, 0, Math.PI]}>
                    <coneGeometry args={[0.2, 0.4, 4]} />
                    <meshStandardMaterial color="#2EC4B6" roughness={0.4} />
                    <Outlines thickness={0.03} color="black" />
                </mesh>
                <mesh position={[0, 0.4, 0]}>
                    <boxGeometry args={[0.1, 0.5, 0.1]} />
                    <meshStandardMaterial color="#2EC4B6" roughness={0.4} />
                    <Outlines thickness={0.03} color="black" />
                </mesh>
            </group>

            {/* Coin stack at top */}
            <group position={[1.2, isHovered ? 3.2 : 2.2, 0]}>
                {[0, 0.12, 0.24].map((y, i) => (
                    <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.08, 32]} />
                        <meshStandardMaterial color="#FFD700" metalness={0.3} roughness={0.4} />
                        <Outlines thickness={0.02} color="black" />
                    </mesh>
                ))}
            </group>

            {/* Base platform */}
            <mesh position={[0, -0.15, 0]}>
                <boxGeometry args={[3.5, 0.2, 1.6]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
                <Outlines thickness={0.05} color="black" />
            </mesh>
        </group>
    );
}

export default function StaircaseScene() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.2}>
            <group
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
            >
                <GrowingStaircase isHovered={isHovered} />
            </group>
        </Float>
    );
}
