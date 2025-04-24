import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto text-center">
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl rounded-full"></div>
                        <h1 className="text-9xl font-bold relative z-10 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                            404
                        </h1>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

                    <p className="text-white/70 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <Link href="/">
                        <Button variant="glow" className="group">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Button>
                    </Link>

                    <p className="mt-8 text-accent/80 italic">
                        Because Every Life Deserves More
                    </p>
                </div>
            </div>
        </div>
    );
} 