export interface Product{
    img:string;
    event:string | null;
    title:string;
    category:number;
    price:number;
    prevPrice:number;
    company:string;
    rating:number;
    inCart:boolean;
}