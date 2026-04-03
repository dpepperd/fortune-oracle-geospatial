import Link from 'next/link';
import { Crosshair, Map, BarChart3, ChevronRight, Layers, ShieldCheck, Plane, Database, MapPin } from 'lucide-react';
import TrustCredentialStrip from './components/TrustCredentialStrip';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geospatial Data & Drone Mapping | Florida',
  description: 'Fortune Oracle Geospatial provides high-accuracy RTK drone mapping, 3D photogrammetry, and terrain intelligence for developers and commercial builders.'
};

export default function GeospatialHomePage() {
  const coreFeatures = [
    {
      title: 'Topographic Mapping',
      description: 'Centimeter-grade DSMs and DTMs for precise site planning and engineering.',
      icon: Map,
      bgImage: '/residential_progress.jpeg',
    },
    {
      title: 'Volumetric Analysis',
      description: 'Accurate cut-and-fill calculations and stockpile measurements for progress monitoring.',
      icon: BarChart3,
      bgImage: '/aggregate_piles.jpeg',
    },
    {
      title: 'High-Resolution Orthomosaics',
      description: 'Georeferenced aerial imagery providing absolute ground truth for large developments.',
      icon: Layers,
      bgImage: '/closing_shot.jpeg',
    },
  ];

  const workflowSteps = [
    { icon: Plane, label: 'Drone Capture', desc: 'Pre-programmed flight paths over target site', img: '/drone_operator.jpeg' },
    { icon: Map, label: 'Orthomosaic Map', desc: 'Stitching high-res 2D visual maps', img: '/orthomosaic_map.jpeg' },
    { icon: Layers, label: 'Elevation Model', desc: 'Generating 3D surface and terrain meshes', img: '/elevation_heat_map.jpeg' },
    { icon: Database, label: 'Volume Analysis', desc: 'Exporting CAD-ready analytical data', img: '/aggregate_piles.jpeg' },
  ];

  const results = [
    {
      title: "Orthomosaic Map",
      desc: "High-resolution, distortion-free 2D maps. Used by developers for situational awareness, site boundaries, and progress tracking.",
      img: "/orthomosaic_map.jpeg"
    },
    {
      title: "Digital Surface Model (DSM)",
      desc: "3D representation mapping both the terrain and all surface objects. Crucial for line-of-sight and hydrology planning.",
      img: "/digital_surface_model.jpeg"
    },
    {
      title: "Contour Overlay",
      desc: "1ft and 2ft topographic lines mapped directly over orthomosaics. Exported to DWG for immediate use by civil engineers.",
      img: "/contour_map.jpeg"
    }
  ];

  const stats = [
    { value: '1-2 cm', label: 'Relative Accuracy' },
    { value: '2–3 cm GSD', label: 'Resolution Deliverables' },
    { value: 'CAD / GIS Ready', label: 'Engineering-compatible datasets' },
    { value: 'RTK/PPK', label: 'Positioning Technology' },
  ];

  return (
    <main className="pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* Local Placeholder Video */}
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60 z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-xs font-semibold mb-6 uppercase tracking-wider shadow-xl">
              <Crosshair className="w-3 h-3 text-purple-400" />
              <span>Precision Terrain Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight drop-shadow-md">
              RTK-Verified Aerial Mapping for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Commercial Site Development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl drop-shadow">
              RTK-backed aerial mapping, terrain modeling, and volumetric reporting for commercial builders, developers, and engineering teams across Northeast Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20">
                Request Site Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/technology" className="px-8 py-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white font-semibold rounded-md hover:border-slate-500 hover:bg-slate-800 transition-colors text-center">
                View Tech Specs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL TRUST CREDENTIALS */}
      <TrustCredentialStrip />

      {/* Credibility Bridge */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Built for Commercial Scale</h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-6">
          Fortune Oracle Geospatial delivers structured aerial data collection and RTK-verified ground control workflows designed for commercial site preparation, infrastructure planning, and industrial inventory management.
        </p>
        <p className="text-lg text-slate-400 leading-relaxed">
          We provide GIS-ready datasets compatible with CAD, civil engineering, and project management systems.
        </p>
      </section>

      {/* 2. DATA WORKFLOW SECTION */}
      <section className="py-16 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Pipeline Architecture</h2>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-semibold">From Capture to Deliverable</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-purple-500/50 to-slate-800 -z-10" />

            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-full md:w-1/4 bg-slate-950 md:bg-transparent p-6 md:p-0 rounded-2xl border border-slate-800 md:border-none">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-xl shadow-slate-950">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed px-4">{step.desc}</p>

                {/* Visual Placeholder Graphic mapping */}
                <div className="mt-6 w-full h-24 bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden relative">
                  <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${step.img})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-slate-950 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left border-l-2 border-purple-500/30 pl-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES VISUAL CARDS */}
      <section className="py-24 max-w-6xl mx-auto px-6 border-t border-slate-800">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-slate-400 max-w-2xl">
            Engineered deliverables for commercial and industrial scale projects. We provide the structural data required for CAD, GIS, and civil engineering workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coreFeatures.map((feature, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden group min-h-[400px] flex flex-col justify-end">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/30 group-hover:from-slate-950 group-hover:via-slate-900/90 transition-all duration-300" />

              <div className="relative z-10 p-8">
                <feature.icon className="w-10 h-10 text-purple-400 mb-6 drop-shadow-md" />
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISUAL RESULTS SECTION */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Terrain Intelligence Outputs</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Visualizing the difference between simple drone photography and engineering-grade structural deliverables.
            </p>
          </div>

          <div className="space-y-12">
            {results.map((res, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                <div className="w-full md:w-1/2">
                  <div className="aspect-[16/9] md:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${res.img})` }}
                    />
                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-white mb-4">{res.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-purple-500 pl-6">
                    {res.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE AREA MAP */}
      <section className="py-24 border-b border-slate-800 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-luminosity" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <MapPin className="text-purple-500 w-8 h-8" />
              Serving Northeast Florida
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Based in Jacksonville, supporting development projects across Northeast Florida and Southeast Georgia.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-slate-400 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Jacksonville</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> St. Augustine</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Orange Park</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Gainesville</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Brunswick GA</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl">
            <ShieldCheck className="w-12 h-12 text-slate-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Data You Can Build On
            </h3>
            <p className="text-slate-400 leading-relaxed mb-10">
              Our deliverables integrate directly into AutoCAD, Civil 3D, and ArcGIS. Stop relying on outdated satellite imagery or inaccurate interpolation.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-md hover:bg-slate-200 transition-colors w-full md:w-auto">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
