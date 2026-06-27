import PersonHero from './PersonHero';
import PersonLinks from './PersonLinks';
import PersonSections from './PersonSections';

type PersonLink = {
  label: string;
  href: string;
};

type PersonSection = {
  title: string;
  body: string;
};

type Person = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  highlights?: string[];
  links?: PersonLink[];
  sections?: PersonSection[];
};

type PersonPageProps = {
  person: Person;
};

function PersonPage({ person }: PersonPageProps) {
  return (
    <div className="person-page">
      <PersonHero
        name={person.name}
        title={person.title}
        summary={person.summary}
        highlights={person.highlights}
      />

      <main className="person-content">
        <PersonLinks links={person.links} />
        <PersonSections sections={person.sections} />
      </main>
    </div>
  );
}

export default PersonPage;
