import { PeopleSchema } from '@/api/schemas/people';
import { swapi } from '@/api/swapi';
import { PeopleList } from '@/components/people/PeopleList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Personnel Archives | Holocron',
    description: 'Searchable database of galactic inhabitants.',
};

export default async function PeoplePage() {
    const allPeople = await swapi.fetchAll('people', PeopleSchema);

    return (
        <>
            <div className="flex items-center gap-2 mb-8 label-micro text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Database Link: Active</span>
                <span className="text-border">|</span>
                <span>Records Found: {allPeople.length}</span>
            </div>

            <header className="mb-12">
                <h1 className="heading-page text-text">
                    Personnel <span className="text-accent">Archives</span>
                </h1>
                <p className="mt-4 text-text-muted max-w-xl text-sm leading-relaxed border-l border-border pl-4">
                    Authorized access only. Query the galactic registry for detailed biological and
                    affiliative data on known sentient beings.
                </p>
            </header>

            <PeopleList initialPeople={allPeople} />
        </>
    );
}