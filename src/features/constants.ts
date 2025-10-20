import type { ITechStackCategory } from './interface';

export const contactInfo = [
  { icon: '📍', text: 'Melbourne VIC 3058' },
  { icon: '📱', text: '+61 400 171 642' },
  { icon: '📧', text: 'willy.vox@outlook.com.au' },
];

export const summary = {
  first: `Senior Software Engineer with deep expertise in enterprise software architecture, leading the design and implementation of scalable microservices ecosystems, cloud infrastructure, and distributed systems that solve complex business challenges`,
  second: `Passionate about driving technical excellence through modern architectural patterns and mentoring engineering teams and collaborating with cross-functional stakeholders to align technical strategy with business objectives.`,
  third: `Active contributor to the open-source community, author of react-ip-location (npm), actively adopted by the developer community.`,
};

export const techStack: Record<string, ITechStackCategory> = {
  'Software Architecture': {
    icon: '🏗️',
    technologies: [
      'Microservices Architecture',
      'Event Sourcing, CQRS Pattern',
      'API Gateway Pattern',
      'Message Queue Systems',
      'RESTful API Design',
      // 'Event-Driven Architecture',
      // 'Domain-Driven Design (DDD)',
      // 'Service Mesh',
    ],
  },
  'Backend Development': {
    icon: '⚙️',
    technologies: [
      '.NET (C#, ASP.NET Core)',
      'Node.js (Express.js, NestJS)',
      'Python (Django, FastAPI)',
      'Java, Spring',
      'GraphQL',
      'PHP (Laravel)', 'Sanbox',
      'Demandware, Saleforce', 
    ],
  },
  'Database & Data Management': {
    icon: '💾',
    technologies: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'DB Design & Optimization',
      'ACID Transactions',
    ],
  },
  'Frontend Development': {
    icon: '🎨',
    technologies: [
      'React, Redux, Next.js, Remix',
      'Modern JavaScript (ES6+)',
      'TypeScript',
      'Angular',
      'Build Tools (Webpack, Vite)',
      'Tailwind, Styled Components',
      'React Query, SWR',
    ],
  },
  'Cloud Integration & Messaging': {
    icon: '☁️',
    technologies: [
      'WebSockets',
      'AWS',
      'Azure Service Bus, Functions',
      'Google Cloud, Firebase',
      'Docker & Kubernetes',
      'Apache Kafka',
      'OpenAPI/Swagger',
      // 'Message Brokers',
      // 'AWS (EC2, Lambda, S3, RDS, ECS)',
      // 'Infrastructure as Code (Terraform)',
      // 'RabbitMQ',
    ],
  },

  'Testing & Quality Assurance': {
    icon: '🧪',
    technologies: [
      'TDD, BDD',
      'Unit & Integration Testing',
      'End-to-End Testing',
      'Jest, Vitest, xUnit, NUnit',
      'React Testing Library',
      'Cucumber, Selenium',
      // 'SpecFlow, Playwright, Cypress',
      // 'Load Testing (JMeter, k6)',
    ],
  },
  'DevOps & CI/CD': {
    icon: '🚀',
    technologies: [
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Jenkins, GitLab CI, GitFlow',
      'Build Tools (Gradle, Maven)',
      'Container Orchestration',
      // 'Monitoring (Application Insights, Datadog)',
      // 'Infrastructure as Code (Terraform, ARM)',
    ],
  },
  'Collaboration & Methodology': {
    icon: '🤝',
    technologies: [
      'Agile/Scrum Methodologies',
      'Jira & Confluence',
      'Miro, Figma (Collaboration)',
      'Technical Documentation',
      'Code Review',
      // 'Azure DevOps Boards',
      // 'Sprint Planning & Retrospectives',
    ],
  },
};

