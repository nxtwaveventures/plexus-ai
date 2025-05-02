export const metadata = {
    title: 'Biological Age Assessment - Plexus LifeX',
    description: 'Discover your biological age through our advanced AI-powered assessment.',
};

export default function BiologicalAgeAssessmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
} 