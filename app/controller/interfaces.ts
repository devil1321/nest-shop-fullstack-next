export interface Product{
    id:number;
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

export interface Blog{
    id:number;
    img:string;
    describe:string;
    title:string;
    read_len:number;
    views:number;
    date:string;
}