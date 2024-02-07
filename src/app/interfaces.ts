export interface Products {
    id: string;
    title: string;
    description: string;
    featuredImage: {
        id: string;
        url: string;
    };
    variants: {
        price: {
        amount: number;
        currencyCode: string;
        };
    }[];
}
