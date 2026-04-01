'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Html, Stage } from '@react-three/drei';
import { Maximize, Minimize, MousePointer2, Move, ZoomIn, Info } from 'lucide-react';

export interface ProjectMetadata {
    title: string;
    location: string;
    date: string;
    drone: string;
    processing: string;
    altitude: string;
    gsd: string;
    accuracy: string;
    coordinateSystem: string;
}

function Loader() {
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/80 backdrop-blur-md text-white border border-slate-700 shadow-2xl">
                <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-sm font-semibold tracking-wider text-slate-200">LOADING 3D MODEL</p>
            </div>
        </Html>
    );
}

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

export default function ModelViewer({ url, metadata }: { url: string; metadata?: ProjectMetadata }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showMetadata, setShowMetadata] = useState(true);

    // Preload the model and listen perfectly for fullscreen changes
    useEffect(() => {
        useGLTF.preload(url);

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, [url]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {/* 3D Map Viewport */}
            <div
                ref={containerRef}
                className={`relative w-full bg-slate-950 shadow-[0_0_40px_rgba(0,0,0,0.4)] border border-slate-800 transition-all duration-300 ${isFullscreen ? 'h-screen rounded-none' : 'h-[500px] md:h-[600px] rounded-2xl overflow-hidden'
                    }`}
            >
                {/* Navigation Instruction Overlay */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg p-3 shadow-lg pointer-events-none">
                        <div className="flex flex-col gap-2 text-[10px] md:text-xs font-semibold text-slate-300 uppercase tracking-widest">
                            <div className="flex items-center gap-2"><MousePointer2 className="w-3.5 h-3.5 text-purple-400" /> Left Click <span className="text-slate-500 opacity-60">|</span> Rotate</div>
                            <div className="flex items-center gap-2"><Move className="w-3.5 h-3.5 text-purple-400" /> Right Click <span className="text-slate-500 opacity-60">|</span> Pan</div>
                            <div className="flex items-center gap-2"><ZoomIn className="w-3.5 h-3.5 text-purple-400" /> Scroll <span className="text-slate-500 opacity-60">|</span> Zoom</div>
                        </div>
                    </div>
                </div>

                {/* Fullscreen Toggle */}
                <button
                    onClick={toggleFullscreen}
                    className="absolute top-4 right-4 z-10 bg-slate-900/80 hover:bg-purple-600 backdrop-blur-md border border-slate-700 hover:border-purple-500 rounded-lg p-2.5 text-slate-200 transition-all shadow-lg"
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                    {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </button>

                {/* WebGL Canvas */}
                <Canvas shadows camera={{ position: [0, 5, 10], fov: 45 }}>
                    <Suspense fallback={<Loader />}>
                        <Stage environment="city" intensity={0.6} adjustCamera shadows="contact">
                            <Center>
                                <Model url={url} />
                            </Center>
                        </Stage>
                    </Suspense>
                    <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                        makeDefault
                    />
                </Canvas>
            </div>

            {/* Survey Metadata Legend (Outside the map) */}
            {metadata && !isFullscreen && (
                <div className="bg-slate-900/50 backdrop-blur-md text-slate-200 border border-slate-800 rounded-2xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{metadata.title}</h3>
                    <p className="text-sm font-medium text-purple-400 mb-6 pb-4 border-b border-slate-800/80">{metadata.location}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 text-sm font-medium text-slate-300">
                        <div><span className="text-slate-500 block text-[10px] uppercase tracking-widest mb-1.5">Date Captured</span>{metadata.date}</div>
                        <div><span className="text-slate-500 block text-[10px] uppercase tracking-widest mb-1.5">Drone System</span>{metadata.drone}</div>
                        <div><span className="text-slate-500 block text-[10px] uppercase tracking-widest mb-1.5">Altitude</span>{metadata.altitude}</div>
                        <div><span className="text-slate-500 block text-[10px] uppercase tracking-widest mb-1.5">GSD</span>{metadata.gsd}</div>
                        <div><span className="text-slate-500 block text-[10px] uppercase tracking-widest mb-1.5">Accuracy</span>{metadata.accuracy}</div>
                        <div><span className="text-slate-500 block text-[10px] uppercase tracking-widest mb-1.5">CRS</span>{metadata.coordinateSystem}</div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                        <div className="text-[10px] md:text-xs font-bold tracking-widest text-slate-500 uppercase">Fortune Oracle Geospatial</div>
                        <div className="text-[10px] font-mono bg-slate-800 px-3 py-1.5 rounded text-slate-400 border border-slate-700">{metadata.processing}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
