'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Outlines } from '@react-three/drei';
import * as THREE from 'three';

function Coin({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
    const ref = useRef<THREE.Group>(null);
    const [dropping, setDropping] = useState(false);
    const startY = useRef(position[1]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.02;

            if (dropping) {
                ref.current.position.y -= 0.08;
                if (ref.current.position.y < -1) {
                    ref.current.position.y = startY.current;
                    setDropping(false);
                }
            }
        }
    });

    return (
        <group ref={ref} position={position}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.08, 32]} />
                <meshStandardMaterial color="#FFD700" metalness={0.3} roughness={0.4} />
                <Outlines thickness={0.03} color="black" />
            </mesh>
        </group>
    );
}

function PiggyBody({ isHovered }: { isHovered: boolean }) {
    const bodyRef = useRef<THREE.Group>(null);
    const bouncePhase = useRef(0);

    useFrame(() => {
        if (bodyRef.current && isHovered) {
            bouncePhase.current += 0.15;
            bodyRef.current.position.y = Math.abs(Math.sin(bouncePhase.current)) * 0.3;
            bodyRef.current.rotation.z = Math.sin(bouncePhase.current * 0.5) * 0.1;
        } else if (bodyRef.current) {
            bodyRef.current.position.y *= 0.9;
            bodyRef.current.rotation.z *= 0.9;
        }
    });

    return (
        <group ref={bodyRef}>
            {/* Main body (ellipsoid) */}
            <mesh scale={[1.2, 0.9, 0.9]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#FF9F1C" roughness={0.5} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Snout */}
            <mesh position={[1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.35, 0.4, 0.3, 32]} />
                <meshStandardMaterial color="#FFB84D" roughness={0.5} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Nostrils */}
            <mesh position={[1.25, 0.08, 0.1]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            <mesh position={[1.25, 0.08, -0.1]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Left Ear */}
            <mesh position={[0.3, 0.85, 0.4]} rotation={[0.3, 0, 0.3]}>
                <coneGeometry args={[0.25, 0.5, 4]} />
                <meshStandardMaterial color="#FF9F1C" roughness={0.5} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Right Ear */}
            <mesh position={[0.3, 0.85, -0.4]} rotation={[-0.3, 0, 0.3]}>
                <coneGeometry args={[0.25, 0.5, 4]} />
                <meshStandardMaterial color="#FF9F1C" roughness={0.5} />
                <Outlines thickness={0.05} color="black" />
            </mesh>

            {/* Eyes */}
            <mesh position={[0.8, 0.35, 0.35]}>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[0.85, 0.38, 0.38]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            <mesh position={[0.8, 0.35, -0.35]}>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[0.85, 0.38, -0.38]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Coin Slot */}
            <mesh position={[0, 0.9, 0]} rotation={[0, 0, 0]}>
                <boxGeometry args={[0.4, 0.05, 0.08]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Legs */}
            {[
                [0.5, -0.7, 0.5],
                [0.5, -0.7, -0.5],
                [-0.5, -0.7, 0.5],
                [-0.5, -0.7, -0.5],
            ].map((pos, i) => (
                <mesh key={i} position={pos as [number, number, number]}>
                    <cylinderGeometry args={[0.15, 0.18, 0.4, 16]} />
                    <meshStandardMaterial color="#FF9F1C" roughness={0.5} />
                    <Outlines thickness={0.05} color="black" />
                </mesh>
            ))}

            {/* Curly Tail */}
            <mesh position={[-1.1, 0.2, 0]} rotation={[0, 0, 0.5]}>
                <torusGeometry args={[0.15, 0.05, 8, 16, Math.PI * 1.5]} />
                <meshStandardMaterial color="#FF9F1C" roughness={0.5} />
                <Outlines thickness={0.03} color="black" />
            </mesh>
        </group>
    );
}

export default function PiggyBankScene() {
    const [isHovered, setIsHovered] = useState(false);
    const coinRef = useRef<THREE.Group>(null);
    const [coinVisible, setCoinVisible] = useState(false);
    const coinY = useRef(3);

    useFrame(() => {
        if (isHovered && coinVisible && coinRef.current) {
            coinY.current -= 0.12;
            coinRef.current.position.y = coinY.current;
            coinRef.current.rotation.y += 0.1;

            if (coinY.current < 0.9) {
                setCoinVisible(false);
                coinY.current = 3;
            }
        }
    });

    const handlePointerEnter = () => {
        setIsHovered(true);
        setCoinVisible(true);
        coinY.current = 3;
    };

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
            <group
                onPointerEnter={handlePointerEnter}
                onPointerLeave={() => setIsHovered(false)}
                rotation={[0, -0.5, 0]}
            >
                <PiggyBody isHovered={isHovered} />

                {/* Dropping Coin */}
                {coinVisible && (
                    <group ref={coinRef} position={[0, 3, 0]}>
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
                            <meshStandardMaterial color="#FFD700" metalness={0.4} roughness={0.3} />
                            <Outlines thickness={0.02} color="black" />
                        </mesh>
                    </group>
                )}
            </group>
        </Float>
    );
}
