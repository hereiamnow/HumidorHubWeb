

'use client'
import { useState, useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import InteractiveInput from '@/components/interactive-input'
import { Check, Layers, Smartphone, Cloud, Star, Coffee, BarChart, Leaf, Globe, Zap, Shapes, Download, Upload, Warehouse, AreaChart, Sun, Moon, Cog } from 'lucide-react'
import AppleIcon from '@/components/apple-icon'
import GooglePlayIcon from '@/components/google-play-icon'
import RoxyIcon from '@/components/roxy-icon'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ThemeSwap from '@/components/theme-swap'
import { submitPilotApplication } from './actions'
import { useToast } from '@/hooks/use-toast'

function HeroSection() {
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
  )
}

function FeaturesSection() {
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
    // {
    //   icon: <Bluetooth className="w-10 h-10 text-primary" />,
    //   title: 'Smart Sensor Integration',
    //   description: 'Protect your investment with real-time climate monitoring. Seamlessly integrates with Govee Bluetooth hygrometers for live data.'
    // },
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
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Features for the Modern Aficionado
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Everything you need to manage and enjoy your passion for cigars.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  )
}

function BrowseBySection() {
  const browseOptions = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: 'Browse by Country',
      description: "Take a journey through the world of tobacco. Perfect for comparing regional profiles or finding a cigar from your favorite tobacco-growing nation.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary" />,
      title: 'Browse by Wrapper',
      description: "The wrapper leaf defines a significant part of a cigar's flavor. Find all the cigars that match your craving, from a dark Maduro to a creamy Connecticut.",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: 'Browse by Strength',
      description: "Find the right cigar for the right time of day. Easily select a lighter smoke for the morning or a powerful, complex cigar for the evening.",
    },
    {
      icon: <Shapes className="w-10 h-10 text-primary" />,
      title: 'Browse by Shape (Vitola)',
      description: "The size and shape of a cigar impacts its burn time and a an PXDTzYgEM86xQ-s.p.3ce64794.woff2. Ideal for when you know exactly how much time you have to enjoy a smoke.",
    },
  ];

  return (
    <section id="browse" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Discover Your Collection
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Powerful new ways to explore and organize your cigars.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {browseOptions.map((option, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{option.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoxySection() {
  const roxyFeatures = [
    {
      icon: <Star className="w-5 h-5 text-accent" />,
      title: 'Tasting Notes',
      description: 'A breakdown of the flavor profile and aromas you can expect.'
    },
    {
      icon: <Coffee className="w-5 h-5 text-accent" />,
      title: 'Pairing Suggestions',
      description: 'Recommendations for drinks that complement the cigar.'
    },
    {
      icon: <BarChart className="w-5 h-5 text-accent" />,
      title: 'Aging Potential',
      description: 'Assessment of how the cigar is likely to develop over time.'
    },
    {
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: 'Similar Smokes',
      description: 'Recommendations for other cigars you might enjoy.'
    }
  ]
  return (
    <section id="roxy" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <RoxyIcon className="w-16 h-16 text-primary" />
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Roxy's Corner</h2>
                <p className="text-primary text-xl font-semibold">Your Personal AI Tobacconist</p>
              </div>
            </div>
            <p className="text-muted-foreground md:text-lg">
              Roxy is the intelligent heart of the Humidor Hub app. Simply provide a cigar name, and Roxy's AI automatically populates essential details like wrapper, binder, filler, strength, and origin, saving you time.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Beyond data, Roxy provides expert insights in a dedicated panel on each cigar's detail screen to deepen your appreciation and guide your experience.
            </p>
          </div>
          <div className="space-y-6">
            {roxyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DataManagementSection() {
  return (
    <section id="data" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Seamless Data Management
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Your valuable collection data is always portable and easy to manage, whether you're just getting started or have been curating for years.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="p-6 bg-card">
            <CardHeader className="p-0 flex flex-row items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">Import Your Existing Collection</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <p className="text-muted-foreground">
                Getting your collection into Humidor Hub is effortless. Prepare your data in a supported file format (like CSV) to migrate your entire inventory in a single step. It's the perfect tool for new users with established collections, saving hours of manual entry.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 bg-card">
            <CardHeader className="p-0 flex flex-row items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">Export for Backup & Portability</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <p className="text-muted-foreground">
                Your collection data is yours. With a single tap, generate a complete backup of your virtual humidor. This provides peace of mind and ultimate data portability for custom analysis, insurance purposes, or simply for safekeeping.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ThemeSection({ onThemeChange }: { onThemeChange: (theme: 'dark' | 'light') => void }) {
  return (
    <section id="themes" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Curate Your Vibe</h2>
            <p className="text-muted-foreground">Humidor Hub is designed to be a deeply personal experience, right down to its appearance. We believe
              your app should match your personal style and viewing environment. Choose from a curated collection
              of light and dark themes, each crafted to create a specific mood.</p>
          </div>
          <div id="pnlThemeSwap" className="mt-4 mb-4 flex flex-row items-center justify-center gap-2 text-left">
            <ThemeSwap onThemeChange={onThemeChange} defaultChecked={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 mt-1">
                <Moon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">The Dark Collection</h3>
                <p className="text-muted-foreground text-sm">Perfect for low-light environments like your favorite cigar lounge or for users who prefer a bolder, modern aesthetic.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 mt-1">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">The Light Collection</h3>
                <p className="text-muted-foreground text-sm">Ideal for bright environments, designed for clarity and warmth, offering a clean, classic look.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 mt-1">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Adaptive</h3>
                <p className="text-muted-foreground text-sm">Seamlessly follows your device’s system settings, switching between Light and Dark modes automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit Application'}
    </Button>
  )
}

function PricingSection() {
  const freeFeatures = ['Track up to 25 cigars', 'Basic search filters', 'Community access']
  const premiumFeatures = ["Roxy's AI Insights", 'Unlimited cigar tracking', 'Advanced search & analytics', 'Personalized recommendations', 'Export your collection', 'Priority support']

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Find the Perfect Plan
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Start for free, or unlock powerful features with our Premium plan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-card flex flex-col">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold">Free</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">For the casual enthusiast.</CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <div className="text-4xl font-bold my-6">$0<span className="text-lg font-medium text-muted-foreground">/month</span></div>
              <ul className="space-y-3">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <Button variant="outline" className="mt-8 w-full">Get Started</Button>
          </Card>
          <Card className="p-8 bg-card flex flex-col border-2 border-primary shadow-primary/20 shadow-xl">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold">Premium</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">For the serious collector.</CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <div className="text-4xl font-bold my-6">$29.99<span className="text-lg font-medium text-muted-foreground">/year</span></div>
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <Button className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground">Go Premium</Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

function PilotProgramSection() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitPilotApplication, {
    message: '',
    errors: undefined,
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Success!',
        description: state.message,
      });
    } else if (state.message && state.errors) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="pilot" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Join the Pilot Program</h2>
            <p className="text-muted-foreground md:text-lg">
              Be one of the first 100 testers to get exclusive access to Humidor Hub before the official launch. Your feedback will shape the future of the app, and as a thank you, you'll receive <strong>6 months of Premium for free.</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Spots are limited. Apply now to secure your place.
            </p>
          </div>
          <Card className="p-8">
            <CardHeader>
              <CardTitle>Apply Now</CardTitle>
              <CardDescription>Fill out the form to join the waiting list.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" />
                  {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" />
                  {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email}</p>}
                </div>
                <SubmitButton />
                {state.message && !state.errors && !state.success && <p className="text-sm font-medium text-destructive">{state.message}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="download" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Take Your Collection With You
          </h2>
          <p className="text-muted-foreground md:text-lg mt-4 mb-8">
            Download the Humidor Hub app today and experience the future of cigar collection management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 w-full sm:w-auto text-base bg-accent text-accent-foreground hover:bg-accent/90">
              <AppleIcon className="w-6 h-6 mr-3" />
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </Button>
            <Button size="lg" className="h-14 w-full sm:w-auto text-base bg-accent text-accent-foreground hover:bg-accent/90">
              <GooglePlayIcon className="w-6 h-6 mr-3" />
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BrowseBySection />
        <RoxySection />
        <DataManagementSection />
        <ThemeSection onThemeChange={setTheme} />
        <PilotProgramSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
