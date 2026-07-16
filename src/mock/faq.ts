export interface FAQItem {
  id: string;
  category: "General" | "Products" | "Academy" | "Internships";
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Cognexa Technologies?",
    answer: "Cognexa Technologies is a premium global tech enterprise focusing on SaaS systems development, AI/ML engineering research, software education, and campus innovation incubation."
  },
  {
    id: "faq-2",
    category: "Products",
    question: "How do I book a demo for the School ERP or PIM systems?",
    answer: "You can click on the 'Request Demo' button on the Products page. It will redirect you to our scheduling form, and a Product Specialist will contact you within 24 hours."
  },
  {
    id: "faq-3",
    category: "Academy",
    question: "Are the academy certificates industry recognized?",
    answer: "Yes. Cognexa certificates are ISO certified, secure, and verifiably signed by tech directors. They are recognized across leading tech recruiters globally."
  },
  {
    id: "faq-4",
    category: "Internships",
    question: "What is the application process for the virtual/hybrid internships?",
    answer: "Submit your application using the 'Apply Now' form. Our academic panel will evaluate your resume, GitHub profile, and basic tech alignment, after which an interview schedule is shared."
  }
];
