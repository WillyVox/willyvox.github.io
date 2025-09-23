import type { ITechStackCategory } from './interface';

export const contactInfo = [
  { icon: '📍', text: 'Melbourne VIC 3058' },
  { icon: '📱', text: '+61 400 171 642' },
  { icon: '📧', text: 'willy.vox@outlook.com.au' },
];

export const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Thales Group',
    duration: 'June 2023 - Present',
    achievements: [
      'Architecting and developing sophisticated aircraft simulation applications leveraging a modern tech stack including React, Electron, TypeScript, Redux, Node.js, Tailwind CSS, .NET, and Java Spring. ',
      'Integrating RESTful APIs and Apache Kafka to enable efficient, reliable data exchange and significantly enhance application performance and scalability.',
      'Designing and implementing reusable modular components and libraries, reducing development time by 20% and boosting overall code maintainability and team productivity. ',
      'Leading multi-platform deployment strategies to ensure seamless compatibility and robust operational reliability across desktop and web environments.',
      'Utilizing automation and CI/CD tools such as Jenkins, Docker, and Selenium to streamline testing, build, and deployment pipelines, increasing release cadence and quality.'
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
      'Oracle'
    ],
  },
  {
    title: 'Senior Software Engineer, Software Lead',
    company: 'Carro & DZHI',
    duration: 'May 2019 - June 2023',
    achievements: [
      'Spearheaded the design and development of scalable financing, trading, and e-commerce platforms using React, Next.js, PHP, and MySQL, driving enhanced user experience and business growth.',
      'Architected modular and maintainable application structures, significantly boosting development efficiency and simplifying long-term maintenance.',
      'Led, mentored, and collaborated with a cross-functional team of engineers and product owners to ensure alignment of technical deliverables with strategic business objectives.',
      'Developed and maintained a comprehensive library of reusable UI components, accelerating front-end development cycles and ensuring consistency across diverse user interfaces.',
      'Conducted code reviews and orchestrated seamless deployments to production environments, improving software reliability and release velocity.',
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
      'Integrated front-end applications seamlessly with robust server-side environments built on Java Spring, ensuring high performance, scalability, and reliability.',
      'Implemented cloud-native solutions leveraging Google Cloud services to enhance application scalability and support disaster recovery strategies.',
      'Enhanced database interactions and optimized queries with MS SQL Server, contributing to improved data retrieval times and system responsiveness.',
      'Advocated for and adopted modern front-end frameworks to modernize the tech stack and improve developer productivity.'
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
      'StyledComponent'
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Merkle Commerce Solutions',
    duration: 'Jan 2014 - June 2016',
    achievements: [
      'Developed responsive web and mobile applications utilizing JavaScript, AngularJS, PhoneGap, Bootstrap, and jQuery to deliver seamless user experiences across multiple platforms.',
      'Integrated various third-party payment gateways including PayPal, NaverPay, and WeChatPay, ensuring secure, efficient, and compliant transaction processing for diverse markets.',
      'Collaborated closely with cross-functional teams to design user-friendly interfaces that enhanced customer engagement and satisfaction.',
      'Contributed to backend development and system integration using Java and PHP, supporting scalable and maintainable solutions.',
      'Participated in code reviews and troubleshooting efforts, improving application stability and performance.'
    ],
    skills: [
      'JavaScript',
      'jQuery',
      'EmberJS',
      'AngularJS',
      'PhoneGap',
      'Ionic',
      'Java',
      'PHP',
      'Node.js',
      'C#',
      'Ruby On Rails',
      'SQL Server',
      'MongoDB'
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

export const techStack: Record<string, ITechStackCategory> = {
  'Software Design': {
    icon: '⚙️',
    technologies: [
      'Event-Driven Architecture',
      'Microservices Architecture',
      'MVC Model',
      'CQRS',
      'ACID',
      'Event Sourcing',
      'API Gateway Pattern',
      'Message queue',
    ],
  },
  Backend: {
    icon: '🤖',
    technologies: [
      'Node.js',
      'ExpressJS',
      '.NET',
      'C#',
      'ASP',
      'Java Spring',
      'Python',
      'PHP',
    ],
  },
  Frontend: {
    icon: '🎨',
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'TypeScript',
      'Tailwind',
      'StyledComponents',
      'HTML/CSS',
      'Figma',
    ],
  },
  'Cloud & Services': {
    icon: '☁️',
    technologies: [
      'Service Bus',
      'AWS',
      'Google Cloud',
      'Firebase',
      'Apache Kafka',
      'REST APIs',
    ],
  },
  Database: {
    icon: '🗄️',
    technologies: ['MongoDB', 'Microsoft SQL Server', 'Oracle', 'MySQL'],
  },
  Test: {
    icon: '🧪',
    technologies: [
      'TDD',
      'BDD',
      'Jest',
      'Cucumber',
      'Unit Testing',
      'Integration Testing',
      'Automation Testing',
      'Selenium',
    ],
  },
  'DevOps & Tools': {
    icon: '🛠️',
    technologies: ['Docker', 'CI/CD', 'Jenkins', 'Gitflow', 'Selenium'],
  },
  'Project Management': {
    icon: '📋',
    technologies: ['Jira', 'Confluence', 'Agile', 'Scrum'],
  },
};

export const summary = {
  first: `Innovative Senior Software Engineer specializing in enterprise software architecture with expertise in microservices design & solutions, cloud services, REST APIs, and distributed systems. Proficient in .NET/C#, ASP.NET Core, React/TypeScript with advanced state management, and relational database design with ACID transaction management.`,
  second: `Recognized for architecting scalable microservices solutions, implementing robust API gateways, and delivering high-performance applications across aviation, fintech, and e-commerce domains. Passionate about driving technical excellence through modern architectural patterns and mentoring engineering teams.`,
  third:
    'Actively contributes to the software community through open-source projects and stays at the forefront of emerging technologies including AI-assisted development practices.',
};
