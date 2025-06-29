// src/app.module.ts
import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cors from 'cors';

import { Produto } from './entities/produto.entity';
import { Usuario } from './entities/usuario.entity';

import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '220506',
      database: 'ecommerce_gamer',
      entities: [Usuario, Produto],
      synchronize: false, 
      migrations: [__dirname + '/../migrations/*.js'],
      migrationsRun: false,
    }),
    TypeOrmModule.forFeature([Usuario, Produto]),
    HttpModule,
    UsuariosModule,
    ProdutosModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}