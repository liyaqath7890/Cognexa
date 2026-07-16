import { products, ProductData } from '@/mock/products';

export class ProductService {
  static async getAllProducts(): Promise<ProductData[]> {
    // Simulate minor network latency
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 100);
    });
  }

  static async getProductById(id: string): Promise<ProductData | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = products.find(p => p.id === id);
        resolve(item);
      }, 100);
    });
  }
}
