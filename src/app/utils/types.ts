export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ICartProduct {
  productId: number;
  quantity: number;
}

export interface ICart {
  id: number;
  userId: number;
  date?: string;
  products: ICartProduct[];
}
