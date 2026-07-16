export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface CourseData {
  id: string;
  title: string;
  mentor: string;
  mentorTitle: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  rating: number;
  studentsCount: number;
  description: string;
  certificate: string;
  technologies: string[];
  curriculum: CourseModule[];
}

export const courses: CourseData[] = [
  {
    id: "mern-stack",
    title: "MERN Stack",
    mentor: "Dr. Aryan Sharma",
    mentorTitle: "Senior Architect & Ex-Google Eng",
    duration: "16 Weeks",
    level: "Intermediate",
    rating: 4.9,
    studentsCount: 1850,
    description: "Master MongoDB, Express, React, and Node.js. Build fully modular, secure, and production-ready applications from scratch, deploying to AWS.",
    certificate: "Cognexa Certified MERN Stack Developer (Industry Grade)",
    technologies: ["React", "NodeJS", "Express", "MongoDB", "TypeScript"],
    curriculum: [
      { title: "React Frontend core", duration: "4 Weeks", topics: ["React Hooks", "Context API & Zustand", "Vite configurations"] },
      { title: "Backend API endpoints", duration: "4 Weeks", topics: ["REST MVC Architecture", "JWT auth", "Middlewares"] },
      { title: "MongoDB indexing", duration: "4 Weeks", topics: ["Mongoose models", "Complex Aggregations", "Transactions"] }
    ]
  },
  {
    id: "java-full-stack",
    title: "Java Full Stack",
    mentor: "Vikram Malhotra",
    mentorTitle: "Director of Backend Systems",
    duration: "20 Weeks",
    level: "Advanced",
    rating: 4.8,
    studentsCount: 1200,
    description: "Architect secure enterprise pipelines using Java OOP core paradigms, Spring Boot microservices, and React dashboard interfaces.",
    certificate: "Cognexa Enterprise Java Systems Architect",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    curriculum: [
      { title: "Java OOP paradigms", duration: "6 Weeks", topics: ["Multithreading", "Streams", "Memory architecture"] },
      { title: "Spring Core microservices", duration: "8 Weeks", topics: ["Spring Security", "JPA Hibernate", "gRPC brokers"] }
    ]
  },
  {
    id: "react",
    title: "React",
    mentor: "Liam Chen",
    mentorTitle: "Staff UI Engineer",
    duration: "8 Weeks",
    level: "Advanced",
    rating: 4.9,
    studentsCount: 1540,
    description: "Dive deep into the virtual DOM, React 19 compiler features, Server Actions, Suspense hooks, and custom springs animations.",
    certificate: "Cognexa Certified React Specialist",
    technologies: ["React 19", "Next.js", "Zustand", "Framer Motion"],
    curriculum: [
      { title: "RSC & Server Actions", duration: "4 Weeks", topics: ["Server vs Client components", "useActionState", "Optimistic updates"] }
    ]
  },
  {
    id: "nodejs",
    title: "Node.js",
    mentor: "Vikram Malhotra",
    mentorTitle: "Director of Backend Systems",
    duration: "8 Weeks",
    level: "Advanced",
    rating: 4.7,
    studentsCount: 940,
    description: "Build robust, asynchronous backend services. Understand the event loop internals, worker threads, clusters, and streams.",
    certificate: "Cognexa Backend Engineer (NodeJS)",
    technologies: ["NodeJS", "V8 Engine", "Clusters", "Buffers", "Streams"],
    curriculum: [
      { title: "Event Loop & CPU tasks", duration: "4 Weeks", topics: ["Macro/Microtasks queue", "Worker threads pools", "Streams pipeline"] }
    ]
  },
  {
    id: "expressjs",
    title: "Express.js",
    mentor: "Dr. Aryan Sharma",
    mentorTitle: "Senior Architect",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.6,
    studentsCount: 880,
    description: "Configure RESTful APIs with clean router layers, centralized validation rules, error handling modules, and CORS compliance.",
    certificate: "Cognexa Certified Express API Developer",
    technologies: ["Express.js", "NodeJS", "RESTful Architecture", "JSON Schema"],
    curriculum: [
      { title: "Centralized Error Shells", duration: "3 Weeks", topics: ["Error handling middleware", "Express Router validation", "CORS specs"] }
    ]
  },
  {
    id: "mongodb",
    title: "MongoDB",
    mentor: "Dr. Aryan Sharma",
    mentorTitle: "Senior Architect",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.7,
    studentsCount: 1100,
    description: "Manage non-relational database structures. Structure complex collections, run aggregation pipelines, and configure replica shards.",
    certificate: "Cognexa Certified NoSQL Database Administrator",
    technologies: ["MongoDB", "Mongoose ORM", "Replica sets", "Sharding"],
    curriculum: [
      { title: "Aggregation Pipelines", duration: "3 Weeks", topics: ["$match & $group operators", "$lookup relations", "Aggregation indexes"] }
    ]
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    mentor: "Sarah Jenkins",
    mentorTitle: "Principal DB Architect",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.8,
    studentsCount: 780,
    description: "Master relational schemas, transaction isolation levels, PostgreSQL indexing keys, joins tuning, and Prism migrations logs.",
    certificate: "Cognexa Verified Relational Systems Architect",
    technologies: ["PostgreSQL", "Prisma ORM", "SQL Joins", "Indexes Tuning"],
    curriculum: [
      { title: "Transactions & Isolation", duration: "3 Weeks", topics: ["ACID compliance", "Write-Ahead Logs", "Explain Analyze metrics"] }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript",
    mentor: "Liam Chen",
    mentorTitle: "Staff UI Engineer",
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.5,
    studentsCount: 2200,
    description: "Master absolute core programming primitives: ES6 syntax, asynchronous Promises, DOM selectors, event listeners, and closures.",
    certificate: "Cognexa Verified JavaScript Developer",
    technologies: ["JavaScript ES6+", "Promises", "Fetch API", "DOM selectors"],
    curriculum: [
      { title: "Asynchronous Flow", duration: "3 Weeks", topics: ["Callback queues", "Promises & async/await", "Fetch requests"] }
    ]
  },
  {
    id: "typescript",
    title: "TypeScript",
    mentor: "Sarah Jenkins",
    mentorTitle: "Principal DB Architect",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.9,
    studentsCount: 1350,
    description: "Write type-safe, maintainable, and self-documenting code. Learn advanced TypeScript: Generics, Mapped types, and strict configs.",
    certificate: "Cognexa Verified TypeScript Expert",
    technologies: ["TypeScript", "Generics", "Type guards", "Mapped Types"],
    curriculum: [
      { title: "Generics & Mapped Types", duration: "3 Weeks", topics: ["Generic utility builders", "Conditional typing", "Strict compiler rules"] }
    ]
  },
  {
    id: "java",
    title: "Java",
    mentor: "Vikram Malhotra",
    mentorTitle: "Director of Backend Systems",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4.7,
    studentsCount: 1600,
    description: "Understand object-oriented programming paradigms, custom exception logs, collection lists, and functional java stream filters.",
    certificate: "Cognexa Verified Java Programmer",
    technologies: ["Java OOP", "Collections", "Exception handling", "Streams API"],
    curriculum: [
      { title: "Java OOP & Collections", duration: "4 Weeks", topics: ["Inheritance & interface", "HashMaps & List arrays", "Stream APIs"] }
    ]
  },
  {
    id: "python",
    title: "Python",
    mentor: "Dr. Aryan Sharma",
    mentorTitle: "Chief Architect",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4.8,
    studentsCount: 1950,
    description: "Learn Python script configurations. Master variables, file structure loops, dictionaries, algorithms, and core data structures.",
    certificate: "Cognexa Verified Python Specialist",
    technologies: ["Python", "Algorithms", "File loops", "Data structures"],
    curriculum: [
      { title: "Core Scripts & loops", duration: "4 Weeks", topics: ["Lists & dictionaries", "CSV file automation", "Asynchronous functions"] }
    ]
  },
  {
    id: "software-testing",
    title: "Software Testing",
    mentor: "Sophia Martinez",
    mentorTitle: "Lead Quality Architect",
    duration: "10 Weeks",
    level: "Beginner",
    rating: 4.6,
    studentsCount: 1400,
    description: "Understand software delivery life cycle (SDLC), test case planning, bug reporting structures, and user acceptance matrix.",
    certificate: "Cognexa Certified Quality Assurance Specialist",
    technologies: ["Testing concepts", "SDLC", "Jira bug tracking", "Test plans"],
    curriculum: [
      { title: "Test Case Designs", duration: "5 Weeks", topics: ["Boundary value analysis", "Jira bug logs", "UAT signoff matrix"] }
    ]
  },
  {
    id: "manual-testing",
    title: "Manual Testing",
    mentor: "Sophia Martinez",
    mentorTitle: "Lead Quality Architect",
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.5,
    studentsCount: 920,
    description: "Learn systematic black-box testing methodologies. Author test specifications and verify functional validation matrices manually.",
    certificate: "Cognexa Verified Manual Test Engineer",
    technologies: ["Blackbox testing", "Functional testing", "Defect logging"],
    curriculum: [
      { title: "Functional Checks", duration: "3 Weeks", topics: ["Equivalence partitioning", "Defect logs creation", "Regression lists"] }
    ]
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    mentor: "Sophia Martinez",
    mentorTitle: "Lead Quality Architect",
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.8,
    studentsCount: 1050,
    description: "Automate browser interactions. Author test suites using Selenium WebDriver, Playwright, and Cypress page object modules.",
    certificate: "Cognexa Certified Test Automation Architect",
    technologies: ["Selenium", "Playwright", "Cypress", "Page Object Model"],
    curriculum: [
      { title: "Playwright Automation", duration: "4 Weeks", topics: ["Selector matching rules", "Assertions logs", "Parallel test runs"] }
    ]
  },
  {
    id: "git-github",
    title: "Git & GitHub",
    mentor: "Liam Chen",
    mentorTitle: "Staff UI Engineer",
    duration: "4 Weeks",
    level: "Beginner",
    rating: 4.7,
    studentsCount: 1750,
    description: "Master pull request workflows, branch merges conflict resolution, git rebase structures, and GitHub Actions triggers.",
    certificate: "Cognexa Certified Git Version Architect",
    technologies: ["Git commands", "GitHub Actions", "Pull Requests", "Rebasing"],
    curriculum: [
      { title: "Conflict Resolution", duration: "2 Weeks", topics: ["Interactive rebasing", "Merge conflicts resolution", "GitHub branch rules"] }
    ]
  },
  {
    id: "docker",
    title: "Docker",
    mentor: "Vikram Malhotra",
    mentorTitle: "Director of Backend Systems",
    duration: "4 Weeks",
    level: "Intermediate",
    rating: 4.8,
    studentsCount: 1300,
    description: "Containerize web architectures. Author Dockerfiles, configure Docker Compose networks, and deploy isolated service images.",
    certificate: "Cognexa Verified Containers Engineer",
    technologies: ["Docker images", "Docker Compose", "Multi-stage builds"],
    curriculum: [
      { title: "Compose Orchestrations", duration: "2 Weeks", topics: ["Container networking", "Volume mount settings", "Multi-stage builds"] }
    ]
  },
  {
    id: "system-design",
    title: "System Design",
    mentor: "Dr. Aryan Sharma",
    mentorTitle: "Chief Systems Architect",
    duration: "10 Weeks",
    level: "Advanced",
    rating: 4.9,
    studentsCount: 1650,
    description: "Architect distributed systems. Master load balancers, database sharding, caching architectures, and rate limiters.",
    certificate: "Cognexa Master Systems Design Architect",
    technologies: ["High Level Design", "Low Level Design", "Load balancing", "Caching"],
    curriculum: [
      { title: "Distributed Scalings", duration: "5 Weeks", topics: ["Consistent Hashing", "Message brokers queue", "Database replication"] }
    ]
  },
  {
    id: "rest-apis",
    title: "REST APIs",
    mentor: "Dr. Aryan Sharma",
    mentorTitle: "Chief Systems Architect",
    duration: "4 Weeks",
    level: "Intermediate",
    rating: 4.7,
    studentsCount: 1400,
    description: "Design standard HTTP APIs. Structure status code mapping, configure token parameters, and write JSON schemas validations.",
    certificate: "Cognexa Certified API Architect",
    technologies: ["HTTP protocols", "REST paradigms", "JSON Schemas", "Endpoints design"],
    curriculum: [
      { title: "API Spec design", duration: "2 Weeks", topics: ["HTTP methods mapping", "Rate limiting rules", "Swagger documentation"] }
    ]
  },
  {
    id: "authentication",
    title: "Authentication",
    mentor: "Sarah Jenkins",
    mentorTitle: "Principal DB Architect",
    duration: "4 Weeks",
    level: "Intermediate",
    rating: 4.8,
    studentsCount: 950,
    description: "Secure database records. Configure JSON Web Tokens (JWT), session cookies, password salting, and OAuth2 authorization panels.",
    certificate: "Cognexa Certified Platform Security Architect",
    technologies: ["JWT", "OAuth2.0", "bcrypt hashing", "Cookies sessions"],
    curriculum: [
      { title: "Tokens Salting Logs", duration: "2 Weeks", topics: ["Access/Refresh token rotation", "bcrypt salt hashing", "Cors cookies settings"] }
    ]
  },
  {
    id: "deployment",
    title: "Deployment",
    mentor: "Vikram Malhotra",
    mentorTitle: "Director of Backend Systems",
    duration: "4 Weeks",
    level: "Intermediate",
    rating: 4.7,
    studentsCount: 890,
    description: "Configure production deployment pipelines. Learn Nginx reverse-proxies, AWS EC2 setups, and automated GitHub Actions scripts.",
    certificate: "Cognexa Certified Deployment Engineer",
    technologies: ["Nginx", "AWS EC2", "GitHub Actions CI/CD", "PM2 process"],
    curriculum: [
      { title: "CI/CD & Proxy configurations", duration: "2.5 Weeks", topics: ["Nginx block configurations", "PM2 process checks", "Actions automation scripts"] }
    ]
  },
  {
    id: "cloud-basics",
    title: "Cloud Basics",
    mentor: "Vikram Malhotra",
    mentorTitle: "Director of Backend Systems",
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.6,
    studentsCount: 1100,
    description: "Get started with cloud computing. Master AWS EC2 servers, S3 storage buckets, and IAM security access controls.",
    certificate: "Cognexa Cloud Fundamentals Certificate",
    technologies: ["AWS", "EC2", "S3 buckets", "IAM policies"],
    curriculum: [
      { title: "AWS Core Services", duration: "3 Weeks", topics: ["Virtual machines launch", "Bucket policy permissions", "CloudWatch alerts"] }
    ]
  }
];
