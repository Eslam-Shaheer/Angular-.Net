export interface IProduct {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  categoryID: number;
  description: string;
  matrial?: string;
  quantity?: number;
}
