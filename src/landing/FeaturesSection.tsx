/**
 * FeaturesSection - Landing page features grid for Humidor Hub
 * @component
 * @fileoverview Displays the main features of the app in a grid layout.
 */

'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Warehouse, AreaChart, Smartphone, Cloud } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Layers className="w-10 h-10 text-primary" />,
            title: 'Digital Humidor',
            description: 'Catalog your entire cigar collection. Track age, purchase date, and tasting notes with ease.',
        },
        {
            icon: <Warehouse className="w-10 h-10 text-primary" />,
            title: 'Multi-Humidor Management',
            description: 'Effortlessly manage your collection across multiple humidors. Create, name, and organize separate virtual humidors within the app.'
        },
        {
            icon: <Layers className="w-10 h-10 text-primary" />,
            title: 'The Cigar Journal',
            description: 'Document every detail of your smoking experience. Log duration, ratings, nuanced tasting notes, and the perfect drink pairing.'
        },
        {
            icon: <AreaChart className="w-10 h-10 text-primary" />,
            title: 'Advanced Statistics',
            description: 'Go beyond the numbers with insightful analytics. Visualize your collection with beautiful charts and graphs on your dashboard.'
        },
        {
            icon: <Smartphone className="w-10 h-10 text-primary" />,
            title: 'Mobile Access',
            description: 'Access your collection from anywhere with our beautifully designed mobile apps for iOS and Android.',
        },
        {
            icon: <Cloud className="w-10 h-10 text-primary" />,
            title: 'Cloud Sync',
            description: 'Your collection is securely stored and synced across all your devices in real-time.',
        },
    ];

    return (
        <section id="features" className={"w-full py-20 md:py-32 bg-secondary/50"}>
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        Features for the Modern Aficionado
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        Everything you need to manage and enjoy your passion for cigars.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="flex flex-col items-center text-center p-6 bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-4">{feature.icon}</div>
                            <CardHeader className="p-0">
                                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
