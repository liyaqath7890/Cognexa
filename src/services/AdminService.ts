export interface AdminTelemetry {
  totalStudents: number;
  totalMentors: number;
  activeCourses: number;
  monthlyRevenue: string;
  uptimeRate: string;
}

export interface PaymentLog {
  invoiceId: string;
  studentName: string;
  courseTitle: string;
  amount: string;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

export class AdminService {
  static async getTelemetry(): Promise<AdminTelemetry> {
    return {
      totalStudents: 3820,
      totalMentors: 42,
      activeCourses: 12,
      monthlyRevenue: "$48,950",
      uptimeRate: "99.98%"
    };
  }

  static async getPaymentsHistory(): Promise<PaymentLog[]> {
    return [
      { invoiceId: "INV-2901", studentName: "Riya Sen", courseTitle: "Full Stack Development with MERN", amount: "$299", status: "Completed", date: "July 14, 2026" },
      { invoiceId: "INV-2902", studentName: "Dev Patel", courseTitle: "Artificial Intelligence & Applied ML", amount: "$399", status: "Completed", date: "July 12, 2026" },
      { invoiceId: "INV-2903", studentName: "Zoe Miller", courseTitle: "React 19 & Next.js Deep Dive", amount: "$199", status: "Pending", date: "July 15, 2026" }
    ];
  }
}
