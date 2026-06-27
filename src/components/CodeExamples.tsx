import React, { useState } from 'react';
import profileData from '../data/profile.json';

interface CodeExample {
  id: number;
  title: string;
  description: string;
  language: string;
  code: string;
  tags: string[];
  projectInfo: string;
}

const CodeExamples: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<number>(0);

  const codeExamples: CodeExample[] = profileData.codeExamples.items as CodeExample[];

  const currentExample = codeExamples[selectedExample];

  return (
    <section
      className="code-examples-section"
      aria-labelledby="code-examples-heading"
    >
      <div className="container">
        <h2 id="code-examples-heading">{profileData.codeExamples.heading}</h2>
        <p className="section-subtitle">{profileData.codeExamples.subtitle}</p>

        <div className="code-showcase">
          <div className="code-tabs" role="tablist" aria-label="Code examples">
            {codeExamples.map((example, index) => (
              <button
                key={example.id}
                className={`code-tab ${selectedExample === index ? 'active' : ''}`}
                onClick={() => setSelectedExample(index)}
                role="tab"
                aria-selected={selectedExample === index}
                aria-controls={`code-panel-${example.id}`}
                id={`code-tab-${example.id}`}
                tabIndex={selectedExample === index ? 0 : -1}
              >
                {example.title}
              </button>
            ))}
          </div>

          <div
            className="code-content"
            role="tabpanel"
            aria-labelledby={`code-tab-${currentExample.id}`}
            id={`code-panel-${currentExample.id}`}
          >
            <div className="code-header">
              <h3>{currentExample.title}</h3>
              <span
                className="language-badge"
                aria-label={`Code language: ${currentExample.language}`}
              >
                {currentExample.language}
              </span>
            </div>

            <p className="code-description">{currentExample.description}</p>

            <div className="code-meta">
              <div className="tags" aria-label="Technologies used">
                Tags: {currentExample.tags.join(', ')}
              </div>
              <div className="project-info" aria-label="Project details">
                {currentExample.projectInfo}
              </div>
            </div>

            <pre
              className="code-block"
              aria-label={`Code example in ${currentExample.language}`}
            >
              <code>{currentExample.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
