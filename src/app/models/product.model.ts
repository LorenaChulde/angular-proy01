import { CategoryModel } from "./category.model";

interface ProductModel{
    id:number;
    title:string;
    price:number;
    description:string;
    category:CategoryModel;
    images:string[];
}
