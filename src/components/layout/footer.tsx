import CigarLogo from '@/components/cigar-logo'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <CigarLogo className="h-6 w-6 text-primary" />
          <p className="text-sm font-semibold">Humidor Hub</p>
        </div>
        <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
          © {new Date().getFullYear()} Humidor Hub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
