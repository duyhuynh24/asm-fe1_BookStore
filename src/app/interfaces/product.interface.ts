export interface IProduct {
    id: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    categoryId?: number;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
  }
  