
# Humidor Hub Web

Humidor Hub Web is a modern landing page and companion app for cigar aficionados, built with Next.js, TypeScript, and Tailwind CSS. It offers a beautiful, interactive experience for managing cigar collections, exploring features, and connecting with the Humidor Hub mobile apps.

## Features

- **Digital Humidor**: Catalog your entire cigar collection, track age, purchase date, and tasting notes.
- **Multi-Humidor Management**: Organize multiple virtual humidors.
- **Cigar Journal**: Log smoking experiences, ratings, notes, and pairings.
- **Smart Sensor Integration**: Real-time climate monitoring with Govee Bluetooth hygrometers.
- **Advanced Statistics**: Visualize your collection with charts and analytics.
- **Mobile Access**: iOS and Android apps available.
- **Cloud Sync**: Secure, real-time sync across devices.
- **Browse by Country, Wrapper, Strength, Shape**: Powerful ways to explore cigars.
- **Roxy's Corner (AI Tobacconist)**: AI-powered cigar data and expert insights.
- **Import/Export**: Easily migrate and back up your collection.
- **Custom Themes**: Curate your app's vibe with light and dark themes.
- **Pricing Table**: Compare free and premium plans.
- **App Store Badges**: Download links for App Store and Google Play.

## Style Guidelines

- **Primary color**: Warm bronze (#CD7F32)
- **Background**: Dark charcoal (#36454F)
- **Accent**: Rich gold (#FFD700)
- **Fonts**: 'Inter' (body), 'Playfair' (headings)
- **Layout**: Single-page, smooth scrolling, elegant icons, subtle animations

## Tech Stack

- [Next.js](https://nextjs.org/) (v15)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Genkit AI](https://github.com/genkit-ai/genkit)
- [Firebase](https://firebase.google.com/) (for mobile apps)

## Getting Started

1. **Install dependencies**:
	```powershell
	npm install
	```
2. **Run the development server**:
	```powershell
	npm run dev
	```
	The app will be available at `http://localhost:9002`.

3. **Genkit AI local dev** (optional):
	```powershell
	npm run genkit:dev
	```

## Project Structure

- `src/app/` - Main app pages and layout
- `src/components/` - UI and layout components
- `src/ai/` - Genkit AI integration
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `docs/` - Project documentation


## License

You may not use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software or any part of it without explicit written permission from the copyright holder.

© 2025 hereiamnow. All rights reserved.
