type ProfileHeroProps = {
  name: string;
  title: string;
  summary: string;
  highlights?: string[];
};

function ProfileHero({ name, title, summary, highlights }: ProfileHeroProps) {
  return (
    <header className="person-hero">
      <div>
        <p className="eyebrow">People portfolio</p>
        <h1>{name}</h1>
        <p className="person-title">{title}</p>
        <p className="person-summary">{summary}</p>
        {highlights && highlights.length > 0 ? (
          <ul className="person-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  );
}

export default ProfileHero;