export const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Thales Group',
    duration: 'June 2023 - Present',
    achievements: [
      'Architecting and developing aircraft simulation applications leveraging a modern tech stack and software patterns.',
      'Integrating RESTful APIs and Apache Kafka to enable efficient, reliable data exchange and significantly enhance application performance and scalability.',
      'Designing and implementing reusable modular components and libraries, reducing development time and boosting overall code maintainability and team productivity.',
      'Leading multi-platform deployment strategies to ensure seamless compatibility and robust operational reliability across desktop and web environments.',
      'Utilizing automation and CI/CD tools such as Gitflow, Jenkins, Docker, Gradle, and Selenium to streamline testing, build, and deployment pipelines.',
    ],
    skills: [
      'React',
      'Electron',
      'TypeScript',
      'Redux',
      'Node.js',
      '.NET',
      'C#',
      'Java Spring',
      'Docker',
      'Jenkins',
      'REST APIs',
      'Kafka',
      'Oracle',
    ],
  },
  {
    title: 'Senior Software Engineer, Software Lead',
    company: 'Carro & DZHI',
    duration: 'May 2019 - June 2023',
    achievements: [
      'Spearheaded the design and development of scalable financing, trading, and e-commerce platforms, driving enhanced user experience and business growth.',
      'Architected modular and maintainable application structures, significantly boosting development efficiency and simplifying long-term maintenance.',
      'Led, mentored, and collaborated with a cross-functional team of engineers and product owners to ensure alignment of technical deliverables with strategic business objectives.',
      'Developed and maintained a comprehensive library of reusable UI components, accelerating team development cycles and ensuring consistency across diverse user interfaces.',
      'Conducted code reviews and handled seamless deployments to production environments, improving software reliability and release velocity.',
    ],
    skills: [
      '.NET',
      'ASP Core',
      'Node.js',
      'PHP',
      'React',
      'Next',
      'Redux',
      'TypeScript',
      'Angular',
      'Apollo GraphQL',
      'AWS',
      'Python',
      'MySQL',
    ],
  },
  {
    title: 'Senior Software Developer',
    company: 'Allianz Technology',
    duration: 'July 2016 - May 2019',
    achievements: [
      'Developed and maintained insurance and financing applications across web and mobile platforms, significantly improving user accessibility through responsive interfaces.',
      'Designed, built, and optimized shared components, libraries, and features that reduced code redundancy and accelerated development cycles, fostering consistency and reusability across multiple projects.',
      'Integrated front-end applications with robust server-side environments built on Java Spring, ensuring high performance, scalability, and reliability.',
      'Enhanced database interactions and optimized queries with MS SQL Server, contributing to improved data retrieval times and system responsiveness.',
      'Advocated for and adopted modern front-end frameworks to modernize the tech stack and improve developer productivity.',
    ],
    skills: [
      'TypeScript',
      'Angular 4',
      'React',
      'Redux',
      'Storybook',
      'Java Spring',
      'Google Apigee',
      'Firebase',
      'MS SQL Server',
      'StyledComponents',
      'Saleforce',
      'Demandware'
    ],
  },
  {
    title: 'Software Engineer (Demandware)',
    company: 'Merkle Commerce Solutions',
    duration: 'Jan 2014 - June 2016',
    achievements: [
      'Spearheaded e-commerce web and mobile application development within the Demandware (Salesforce Commerce Cloud - SFCC) platform, utilizing a blend of JavaScript, and jQuery to create seamless, responsive user experiences.',
      'Engineered and integrated critical third-party payment gateways (including PayPal, NaverPay, and WeChatPay) directly into the e-commerce platform, ensuring secure, efficient, and compliant transaction processing for diverse global markets.',
      'Collaborated closely with cross-functional teams to design user-friendly interfaces that enhanced customer engagement and satisfaction.',
      'Participated in code reviews and troubleshooting efforts, improving application stability and performance.',
    ],
    skills: [
      'Demandware',
      'Saleforce',
      'Sanbox',
      'Service Cloud',
      'API Integration',
      'eCommerce',
      'JavaScript',
      'jQuery',
      'AngularJS',
      'Ionic',
      'PHP',
      'Node.js',
      'C#',
      'Ruby On Rails',
      'SQL Server',
      'MongoDB',
    ],
  },
];

export const projects = [
  {
    title: 'Thales Aerospace, ONESky Project',
    description:
      'A collaborative air traffic management system and aircraft simulator for civil and military aviation.',
    link: 'https://www.thalesgroup.com/en/aerospace',
  },
  {
    title: 'Carro Platform',
    description:
      'A high-traffic e-commerce platform for buying and selling used cars and providing car services.',
    link: 'https://carro.co/sg/en',
  },
  {
    title: 'Allianz Motor Insurance',
    description: 'A comprehensive motor insurance platform for web and mobile.',
    link: 'https://getquote.allianz.com.my/motor-online/get-info',
  },
  {
    title: 'Kiehls e-Commerce Platform',
    description:
      'Full-scale e-commerce solution for the premium skincare brand.',
    link: 'https://www.kiehls.com.au/',
  },
];
