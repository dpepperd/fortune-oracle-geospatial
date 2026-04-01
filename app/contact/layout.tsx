import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Request a Mapping Quote',
    description: 'Get in touch with the Fortune Oracle Geospatial operations team to discuss your specific topographic mapping and site analysis needs.'
};

export default function GeospatialContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
