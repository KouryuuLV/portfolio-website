import React, { useState } from 'react';

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

  const codeExamples: CodeExample[] = [
    {
      id: 1,
      title: 'Custom React Hook - useLocalStorage',
      language: 'typescript',
      description:
        'A reusable hook for syncing state with browser localStorage, with TypeScript support.',
      tags: ['React', 'TypeScript', 'Hooks', 'Browser API'],
      projectInfo: 'Project Size: Small | Intensity: Medium',
      code: `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage:
const [count, setCount] = useLocalStorage<number>('count', 0);`,
    },
    {
      id: 2,
      title: 'API Data Fetching with Error Handling',
      language: 'typescript',
      description:
        'A production-ready pattern for fetching API data with loading, error, and success states.',
      tags: ['TypeScript', 'API', 'Error Handling', 'Async/Await'],
      projectInfo: 'Project Size: Medium | Intensity: High',
      code: `interface ApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(\`API error: \${response.status}\`);
  }
  return response.json();
}

// Usage in component:
const [state, setState] = useState<ApiState<User>>({
  data: null,
  isLoading: true,
  error: null
});

useEffect(() => {
  fetchData<User>('/api/user')
    .then(data => setState({ data, isLoading: false, error: null }))
    .catch(error => setState({ data: null, isLoading: false, error: error.message }));
}, []);`,
    },
    {
      id: 3,
      title: 'Type-Safe Form Handling',
      language: 'typescript',
      description:
        'Strongly-typed form state management with validation in React.',
      tags: ['React', 'TypeScript', 'Forms', 'Validation'],
      projectInfo: 'Project Size: Medium | Intensity: Medium',
      code: `interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const [formData, setFormData] = useState<FormData>({
  email: '',
  password: '',
  rememberMe: false
});

const [errors, setErrors] = useState<FormErrors>({});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, type, checked, value } = e.currentTarget;
  const fieldName = name as keyof FormData;
  
  setFormData(prev => ({
    ...prev,
    [fieldName]: type === 'checkbox' ? checked : value
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Validation logic
};`,
    },
  ];

  const currentExample = codeExamples[selectedExample];

  return (
    <section
      className="code-examples-section"
      aria-labelledby="code-examples-heading"
    >
      <div className="container">
        <h2 id="code-examples-heading">Code Examples & Snippets</h2>
        <p className="section-subtitle">
          Real-world patterns and solutions I use daily
        </p>

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
