import profileData from '../data/profile.json';

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
  const timelineData: TimelinePeriod[] = profileData.education.items as TimelinePeriod[];

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
        <h2 id="education-heading">{profileData.education.heading}</h2>
        <p className="section-subtitle">{profileData.education.subtitle}</p>

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

