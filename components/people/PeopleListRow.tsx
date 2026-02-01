import { People } from '@/api/schemas/types';
import { ListRow } from '../ListRow';

interface Props {
    person: People;
}

export function PeopleListRow({ person }: Props) {
    return (
        <ListRow
            href={`/people/${person.id}`}
            title={person.name}
            metadata={[
                { label: 'Birth', value: person.birth_year },
                { label: 'Gender', value: person.gender },
                { label: 'Height', value: `${person.height}cm` },
            ]}
            badges={[
                { label: 'Films', count: person.films.length },
                { label: 'Ships', count: person.starships.length },
            ]}
            badgesLabel="Affiliations"
        />
    );
}
