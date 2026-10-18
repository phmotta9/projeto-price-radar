export interface Product {
    id: number;
    name: string;
    store: string;
    category: string;
    currentPrice: number;
    previousPrice: number;
    targetPrice: number;
    isFavorite: boolean;
}