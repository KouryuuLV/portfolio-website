type ProfileSection = {
  title: string;
  body: string;
};

type ProfileSectionsProps = {
  sections?: ProfileSection[];
};

function ProfileSections({ sections }: ProfileSectionsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="person-content">
      {sections.map((section) => (
        <section key={section.title} className="person-section">
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </div>
  );
}

export default ProfileSections;
