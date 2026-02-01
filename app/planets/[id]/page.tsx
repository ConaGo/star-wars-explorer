import { PlanetSchema } from '@/api/schemas/planet';
import { swapi } from '@/api/swapi';
import { PlanetDetail } from '@/components/planets/PlanetDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    try {
        const planet = await swapi.planets.byId(id);
        return {
            title: `${planet.name} | Planetary Database`,
            description: `Environmental and population data for ${planet.name}.`,
        };
    } catch {
        return { title: 'Planet Not Found' };
    }
}

export async function generateStaticParams() {
    const allPlanets = await swapi.fetchAll('planets', PlanetSchema);
    return allPlanets.map((p) => ({ id: p.id }));
}

export default async function PlanetPage({ params }: Props) {
    const { id } = await params;

    try {
        const planet = await swapi.planets.byId(id);
        return <PlanetDetail planet={planet} />;
    } catch (error) {
        return notFound();
    }
}
