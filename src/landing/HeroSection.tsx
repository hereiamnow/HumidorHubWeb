/**
 * HeroSection - Landing page hero banner for Humidor Hub
 * @component
 * @fileoverview Displays the main headline, tagline, and interactive input for the landing page.
 */

'use client';
import InteractiveInput from '@/components/interactive-input';

export default function HeroSection() {
    return (
        <section className="w-full py-20 md:py-32 lg:py-40 text-center bg-background">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                        Elevate Your Cigar Experience
                    </h1>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        Humidor Hub is the ultimate companion for cigar aficionados. Track your collection, discover new cigars, and connect with a community of enthusiasts.
                    </p>
                </div>
                <div className="mt-8 max-w-xl mx-auto">
                    <InteractiveInput />
                </div>
            </div>
        </section>
    );
}
