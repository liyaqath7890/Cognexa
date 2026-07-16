import { internships, InternshipTrack } from '@/mock/internships';

export class InternshipService {
  static async getAllInternships(): Promise<InternshipTrack[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(internships), 100);
    });
  }

  static async getInternshipById(id: string): Promise<InternshipTrack | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = internships.find(i => i.id === id);
        resolve(item);
      }, 100);
    });
  }
}
