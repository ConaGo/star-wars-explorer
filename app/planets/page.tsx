import { PlanetSchema } from '@/api/schemas/planet';
import { swapi } from '@/api/swapi';
import { BackButton } from '@/components/BackButton';
import { PlanetList } from '@/components/planets/PlanetList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Planetary Database | Holocron',
    description: 'Searchable database of known worlds.',
};

export default async function PlanetsPage() {
    const allPlanets = await swapi.fetchAll('planets', PlanetSchema);

    return (
        <>
            <BackButton href="/" label="Back to Home" />

            <div className="flex items-center gap-2 mb-8 label-micro text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Database Link: Active</span>
                <span className="text-border">|</span>
                <span>Records Found: {allPlanets.length}</span>
            </div>

            <header className="mb-12">
                <h1 className="heading-page text-text">
                    Planetary <span className="text-accent">Database</span>
                </h1>
                <p className="mt-4 text-text-muted max-w-xl text-sm leading-relaxed border-l border-border pl-4">
                    Comprehensive index of known worlds across the galaxy. Query planetary data including
                    climate, terrain, population, and notable inhabitants.
                </p>
            </header>

            <PlanetList initialPlanets={allPlanets} />
        </>
    );
}
