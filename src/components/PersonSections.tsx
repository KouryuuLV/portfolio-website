type PersonSection = {
  title: string;
  body: string;
};

type PersonSectionsProps = {
  sections?: PersonSection[];
};

function PersonSectionBlock({ title, body }: PersonSection) {
  return (
    <section className="person-section">
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}

function PersonSections({ sections }: PersonSectionsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="person-content">
      {sections.map((section) => (
        <PersonSectionBlock key={section.title} {...section} />
      ))}
    </div>
  );
}

export default PersonSections;
