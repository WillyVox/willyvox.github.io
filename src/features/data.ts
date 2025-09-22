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
      'Architected and developed aircraft simulation applications using React, Electron, TypeScript, Redux, Node.js, Tailwind, .NET, Java Spring, Selenium, Jenkins, Docker and REST APIs',
      'Integrated REST APIs and Protocol Buffers for seamless data exchange and enhanced application performance',
      'Engineered reusable modules and components, reducing development time by 20% and improving code maintainability',
      'Configured and deployed applications across multiple platforms, ensuring compatibility and operational reliability',
    ],
    skills: [
      'React',
      'Electron',
      'TypeScript',
      'Redux',
      'Node.js',
      '.NET',
      'Java Spring',
      'Docker',
      'Jenkins',
      'REST APIs',
    ],
  },
  {
    title: 'Senior Software Engineer, Software Lead',
    company: 'Carro',
    duration: 'May 2019 - June 2023',
    achievements: [
      'Designed and developed financing, trading and e-commerce applications using React, Next.js, PHP, and MySQL',
      'Initialized modular app architectures, improving development efficiency and maintainability',
      'Led a team of engineers, mentoring developers and collaborating with product owners to align deliverables with business goals',
      'Built reusable UI components, streamlining front-end development and ensuring consistent user experiences',
      'Conducted code reviews to enforce quality standards and deployed applications to production environments',
    ],
    skills: [
      'React',
      'Next.js',
      'Redux',
      'Apollo GraphQL',
      'JavaScript',
      'PHP',
      'Python',
      'MySQL',
    ],
  },
  {
    title: 'Senior Software Developer',
    company: 'Allianz Technology',
    duration: 'July 2016 - May 2019',
    achievements: [
      'Developed insurance and financing applications for web and mobile platforms, enhancing user accessibility and engagement',
      'Designed and implemented shared components, features, and libraries, reducing redundancy and accelerating development cycles',
      'Integrated web applications with server-side environments, ensuring robust performance and scalability',
    ],
    skills: [
      'React',
      'TypeScript',
      'Redux',
      'Angular 4',
      'Java Spring',
      'Google Cloud',
      'MS SQL Server',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Merkle Commerce Solutions',
    duration: 'Jan 2014 - June 2016',
    achievements: [
      'Built web and mobile applications using JavaScript, AngularJS, PhoneGap, Bootstrap, and jQuery',
      'Integrated third-party payment gateways (PayPal, NaverPay, WeChatPay), enabling secure and efficient transaction processing',
      'Delivered responsive and user-friendly interfaces across multiple platforms',
    ],
    skills: [
      'JavaScript',
      'EmberJS',
      'PhoneGap',
      'Ionic',
      'AngularJS',
      'jQuery',
      'Java',
      'PHP',
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
    link: 'https://captain.carro.sg/',
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
  'Software Architectural Pattern': {
    icon: '⚙️',
    color: 'fuchsia',
    technologies: ['Microservices', 'AI-driven Development', 'RESTful APIs'],
  },
  Backend: {
    icon: '🤖',
    color: 'red',
    technologies: ['Node.js', 'ExpressJS', '.NET', 'C#', 'Java Spring'],
  },
  Frontend: {
    icon: '🎨',
    color: 'blue',
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'TypeScript',
      'Tailwind',
      'HTML/CSS',
    ],
  },
  'API Getway & Cloud': {
    icon: '☁️',
    color: 'purple',
    technologies: [
      'Service Bus',
      'MongoDB',
      'SQL Server',
      'AWS',
      'Google Cloud',
      'Firebase',
      'Apache Kafka',
    ],
  },
  'Database & Cloud': {
    icon: '☁️',
    color: 'purple',
    technologies: [
      'Service Bus',
      'MongoDB',
      'SQL Server',
      'AWS',
      'Google Cloud',
      'Firebase',
      'Apache Kafka',
    ],
  },
  'DevOps & Tools': {
    icon: '🛠️',
    color: 'violet',
    technologies: ['Docker', 'CI/CD', 'Jenkins', 'Gitflow', 'Selenium'],
  },
  'Project Management': {
    icon: '📋',
    color: 'pink',
    technologies: ['Jira', 'Confluence', 'Agile', 'Scrum'],
  },
};

export const summary = {
  first:
    'Senior Software Engineer specializing in full-stack development with deep expertise spanning React, TypeScript, .NET, Java Spring, and modern cloud architectures. Successfully delivered enterprise-grade applications for aviation, fintech, and e-commerce domains, consistently improving system performance and developer productivity.',
  second:
    'Recognized for building scalable microservices architectures, implementing CI/CD pipelines, containerizing with Docker, automated testing flows such as TDD, BDD, and AI-driven development workflows. Passionate about mentoring engineering teams, driving technical excellence, and leveraging cutting-edge technologies to deliver exceptional user experiences and business value.',
  third:
    'Actively contributes to the software community through open-source projects and stays at the forefront of emerging technologies including AI-assisted development practices.',
};
