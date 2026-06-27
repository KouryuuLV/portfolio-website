import ProfileHero from './ProfileHero';
import ProfileLinks from './ProfileLinks';
import ProfileSections from './ProfileSections';

type ProfileLink = {
  label: string;
  href: string;
};

type ProfileSection = {
  title: string;
  body: string;
};

type ProfileData = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  highlights?: string[];
  links?: ProfileLink[];
  sections?: ProfileSection[];
};

type ProfilePageProps = {
  profile: ProfileData;
};

function ProfilePage({ profile }: ProfilePageProps) {
  return (
    <div className="person-page">
      <ProfileHero
        name={profile.name}
        title={profile.title}
        summary={profile.summary}
        highlights={profile.highlights}
      />

      <main className="person-content">
        <ProfileLinks links={profile.links} />
        <ProfileSections sections={profile.sections} />
      </main>
    </div>
  );
}

export default ProfilePage;
