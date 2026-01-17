'use client';

import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { ReactNode } from 'react';

interface AgeCardProps {
    title: string;
    ageRange: string;
    lesson: string;
    lessonDescription: string;
    colorPrimary: string;
    colorSecondary: string;
    children: ReactNode;
}

export default function AgeCard({
    title,
    ageRange,
    lesson,
    lessonDescription,
    colorPrimary,
    colorSecondary,
    children,
}: AgeCardProps) {
    return (
        <div className="card-base flex flex-col h-full overflow-hidden bg-white">
            {/* 3D Canvas Area */}
            <div
                className="canvas-wrapper h-64 w-full relative"
                style={{
                    background: `linear-gradient(135deg, ${colorPrimary}20, ${colorSecondary}20)`
                }}
            >
                <Canvas>
                    <OrthographicCamera
                        makeDefault
                        position={[5, 5, 5]}
                        zoom={50}
                        near={0.1}
                        far={1000}
                    />
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <directionalLight position={[-5, 5, -5]} intensity={0.4} />
                    {children}
                </Canvas>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-1">
                {/* Age Badge */}
                <div
                    className="inline-flex items-center px-3 py-1 rounded-full border-2 border-black text-sm font-semibold mb-3 w-fit"
                    style={{ backgroundColor: colorPrimary, color: 'white' }}
                >
                    Ages {ageRange}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-black">{title}</h3>

                {/* Lesson Tag */}
                <div
                    className="inline-flex items-center px-3 py-1 rounded-lg border-2 border-black text-sm font-medium mb-3 w-fit"
                    style={{ backgroundColor: colorSecondary, color: 'white' }}
                >
                    📚 {lesson}
                </div>

                {/* Description */}
                <p className="text-gray-700 flex-1 leading-relaxed">
                    {lessonDescription}
                </p>

                {/* CTA Button */}
                <button
                    className="btn-primary mt-4 w-full text-center font-bold"
                    style={{ backgroundColor: colorPrimary, color: 'white' }}
                >
                    Start Learning →
                </button>
            </div>
        </div>
    );
}
