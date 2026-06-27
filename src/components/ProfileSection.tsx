type ProfileSectionProps = {
  title: string;
  body: string;
};

function ProfileSection({ title, body }: ProfileSectionProps) {
  return (
    <section className="person-section">
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}

export default ProfileSection;
