import { Module, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InfoMiddleware } from './middlewares/infoMiddleware';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductSchema } from '../products/schema/product.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Product.name,
      schema: ProductSchema
    }
  ]), ConfigModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(InfoMiddleware).forRoutes(ProductsController)
  }
}