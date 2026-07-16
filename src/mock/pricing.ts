export interface PricePackage {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export const saasPricing: PricePackage[] = [
  {
    title: "Basic Operations",
    price: "$199",
    period: "/month",
    description: "Ideal for small schools or single-warehouse logistics teams starting up.",
    features: ["Core ERP access", "Up to 5 operator roles", "Email support within 48h", "Standard backups", "Basic analytics charts"],
    ctaText: "Get Started"
  },
  {
    title: "Enterprise Suite",
    price: "$499",
    period: "/month",
    description: "Best fit for growing organizations looking for AI optimization and scaling capabilities.",
    features: ["All SaaS platforms access", "Unlimited staff roles", "24/7 dedicated support SLA", "Hourly secure backups", "AI-enabled forecasting models", "API integration tokens"],
    ctaText: "Request Enterprise",
    popular: true
  }
];
