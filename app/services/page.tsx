import { Layers, Crosshair, Map as MapIcon, Database, Video } from 'lucide-react';
import Link from 'next/link';
import TrustCredentialStrip from '../components/TrustCredentialStrip';

export default function GeospatialServicesPage() {
  const services = [
    {
      id: 'topography',
      title: 'High-Resolution Topographic Mapping',
      description: 'Centimeter-grade Digital Terrain Models (DTM) and Digital Surface Models (DSM) essential for initial site planning, grading, and hydrology analysis.',
      icon: MapIcon,
      img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80',
      features: ['1-3cm absolute accuracy', 'Vegetation penetration (via LiDAR, available upon request)', 'Contour generation at 1ft intervals'],
    },
    {
      id: 'volumetrics',
      title: 'Volumetric Analysis & Cut/Fill',
      description: 'Precise quantitative measurements for earthwork operations. Calculate stockpile volumes, track borrow pit depletion, and verify subcontractor grading.',
      icon: Database,
      img: 'https://images.unsplash.com/photo-1541888087405-ebcf7c186064?auto=format&fit=crop&q=80',
      features: ['Automated stockpile inventory', 'Design vs. As-Built comparisons', 'Multi-temporal progress tracking'],
    },
    {
      id: 'orthomosaics',
      title: 'Orthomosaic Mapping',
      description: 'Distortion-free, high-resolution aerial imagery mapped directly to your project coordinate system for verifiable, up-to-date visual records.',
      icon: Layers,
      img: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80',
      features: ['GSD down to 1cm/pixel', 'Seamless integration into GIS software', 'Time-stamped visual historical record'],
    },
    {
      id: 'inspections',
      title: 'Infrastructure & Asset Inspection',
      description: 'High-definition visual and thermal inspections for cell towers, commercial roofing, utility corridors, and structural analysis without deploying personnel.',
      icon: Video,
      img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
      features: ['4K Video mapping', 'Thermal anomaly detection', 'Defect identification reporting'],
    },
    {
      id: 'site-planning',
      title: 'Pre-Construction Site Analysis',
      description: 'Comprehensive data packages for developers investigating potential land acquisitions. Identify environmental constraints and topographic challenges.',
      icon: Crosshair,
      img: 'https://images.unsplash.com/photo-1596484552834-6a58f840fd93?auto=format&fit=crop&q=80',
      features: ['Boundary overlay verification', 'Existing conditions documentation', 'Early-stage feasibility support'],
    }
  ];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Geospatial Services</h1>
          <p className="text-lg text-slate-400">
            High-precision aerial mapping and geospatial analytics for land development, construction, and engineering projects.
          </p>
        </div>
      </section>

      {/* GLOBAL TRUST CREDENTIALS */}
      <TrustCredentialStrip />

      {/* Services List */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className="group overflow-hidden flex flex-col md:flex-row gap-8 items-stretch pb-16 border-b border-slate-800/50 last:border-0 last:pb-0">
              
              {/* Visual Thumbnail (Left side on Desktop) */}
              <div className="w-full md:w-5/12 shrink-0 relative rounded-2xl overflow-hidden min-h-[250px] shadow-lg border border-slate-800">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.img})` }}
                />
                <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply group-hover:bg-slate-950/20 transition-colors" />
                <div className="absolute top-4 left-4 p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-lg">
                  <service.icon className="w-6 h-6 text-purple-400" />
                </div>
              </div>

              {/* Content (Right Side) */}
              <div className="flex-grow flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>
                
                <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-slate-700"></span>
                    Key Capabilities
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pt-16 border-t border-slate-800 mt-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Require a Specialized Output?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          We configure flights to match specific engineering and CAD requirements. Contact our team to define your data parameters.
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20">
          Discuss Project Parameters
        </Link>
      </section>
    </main>
  );
}
