import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { UpdateProductDto } from '../products/dto/update-product.dto';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productsModel: Model<ProductDocument>){
  }

  async create(createProduct: CreateProductDto) {
    let productCreated = await this.productsModel.create(createProduct);
    return productCreated;
  }

  findAll(limit=15) {
    return this.productsModel.find().limit(limit);
  }

  findOne(id: string) {
    return this.productsModel.findOne({_id:id});
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productsModel.updateOne({_id:id},{$set:updateProductDto})
  }

  remove(id: string) {
    return this.productsModel.deleteOne({_id:id})
  }
}