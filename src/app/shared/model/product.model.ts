export interface Product{
    id:number,
    name:string,
    logo:string,
    price:number,
    discount:number,
    isFavourite?:boolean,
    isSelected?:boolean
}