import { PeopleSchema } from '@/api/schemas/people';
import { swapi } from '@/api/swapi';
import { PeopleDetail } from '@/components/people/PeopleDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const person = await swapi.people.byId(id);
    return {
      title: `${person.name} | Personnel Archives`,
      description: `Biological profile for ${person.name} in the Star Wars database.`,
    };
  } catch {
    return { title: 'Subject Not Found' };
  }
}

export async function generateStaticParams() {
  const allPeople = await swapi.fetchAll('people', PeopleSchema);
  return allPeople.map((p) => ({ id: p.id }));
}

export default async function PersonPage({ params }: Props) {
  const { id } = await params;

  try {
    const person = await swapi.people.byId(id);
    return <PeopleDetail person={person} />;
  } catch (error) {
    return notFound();
  }
}