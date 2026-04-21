interface TimelinePeriod {
  id: string;
  title: string;
  period: string;
  startYear: number;
  endYear: number;
  type: 'education' | 'work' | 'personal';
  details: string;
  description: string;
  highlights?: string[];
  location?: string;
}

const Education: React.FC = () => {
  const timelineData: TimelinePeriod[] = [
    {
      id: 'birth-childhood',
      title: 'Early Years',
      period: '1987 – 2000',
      startYear: 1987,
      endYear: 2000,
      type: 'personal',
      location: 'Latvia',
      details: 'Childhood and early development',
      description: 'Formative years and personal growth',
      highlights: [
        'Born in Latvia during the Soviet era',
        'Witnessed Latvia\'s independence transition (1990)',
        'Developed early curiosity in science and nature',
        'Started primary and secondary education'
      ]
    },
    {
      id: 'high-school',
      title: 'High School',
      period: '2000 – 2006',
      startYear: 2000,
      endYear: 2006,
      type: 'education',
      location: 'Cesis, Latvia',
      details: 'Friendly Appeal Cesis State Gymnasium',
      description: 'Secondary education and preparation for higher education',
      highlights: [
        'Strong focus on mathematics and natural sciences',
        'Participated in science olympiads and competitions',
        'Developed leadership skills through student council',
        'Excelled in biology and chemistry subjects'
      ]
    },
    {
      id: 'university',
      title: 'University',
      period: '2006 – 2011',
      startYear: 2006,
      endYear: 2011,
      type: 'education',
      location: 'Riga, Latvia',
      details: "Master's Degree in Molecular Biology/Microbiology",
      description: 'Advanced studies at University of Latvia',
      highlights: [
        'Specialized in molecular biology and microbiology',
        'Completed research projects on bacterial genetics',
        'Developed analytical and laboratory skills',
        'Master\'s thesis focused on microbial analysis'
      ]
    },
    {
      id: 'transition',
      title: 'Career Transition',
      period: '2011 – 2016',
      startYear: 2011,
      endYear: 2016,
      type: 'personal',
      location: 'Latvia/International',
      details: 'Professional development and career exploration',
      description: 'Transitioning from biology to technology field',
      highlights: [
        'Explored various career paths post-university',
        'Self-taught programming fundamentals',
        'Discovered passion for technology and problem-solving',
        'Prepared for formal IT education'
      ]
    },
    {
      id: 'tech-school',
      title: 'Technical School',
      period: '2016 – 2017',
      startYear: 2016,
      endYear: 2017,
      type: 'education',
      location: 'Riga, Latvia',
      details: 'Riga State Technical School',
      description: 'Professional training in computer programming',
      highlights: [
        'Formal training in programming languages',
        'Learned web development fundamentals',
        'Studied database design and management',
        'Built first professional projects'
      ]
    },
    {
      id: 'early-career',
      title: 'Early Career',
      period: '2017 – 2020',
      startYear: 2017,
      endYear: 2020,
      type: 'work',
      location: 'Various',
      details: 'Technology industry experience',
      description: 'Building foundational IT skills and experience',
      highlights: [
        'Started as junior developer at tech companies',
        'Worked with various programming languages and frameworks',
        'Gained experience with cloud technologies',
        'Built portfolio of professional projects'
      ]
    },
    {
      id: 'current-work',
      title: 'Current Work',
      period: '2020 – Present',
      startYear: 2020,
      endYear: 2026,
      type: 'work',
      location: 'Remote/Global',
      details: 'Freelance IT Consultant & Full Stack Developer',
      description: 'Modern web applications, cloud integration, and deployment automation',
      highlights: [
        'Built numerous full-stack web applications',
        'Specialized in React, TypeScript, and Node.js',
        'Implemented Azure cloud solutions for clients',
        'Developed CI/CD pipelines and DevOps practices'
      ]
    }
  ];

  const totalYears = 2026 - 1987; // 39 years total

  const getPeriodWidth = (start: number, end: number): number => {
    const periodYears = end - start;
    return (periodYears / totalYears) * 100;
  };

  const getPeriodColor = (type: string): string => {
    switch (type) {
      case 'education':
        return '#2563eb'; // primary blue
      case 'work':
        return '#10b981'; // success green
      case 'personal':
        return '#64748b'; // secondary gray
      default:
        return '#64748b';
    }
  };

  const scrollToPeriod = (periodId: string) => {
    const element = document.getElementById(periodId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="education-section" aria-labelledby="education-heading">
      <div className="container">
        <h2 id="education-heading">Life Timeline</h2>
        <p className="section-subtitle">
          My journey from 1987 to present: education, career, and personal growth
        </p>

        {/* Horizontal Timeline */}
        <div className="timeline-container" role="navigation" aria-label="Life timeline navigation">
          <div className="timeline-bar">
            {timelineData.map((period) => {
              const width = getPeriodWidth(period.startYear, period.endYear);
              const color = getPeriodColor(period.type);

              return (
                <div
                  key={period.id}
                  className="timeline-segment"
                  style={{
                    width: `${width}%`,
                    backgroundColor: color
                  }}
                  onClick={() => scrollToPeriod(period.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Jump to ${period.title} period`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToPeriod(period.id);
                    }
                  }}
                >
                  <div className="timeline-label">
                    <span className="period-title">{period.title}</span>
                    <span className="period-years">{period.period}</span>
                  </div>
                  <div className="timeline-tooltip">
                    <strong>{period.title}</strong>
                    <br />
                    {period.details}
                    <br />
                    <em>{period.description}</em>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline markers for years */}
          <div className="timeline-markers">
            {[1987, 1995, 2000, 2006, 2011, 2016, 2020, 2026].map(year => (
              <div key={year} className="year-marker">
                <span className="year-label">{year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline with Alternating Cards */}
        <div className="vertical-timeline">
          {timelineData.map((period, index) => (
            <div 
              key={period.id} 
              className={`timeline-card vertical-card ${index % 2 === 0 ? 'left' : 'right'}`} 
              id={period.id}
            >
              <div className="timeline-card-header">
                <div className="period-indicator" style={{ backgroundColor: getPeriodColor(period.type) }}></div>
                <div className="period-info">
                  <h3>{period.title}</h3>
                  <span className="period-dates">{period.period}</span>
                </div>
              </div>
              <div className="timeline-card-content">
                <p className="period-details">{period.details}</p>
                {period.location && <p className="period-location">📍 {period.location}</p>}
                <p className="period-description">{period.description}</p>
                {period.highlights && period.highlights.length > 0 && (
                  <div className="period-highlights">
                    <h4>Key Highlights</h4>
                    <ul>
                      {period.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

