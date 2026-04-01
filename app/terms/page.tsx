import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and legal conditions for Fortune Oracle Geospatial.'
};

export default function GeospatialTermsPage() {
  return (
    <main className="pb-24">
      <section className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Geospatial Terms of Service</h1>
          <p className="text-slate-400">Last updated: March 3, 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="prose prose-invert prose-slate max-w-none space-y-8">

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Scope of Agreement</h2>
            <p className="text-slate-400 leading-relaxed">
              These Terms of Service govern the engagement between you (the "Client") and Fortune Oracle Media LLC, doing business as Fortune Oracle Geospatial (the "Contractor"), for all drone mapping, aerial surveying, volumetric analysis, and photogrammetric engineering services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Operations & Compliance</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              All airborne data acquisition is conducted strictly in accordance with Federal Aviation Administration (FAA) Part 107 regulations.
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li>We reserve the right to delay, abbreviate, or cancel flight operations if weather conditions, solar activity (Kp index &gt; 5), or airspace restrictions compromise safety or data integrity.</li>
              <li>The Client warrants that they possess the legal authority to grant access to the requested target site and airspace overlay.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Accuracy Tolerances & Liability</h2>
            <p className="text-slate-400 leading-relaxed">
              While we deploy centimeter-grade RTK/PPK GNSS receivers and strictly calibrate our photogrammetry pipelines, all geospatial outputs (Orthomosaics, DSMs, DTMs) are provided "AS-IS".
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              <strong className="text-white">CRITICAL DISCLAIMER:</strong> Our deliverables do NOT constitute a legally binding property boundary survey. If boundary lines, legal demarcations, or title resolutions are required, the Client must contract a licensed Professional Land Surveyor (PLS) in the respective jurisdiction. Our volumetric and topographic data is strictly for engineering estimation, site planning, and progress monitoring. We assume no liability for structural deviations or financial losses resulting from the direct application of our data matrices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Deliverables & Acceptance</h2>
            <p className="text-slate-400 leading-relaxed">
              Data packages (GeoTIFFs, Point Clouds, DXFs) will be delivered via secured cloud transfer upon completion of the compute pipeline. The Client has five (5) business days to review the parameters against the agreed Statement of Work (SOW). Unless a technical deviation is flagged within this window, the deliverable is considered formally accepted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-slate-400 leading-relaxed">
              Upon final remission of payment, the Client retains a perpetual, non-exclusive license to utilize, modify, and distribute the supplied engineering outputs. Fortune Oracle Media LLC retains the copyright to the underlying raw visual/sensor data and reserves the right to utilize anonymized models or generic site excerpts for portfolio demonstration or algorithmic training, unless explicitly barred by a Non-Disclosure Agreement (NDA).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Indemnification</h2>
            <p className="text-slate-400 leading-relaxed">
              The Client shall indemnify and hold harmless Fortune Oracle Media LLC from any claims, damages, or legal actions arising from the Client’s failure to secure site access permissions, or from the subsequent misapplication of the provided geospatial intel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law</h2>
            <p className="text-slate-400 leading-relaxed">
              These Terms shall be interpreted under the laws of the State of Florida. Any technical or contractual disputes shall be mediated in Duval County, Florida.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Communications</h2>
            <p className="text-slate-400 mt-4 font-mono text-sm">
              Fortune Oracle Media LLC - Geospatial Division<br />
              Email: legal@fortuneoraclegeospatial.com<br />
              Phone: (904) 210-7697
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
