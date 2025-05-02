import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Biological Age Assessment - Plexus LifeX',
    description: 'Take our comprehensive biological age assessment to understand your body\'s true age.',
};

export async function generateStaticParams() {
    return [];
}

export default function BAALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            {children}
        </div>
    );
} 