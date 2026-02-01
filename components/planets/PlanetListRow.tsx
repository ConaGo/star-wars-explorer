import { Planet } from '@/api/schemas/types';
import { ListRow } from '../ListRow';

interface Props {
    planet: Planet;
}

export function PlanetListRow({ planet }: Props) {
    return (
        <ListRow
            href={`/planets/${planet.id}`}
            title={planet.name}
            metadata={[
                { label: 'Climate', value: planet.climate },
                { label: 'Terrain', value: planet.terrain },
                { label: 'Population', value: planet.population },
            ]}
            badges={[
                { label: 'Residents', count: planet.residents.length },
                { label: 'Films', count: planet.films.length },
            ]}
            badgesLabel="Data Points"
        />
    );
}
