export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}

export interface DemoRequest {
  name: string;
  email: string;
  phone: string;
  product: string;
  companyName?: string;
}

export class ContactService {
  static async submitContactForm(data: ContactSubmission): Promise<{ success: boolean; message: string }> {
    // If Web3Forms or Formspree is used, we'd make a fetch request here:
    // fetch('https://api.web3forms.com/submit', { method: 'POST', ... })
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Contact form submitted successfully:", data);
        resolve({
          success: true,
          message: "Thank you for contacting Cognexa. We will respond to your inquiry shortly."
        });
      }, 600);
    });
  }

  static async submitDemoRequest(data: DemoRequest): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Demo request submitted successfully:", data);
        resolve({
          success: true,
          message: `Your demo booking request for ${data.product} has been registered.`
        });
      }, 600);
    });
  }
}
