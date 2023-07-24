import { Product } from "../product/product";

export interface Order {
    id: number;
    userId: number;
    products: Product[];
    totalAmount: number;
    date: Date;
    status: string;
}