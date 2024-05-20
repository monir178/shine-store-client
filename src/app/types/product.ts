
export interface IProduct {
    _id: string;
    title: string;
    price: number;
    ratings: number;
    brand: string;
    category: string;
    flashSale: boolean;
    description: string;
    img: string;
    createdAt: Date;
}
