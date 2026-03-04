import { Cpu, Satellite, Target, Map, Layers, Database, Image as ImageIcon, Crosshair, ArrowRight, CheckCircle2, Navigation, FileJson, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function GeospatialTechnologyPage() {
  const pipelineSteps = [
    { label: 'Aerial Image Capture', icon: Satellite },
    { label: 'RTK Position Correction', icon: Target },
    { label: 'Photogrammetry Reconstruction', icon: ImageIcon },
    { label: 'Dense Point Cloud Generation', icon: Database },
    { label: 'Terrain Model Creation', icon: Map },
    { label: 'CAD / GIS Deliverables', icon: FileJson },
  ];

  const deliverables = [
    {
      title: 'Orthomosaic Imagery',
      desc: 'High-resolution georeferenced aerial maps used for site planning and inspection.',
      img: 'https://images.unsplash.com/photo-1541888087405-ebcf7c186064?auto=format&fit=crop&q=80',
    },
    {
      title: 'Terrain Models',
      desc: 'Digital Surface and Terrain Models used for grading analysis and drainage planning.',
      img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80',
    },
    {
      title: 'Point Clouds & Volumes',
      desc: 'Dense 3D datasets used for stockpile measurements and construction progress tracking.',
      img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <main className="pb-24">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden py-32 md:py-40 border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">Hardware & Analytics</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Enterprise-grade aerial data acquisition and photogrammetry processing calibrated for centimeter-level terrain intelligence.
          </p>
        </div>
      </section>

      {/* SECTION 2 — FIELD DATA ACQUISITION */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Field Data Acquisition</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Precision begins in the field. Our capture methodologies ensure structural integrity before data ever reaches the processing pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group">
            <div className="h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/40" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Aerial Image Capture</h3>
              <p className="text-slate-400 leading-relaxed">
                High-resolution aerial imagery captured through structured photogrammetry flight missions. Image overlap and flight grid planning ensure accurate terrain reconstruction.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group">
            <div className="h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/40" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">RTK Ground Control</h3>
              <p className="text-slate-400 leading-relaxed">
                Centimeter-level ground control established using multi-band GNSS receivers and NTRIP correction networks to ensure survey-grade positioning accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — GEOSPATIAL PROCESSING PIPELINE */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Geospatial Processing Pipeline</h2>
            <p className="text-slate-400">How raw field imagery is reconstructed into engineering-grade spatial data.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10" />
             
             {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 w-full relative z-10 group">
                  <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 transition-colors group-hover:border-purple-500 shadow-xl shadow-slate-950/50">
                    <step.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white text-center px-2">{step.label}</h4>
                  
                  {idx < pipelineSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-slate-600 lg:hidden my-4" />
                  )}
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESSING ENGINE */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Cpu className="w-12 h-12 text-purple-500 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Processing Engines</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Aerial imagery is processed using advanced photogrammetry engines to reconstruct exact terrain geometries. Millions of matched reference points are calculated to produce:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Orthomosaic Maps', 'Digital Surface Models (DSM)', 'Digital Terrain Models (DTM)', 'Dense Point Clouds', 'Volumetric Calculations'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                  <Crosshair className="w-4 h-4 text-purple-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            <div className="col-span-2 h-48 rounded-xl bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center border border-slate-800 shadow-lg relative group overflow-hidden">
               <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
               <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-bold text-white">Terrain Elevation Heatmap</div>
            </div>
            <div className="h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1541888087405-ebcf7c186064?auto=format&fit=crop&q=80')] bg-cover bg-center border border-slate-800 shadow-lg relative group overflow-hidden">
               <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
               <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-bold text-white">Orthomosaic Map</div>
            </div>
            <div className="h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80')] bg-cover bg-center border border-slate-800 shadow-lg relative group overflow-hidden">
               <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
               <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-bold text-white">3D Point Cloud</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DATA DELIVERABLES */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Engineering-Ready Deliverables</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our data pipeline outputs universally compatible file formats structured for seamless integration into modern CAD and GIS ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((del, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group">
                <div className="h-48 relative overflow-hidden bg-slate-800">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url(${del.img})` }} 
                  />
                  <div className="absolute inset-0 bg-slate-900/30" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3">{del.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {del.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — OPERATIONAL STANDARDS */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <ShieldCheck className="w-12 h-12 text-slate-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-6">Operational Standards</h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          All flight operations and data processing workflows follow industry-standard geospatial data practices.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'FAA Part 107 Certified', icon: CheckCircle2 },
            { label: 'RTK GNSS Ground Control', icon: Navigation },
            { label: 'NTRIP Correction Network', icon: Satellite },
            { label: 'CAD / GIS Compatible', icon: FileJson },
          ].map((badge, idx) => (
             <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-purple-500/50 transition-colors">
               <badge.icon className="w-8 h-8 text-purple-400" />
               <span className="font-bold text-white text-sm">{badge.label}</span>
             </div>
          ))}
        </div>
      </section>

    </main>
  );
}
