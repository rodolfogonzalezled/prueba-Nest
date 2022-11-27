import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument  = HydratedDocument<User>;

@Schema()
export class User {

    @Prop({required:true})
    first_name:string;
    @Prop({required:true})
    last_name:string;
    @Prop({required:true, unique:true})
    email:string;
    @Prop({required:true})
    password:string;
    
}

export const UserSchema = SchemaFactory.createForClass(User);