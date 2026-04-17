import React from 'react';

interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  details: string;
}

const Education: React.FC = () => {
  const educationData: Education[] = [
    {
      institution: 'Riga State Technical School',
      degree: 'Professional Degree',
      field: 'Computer Programming/Programmer, General',
      year: '2016 – 2017',
      details:
        'Professional training in computer programming and general programming skills',
    },
    {
      institution: 'Latvijas Universitate (University of Latvia)',
      degree: "Master's Degree",
      field: 'Molecular Biology/Microbiology',
      year: '2006 – 2011',
      details: 'Advanced studies in molecular biology and microbiology',
    },
    {
      institution: 'Friendly Appeal Cesis State Gymnasium',
      degree: 'High School Diploma',
      field: 'General Education',
      year: '2000 – 2006',
      details: 'Secondary education and preparation for higher education',
    },
  ];

  return (
    <section className="education-section" aria-labelledby="education-heading">
      <div className="container">
        <h2 id="education-heading">Education</h2>
        <p className="section-subtitle">
          My academic journey and professional development
        </p>

        <div
          className="education-timeline"
          role="list"
          aria-label="Educational background timeline"
        >
          {educationData.map((edu, index) => (
            <div key={index} className="education-card" role="listitem">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="education-content">
                <div className="education-header">
                  <h3>{edu.institution}</h3>
                  <span
                    className="year"
                    aria-label={`Attended from ${edu.year}`}
                  >
                    {edu.year}
                  </span>
                </div>
                <p className="degree">
                  {edu.degree} in {edu.field}
                </p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
