import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ConfigService } from '@nestjs/config';
import { Request } from '@nestjs/common';

@Controller('api/products')

export class ProductsController {
  constructor(private readonly productsService: ProductsService, private configService: ConfigService) {}

  @Post()
  create(@Body() createProduct: CreateProductDto) {
    if(!createProduct.name||!createProduct.price||!createProduct.description||!createProduct.photo||!createProduct.stock)
    throw new HttpException('Valores incompletos',HttpStatus.BAD_REQUEST)
      return this.productsService.create(createProduct);
  }

  @Get()
  async findAll(@Request() req) {
    const {limit} = req.query;
    const products = await this.productsService.findAll(+limit);
    return {status:"Success Product", products}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}