/**
 * PilotProgramSection - Landing page pilot program signup for Humidor Hub
 * @component
 * @fileoverview Displays the pilot program application form and Google signup.
 */

'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { submitPilotApplication } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export default function PilotProgramSection() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(submitPilotApplication, {
        message: '',
        errors: undefined,
        success: false,
    });

    // Google Signup Handler
    const handleGoogleSignup = async () => {
        try {
            const { getAuth, signInWithPopup, GoogleAuthProvider } = await import('firebase/auth');
            const { db } = await import('@/lib/firebase');
            const { sendThankYouEmail } = await import('@/lib/send-email');
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({ prompt: 'select_account' });
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const profile = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                providerData: user.providerData,
                metadata: user.metadata,
            };
            const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
            await addDoc(collection(db, 'pilot-applicants'), {
                ...profile,
                signedUpAt: serverTimestamp(),
                signupMethod: 'google',
            });
            await sendThankYouEmail({ name: profile.name || '', email: profile.email || '' });
            toast({
                title: 'Success!',
                description: 'Thank you! Your Google signup is complete. Check your email for next steps.',
            });
        } catch (error) {
            console.error('Google signup error:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Google signup failed. Please try again.',
            });
        }
    };

    function SubmitButton() {
        const { pending } = useFormStatus();
        return (
            <Button type="submit" className="w-full" disabled={pending}>
                {pending ? 'Submitting...' : 'Submit Application'}
            </Button>
        );
    }

    return (
        <section id="pilot" className="w-full py-20 md:py-32 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="grid sm:grid-cols-2 gap-12 items-center">
                    
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

                            {/* Google OAuth Button */}
                            <div className="flex flex-col items-center mt-4">
                                <Button
                                    type="button"
                                    className="w-full bg-white text-black border border-gray-300 flex items-center justify-center gap-2 shadow hover:bg-gray-50"
                                    onClick={handleGoogleSignup}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_40)">
                                            <path d="M23.04 12.2615C23.04 11.4448 22.9636 10.6615 22.8191 9.91309H12V14.3486H18.3073C18.0436 15.6615 17.2436 16.7392 16.1209 17.4786V20.0865H19.6273C21.6273 18.2615 23.04 15.5651 23.04 12.2615Z" fill="#4285F4" />
                                            <path d="M12 23C14.88 23 17.3073 22.0651 19.1209 20.0865L16.1209 17.4786C15.0655 18.1786 13.68 18.5651 12 18.5651C9.24364 18.5651 6.92091 16.7392 6.12091 14.3048H2.96V16.9786C4.76545 20.0651 8.12091 23 12 23Z" fill="#34A853" />
                                            <path d="M6.12091 14.3048C5.92091 13.6048 5.81818 12.8692 5.81818 12.1086C5.81818 11.3486 5.92091 10.613 6.12091 9.91304V7.23917H2.96C2.34727 8.56513 2 10.0651 2 11.6087C2 13.1522 2.34727 14.6522 2.96 15.9783L6.12091 14.3048Z" fill="#FBBC05" />
                                            <path d="M12 5.43478C13.7655 5.43478 15.3073 6.06522 16.4536 7.15217L19.2001 4.43478C17.3073 2.65217 14.88 1.6087 12 1.6087C8.12091 1.6087 4.76545 4.54348 2.96 7.23913L6.12091 9.91304C6.92091 7.47826 9.24364 5.43478 12 5.43478Z" fill="#EA4335" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_40">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Sign up with Google
                                </Button>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm text-muted-foreground">
                                    By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
