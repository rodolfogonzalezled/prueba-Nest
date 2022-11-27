import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule,ConfigModule.forRoot(),MongooseModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: async(config:ConfigService) => ({
      uri: config.get<string>('URL_MONGO')
    })
  }), ProductsModule],

  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}
