type ProfileLink = {
  label: string;
  href: string;
};

type ProfileLinksProps = {
  links?: ProfileLink[];
};

function ProfileLinks({ links }: ProfileLinksProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <nav className="person-links" aria-label="Profile links">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default ProfileLinks;
