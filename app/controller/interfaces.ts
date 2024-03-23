export interface User{
    id:number;
    nickname:string;
    email:string;
    password:string;
    city:string;
    zip:string;
    phone:string;
}

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
    category:string;
    title:string;
    read_len:number;
    views:number;
    date:string;
}

export interface CartItem{
    id:number;
    quantity:number;
    price:number;
}