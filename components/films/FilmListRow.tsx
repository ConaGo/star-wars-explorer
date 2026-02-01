import { Film } from '@/api/schemas/types';
import { ListRow } from '../ListRow';

interface Props {
    film: Film;
}

export function FilmListRow({ film }: Props) {
    return (
        <ListRow
            href={`/films/${film.id}`}
            title={film.title}
            metadata={[
                { label: 'Episode', value: `${film.episode_id}` },
                { label: 'Director', value: film.director },
                { label: 'Released', value: film.release_date },
            ]}
            badges={[
                { label: 'Characters', count: film.characters.length },
                { label: 'Planets', count: film.planets.length },
            ]}
            badgesLabel="Featured"
        />
    );
}
