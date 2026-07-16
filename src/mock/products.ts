export interface ProductFeature {
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  overview: string;
  features: ProductFeature[];
  benefits: string[];
  pricing: PricingTier[];
}

export const products: ProductData[] = [
  {
    id: "school-erp",
    name: "Cognexa School ERP",
    tagline: "Unifying Academics, Administration, and Operations in One AI-Powered Suite",
    category: "EdTech & Operations",
    overview: "A comprehensive, cloud-native administration and academic platform designed for modern K-12 schools and higher education institutes. Handles student records, fee collection, grade sheets, class schedules, and parent communication natively.",
    features: [
      { title: "Smart Fee Management", description: "Automated billing, dynamic fee structures, online payments, and instant receipts." },
      { title: "AI-Powered Timetable Scheduler", description: "Conflict-free schedule generation for classrooms, teachers, and labs." },
      { title: "Parent-Teacher-Student Portal", description: "Integrated dashboard for real-time tracking of attendance, grades, and homework." }
    ],
    benefits: [
      "Reduces administrative manual work by up to 60%.",
      "Increases transparency in fee collection and financial ledger reports.",
      "Improves student performance tracking through automated grading insights."
    ],
    pricing: [
      { name: "Starter", price: "$99", period: "/month", features: ["Up to 250 students", "Fee management", "Basic report cards", "Parent app access"] },
      { name: "Enterprise", price: "$299", period: "/month", features: ["Unlimited students", "AI Timetable builder", "Advanced exam reports", "Bus tracking integration", "24/7 dedicated support"], isPopular: true }
    ]
  },
  {
    id: "pim",
    name: "Cognexa PIM",
    tagline: "Centralize, Enrich, and Syndicate Your Product Information Anywhere",
    category: "Commerce Technology",
    overview: "An enterprise Product Information Management (PIM) system designed to centralize product data, manage media, enrich technical specifications, and syndicate lists to Shopify, WooCommerce, Amazon, and retail distributors.",
    features: [
      { title: "Multi-channel Syndication", description: "Push accurate, formatted product catalogs to leading e-commerce platforms with one click." },
      { title: "Asset Management (DAM)", description: "Central repository for product images, high-definition videos, user manuals, and technical PDFs." },
      { title: "Data Enrichment Workflows", description: "Assign roles, set enrichment milestones, and track status indicators of products." }
    ],
    benefits: [
      "Accelerates time-to-market for new products by 3x.",
      "Ensures product data consistency across all digital sales touchpoints.",
      "Simplifies translation and localization for international markets."
    ],
    pricing: [
      { name: "Scale", price: "$199", period: "/month", features: ["Up to 10,000 SKUs", "Shopify & WooCommerce integrations", "Digital Asset Manager", "Email support"] },
      { name: "Ultimate", price: "$499", period: "/month", features: ["Unlimited SKUs", "All marketplaces integrations", "Advanced AI descriptions translator", "Dedicated account manager"], isPopular: true }
    ]
  },
  {
    id: "inventory",
    name: "Cognexa Inventory",
    tagline: "Real-time Multi-Warehouse Inventory & Order Fulfillment",
    category: "Supply Chain",
    overview: "A multi-tenant, secure inventory manager tracking stock levels, batch numbers, serial codes, orders, returns, and suppliers across multiple warehouses with auto-reorder points and demand forecasting.",
    features: [
      { title: "Multi-Warehouse Management", description: "Transfer stock, track locations, and fulfill orders from the closest facility." },
      { title: "Barcoding & Batch Scanning", description: "Mobile-first barcode scanning for rapid picking, packing, and sorting." },
      { title: "AI Reorder Forecasting", description: "Predict future stock requirements based on historical seasonal trends." }
    ],
    benefits: [
      "Prevents costly stockouts and overstock scenarios.",
      "Optimizes warehouse shelf configurations and picker pathways.",
      "Reduces order processing times and logistics delivery friction."
    ],
    pricing: [
      { name: "Professional", price: "$149", period: "/month", features: ["Up to 3 warehouses", "Real-time barcode scanning", "Auto-reorder triggers", "2,500 monthly orders"] },
      { name: "Enterprise Custom", price: "Custom", period: "", features: ["Unlimited warehouses", "Custom ERP integrations", "AI demand forecasting", "Dedicated account manager"], isPopular: true }
    ]
  },
  {
    id: "crm",
    name: "Cognexa CRM",
    tagline: "Empower Your Sales Team to Close Deals Faster",
    category: "Sales & Marketing",
    overview: "A modern, collaborative CRM to manage leads, orchestrate deal pipelines, automate follow-up cadences, and review sales analytics to accelerate conversion rates.",
    features: [
      { title: "Visual Pipeline Builder", description: "Drag-and-drop deals across sales stages. Trigger automation rules on transition." },
      { title: "Email & Calendar Sync", description: "Track discussions, log meetings, and share calendar invites directly inside the CRM." },
      { title: "AI Conversion Assistant", description: "Score leads based on activity, suggesting optimal contact times and script tips." }
    ],
    benefits: [
      "Boosts lead conversion rates by up to 25%.",
      "Saves sales reps hours by automating repetitive status updates.",
      "Provides clear sales projection charts for leadership decision-making."
    ],
    pricing: [
      { name: "Growth", price: "$49", period: "/user/month", features: ["Visual pipeline", "Email synchronization", "Mobile app", "Basic analytics"] },
      { name: "Elite", price: "$99", period: "/user/month", features: ["AI Lead scoring", "Advanced workflow automation", "Custom fields & reports", "Priority API access"], isPopular: true }
    ]
  },
  {
    id: "hrms",
    name: "Cognexa HRMS",
    tagline: "Automate Employee Cycles from Recruitment to Payroll",
    category: "Operations & HR",
    overview: "An end-to-end human resource management system featuring employee directories, biometric attendance hooks, payroll processors, leave workflows, and performance evaluations.",
    features: [
      { title: "Payroll Engine", description: "Compute base salary, bonuses, deductions, taxes, and generate payslips automatically." },
      { title: "Biometric Attendance Sync", description: "Connect cloud attendance hardware or app geofencing to log employee clock-ins." },
      { title: "Performance Reviews", description: "Facilitate 360-degree reviews, track KPIs, and manage career progression charts." }
    ],
    benefits: [
      "Ensures zero compliance payroll processing.",
      "Reduces HR team overheads by enabling employee self-service panels.",
      "Minimizes clock-in errors and timesheet manipulation."
    ],
    pricing: [
      { name: "Core HR", price: "$5", period: "/employee/month", features: ["Directory & profile management", "Leave requests", "Basic reporting"] },
      { name: "Full Suite", price: "$9", period: "/employee/month", features: ["Biometric payroll engine", "360 performance reviews", "Applicant tracking system", "Priority support"], isPopular: true }
    ]
  },
  {
    id: "lms",
    name: "Cognexa LMS",
    tagline: "Scale Corporate Training and Academic Curriculum Online",
    category: "EdTech & Operations",
    overview: "A feature-rich Learning Management System offering video lectures, interactive quizzes, student progress analytics, certificates manager, and live webinar integrations.",
    features: [
      { title: "Interactive Player", description: "Seamless playback for video lectures, downloadable slides, code playgrounds, and PDFs." },
      { title: "Automated Quiz Engine", description: "Generate random quiz pools, specify passing grades, and issue digital certificates." },
      { title: "Cohort Analytics", description: "Monitor graduation rates, course dropouts, test scores, and average time-to-completion." }
    ],
    benefits: [
      "Enables consistent employee onboarding and compliance training.",
      "Monetizes professional courses through built-in Stripe checkouts.",
      "Enhances online learning outcomes using gamified metrics."
    ],
    pricing: [
      { name: "Instructor", price: "$79", period: "/month", features: ["Up to 100 students", "Unlimited courses", "Interactive quizzes", "Stripe payment gate"] },
      { name: "Organization", price: "$249", period: "/month", features: ["Unlimited students", "White-label branding", "API integrations", "Multi-tenant sub-academies", "Dedicated support"], isPopular: true }
    ]
  },
  {
    id: "hospital-erp",
    name: "Cognexa Hospital ERP",
    tagline: "Streamline Patient Care, Clinical Workflows, and Ward Logistics",
    category: "Healthcare",
    overview: "A highly secure, HIPAA-compliant clinical administration suite linking patient registration, electronic health records (EHR), OPD/IPD queues, billing, and lab report management.",
    features: [
      { title: "EHR Management", description: "Comprehensive electronic health records tracking vitals, past diagnoses, prescriptions, and allergies." },
      { title: "IPD/OPD Queue Management", description: "Manage doctor appointments, emergency ward check-ins, and operating room bookings." },
      { title: "Pharmacy & Lab Syndicate", description: "Direct prescription routing to the pharmacy and diagnostic reports uploads." }
    ],
    benefits: [
      "Improves patient care speed and safety through digital health records.",
      "Reduces waiting times in clinics via intelligent appointment queues.",
      "Ensures transparent pricing and quick discharge billing."
    ],
    pricing: [
      { name: "Clinic Plan", price: "$149", period: "/month", features: ["Up to 5 doctors", "Unlimited EHR files", "Prescription builder", "SMS reminders"] },
      { name: "Hospital Enterprise", price: "Custom", period: "", features: ["Unlimited doctors/departments", "Ward & OT management", "HL7/FHIR integrations", "Dedicated database instance"], isPopular: true }
    ]
  },
  {
    id: "restaurant-erp",
    name: "Cognexa Restaurant ERP",
    tagline: "Intelligent Point of Sale (POS) and Kitchen Coordination",
    category: "Hospitality & Retail",
    overview: "A high-speed, modern POS dashboard matching kitchen display systems (KDS), waiter tablets, QR code tableside ordering, and inventory stock tracking.",
    features: [
      { title: "Waiter App & POS Touch", description: "Fast ticket entry with modifiers, split-billing, and instant receipt printer links." },
      { title: "Kitchen Display (KDS)", description: "Direct routing of orders to prep stations with timers and completion alerts." },
      { title: "Recipe Inventory Costing", description: "Deduct raw ingredients as items sell to estimate exact recipe margins." }
    ],
    benefits: [
      "Eliminates miscommunicated order slips between waitstaff and kitchen.",
      "Increases table turnover rates via tableside QR code checkout options.",
      "Provides real-time visibility into wastage and inventory margins."
    ],
    pricing: [
      { name: "Single POS", price: "$59", period: "/month", features: ["1 terminal", "Digital menu builder", "Sales reports", "Email support"] },
      { name: "Multi-Terminal Pro", price: "$129", period: "/month", features: ["Unlimited terminals", "Kitchen Display software", "Ingredient cost analysis", "Customer loyalty module"], isPopular: true }
    ]
  },
  {
    id: "construction-erp",
    name: "Cognexa Construction ERP",
    tagline: "Track Site Milestones, Equipment Logistics, and Subcontractor Audits",
    category: "Industrial & Construction",
    overview: "A specialized project administration engine for construction projects, checking daily labor logs, materials consumption, machinery dispatch, and progress milestones.",
    features: [
      { title: "Daily Work Reports", description: "Site supervisors log workers, weather issues, activities completed, and upload photos." },
      { title: "Material Indent & Dispatch", description: "Track requests for concrete, steel, pipes from purchase orders to site delivery." },
      { title: "Subcontractor Ledger", description: "Record contracted values, milestones completed, bills certified, and retention funds." }
    ],
    benefits: [
      "Reduces project delays by flagging material shortages early.",
      "Provides complete audit trails for subcontractor billing certification.",
      "Syncs field logs with head office finance departments."
    ],
    pricing: [
      { name: "Project Scale", price: "$199", period: "/month", features: ["Up to 3 active sites", "Material tracking", "Labor sheets", "Unlimited users"] },
      { name: "Enterprise Build", price: "$499", period: "/month", features: ["Unlimited active sites", "Machinery scheduling", "Custom contract templates", "Integrates with accounting", "24/7 Support"], isPopular: true }
    ]
  },
  {
    id: "ai-job-platform",
    name: "Cognexa AI Recruit",
    tagline: "Automate Talent Matching with Semantic Resume Sifting",
    category: "AI & Talent Technologies",
    overview: "An advanced applicant screening platform using semantic search to score resume databases, run automatic technical screening, and match candidate capabilities to job requirement lists.",
    features: [
      { title: "Semantic Parsing Engine", description: "Parses complex resumes without relying on simple keywords. Recognizes equivalent skills." },
      { title: "AI Screener Interview", description: "Triggers interactive conversational questionnaires to assess skill alignment." },
      { title: "Smart Ranking Dashboard", description: "Rank candidate applications dynamically based on relevance, experience, and certifications." }
    ],
    benefits: [
      "Cuts down screening times from weeks to minutes.",
      "Discovers hidden talent by focusing on capabilities rather than formatting keywords.",
      "Reduces hiring cost-per-candidate while maximizing quality of hires."
    ],
    pricing: [
      { name: "Talent Recruiter", price: "$99", period: "/month", features: ["Up to 5 active jobs", "Semantic resume parsing", "Email templates", "Standard screening"] },
      { name: "Enterprise Match", price: "$299", period: "/month", features: ["Unlimited jobs", "AI Screener interviews", "Custom screening prompts", "ATS APIs integration", "Dedicated team support"], isPopular: true }
    ]
  }
];
