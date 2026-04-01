import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Fortune Oracle Geospatial privacy policy and data collection practices.'
};

export default function GeospatialPrivacyPage() {
  return (
    <main className="pb-24">
      <section className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Geospatial Privacy Policy</h1>
          <p className="text-slate-400">Last updated: March 3, 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="prose prose-invert prose-slate max-w-none space-y-8">

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-slate-400 leading-relaxed">
              Fortune Oracle Media LLC ("we," "our," or "us"), specifically through our Fortune Oracle Geospatial division, respects your privacy and is committed to protecting your corporate, geographical, and personal data. This Privacy Policy explains how we collect, use, process, and safeguard data acquired during geospatial engineering, drone mapping, and related survey operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Data Acquisition & Collection</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              During the course of our geospatial services, we collect specific technical and operational data:
            </p>
            <h3 className="text-xl font-medium text-white mb-2">Technical Acquisition Data</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-2 mb-4">
              <li>High-resolution aerial imagery (Orthomosaics, Photogrammetry)</li>
              <li>Spatial coordinates, GNSS logs, and RTK/PPK telemetry</li>
              <li>Digital Surface Models (DSM) and Digital Terrain Models (DTM)</li>
              <li>LiDAR point clouds and volumetric measurements</li>
            </ul>
            <h3 className="text-xl font-medium text-white mb-2">Client Intelligence Data</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>Corporate contact information, billing matrices, and project stakeholder details</li>
              <li>Site CAD files, engineering blueprints, and parcel boundaries provided for reference</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Data Processing & Utilization</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Acquired spatial and technical data is strictly utilized for the following operational parameters:
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>Generation of contracted engineering deliverables (Maps, Models, Reports)</li>
              <li>Quality Assurance and accuracy verification against Ground Control Points (GCPs)</li>
              <li>Flight path calculation and airspace authorization compliance (FAA)</li>
              <li>Internal machine learning calibration models (anonymized topography variants only)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Containment & Security</h2>
            <p className="text-slate-400 leading-relaxed">
              Geospatial deliverables often contain sensitive proprietary infrastructure data. We deploy enterprise-grade segregation:
              client point clouds, GNSS logs, and ortho-imagery are sequestered on secured cloud infrastructure utilizing AES-256 encryption. We enforce strict access controls restricted to credentialed data engineers and authorized photogrammetry processing nodes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Infrastructure</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              To execute complex spatial reconstructions, we utilize sub-processors:
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li><strong className="text-white">Photogrammetry Engines:</strong> Cloud-based processing nodes for assembling dense point clouds and 3D meshes.</li>
              <li><strong className="text-white">Telemetry & Airspace APIs:</strong> To file flight plans and log regulatory data with aviation authorities.</li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              We do not sell, trade, or otherwise distribute your site coordinates or proprietary topographic data to unauthorized commercial third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Retention Protocols</h2>
            <p className="text-slate-400 leading-relaxed">
              Standard contract deliverables are retained for 12 months post-delivery to facilitate secondary exports or CAD re-alignments. Proprietary raw sensor data (.LAS/LAZ, RAW Imagery) may be purged 90 days after project completion unless long-term storage is explicitly contracted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Operations</h2>
            <p className="text-slate-400 leading-relaxed">
              For security audits, data deletion requests, or compliance inquiries:
            </p>
            <p className="text-slate-400 mt-4 font-mono text-sm">
              Fortune Oracle Media LLC - Geospatial Division<br />
              Middleburg, FL - National Deployment<br />
              Email: ops@fortuneoraclegeospatial.com<br />
              Phone: (904) 210-7697
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
