'use client';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Maximize, ZoomIn, ZoomOut, MousePointer2, Move } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function OrthoViewer({ url, alt = "Orthomosaic Map" }: { url: string; alt?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(console.error);
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full bg-slate-950 shadow-[0_0_40px_rgba(0,0,0,0.4)] border border-slate-800 transition-all duration-300 flex flex-col items-center justify-center ${isFullscreen ? 'h-screen rounded-none' : 'h-[500px] md:h-[600px] rounded-2xl overflow-hidden'
                }`}
        >
            {/* Navigation Instruction Overlay */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg p-3 shadow-lg pointer-events-none">
                    <div className="flex flex-col gap-2 text-[10px] md:text-xs font-semibold text-slate-300 uppercase tracking-widest">
                        <div className="flex items-center gap-2"><MousePointer2 className="w-3.5 h-3.5 text-purple-400" /> Scroll <span className="text-slate-500 opacity-60">|</span> Zoom</div>
                        <div className="flex items-center gap-2"><Move className="w-3.5 h-3.5 text-purple-400" /> Drag <span className="text-slate-500 opacity-60">|</span> Pan</div>
                        <div className="flex items-center gap-2"><ZoomIn className="w-3.5 h-3.5 text-purple-400" /> Pinch <span className="text-slate-500 opacity-60">|</span> Mobile Zoom</div>
                    </div>
                </div>
            </div>

            <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-30 bg-slate-900/80 hover:bg-purple-600 backdrop-blur-md border border-slate-700 hover:border-purple-500 rounded-lg p-2.5 text-slate-200 transition-all shadow-lg"
                title="Toggle Fullscreen"
            >
                <Maximize className="w-5 h-5" />
            </button>

            <TransformWrapper
                initialScale={1}
                minScale={0.1}
                maxScale={10}
                centerOnInit
                wheel={{ step: 0.1 }}
            >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                            <button onClick={() => zoomIn()} className="bg-slate-900/80 hover:bg-purple-600 backdrop-blur-md border border-slate-700 p-2.5 rounded-lg text-white shadow-lg transition-colors"><ZoomIn className="w-5 h-5" /></button>
                            <button onClick={() => zoomOut()} className="bg-slate-900/80 hover:bg-purple-600 backdrop-blur-md border border-slate-700 p-2.5 rounded-lg text-white shadow-lg transition-colors"><ZoomOut className="w-5 h-5" /></button>
                            <button onClick={() => resetTransform()} className="bg-slate-900/80 hover:bg-purple-600 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase text-white shadow-lg transition-colors">Reset</button>
                        </div>

                        <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={url} alt={alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} draggable={false} />
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
}
