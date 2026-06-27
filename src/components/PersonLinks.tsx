type PersonLink = {
  label: string;
  href: string;
};

type PersonLinksProps = {
  links?: PersonLink[];
};

function PersonLinks({ links }: PersonLinksProps) {
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

export default PersonLinks;
