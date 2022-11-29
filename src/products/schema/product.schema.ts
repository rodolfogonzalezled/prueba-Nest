import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument  = HydratedDocument<Product>;

@Schema()
export class Product {

    @Prop({required:true})
    name:string;
    @Prop({required:true})
    price:string;
    @Prop({required:true})
    description:string;
    @Prop({required:true})
    photo:string;
    @Prop({required:true})
    stock:string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);