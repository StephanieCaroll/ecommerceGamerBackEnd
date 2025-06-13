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
      // MUDANÇAS AQUI: Use process.env.<NOME_DA_VARIAVEL>
      host: process.env.DB_HOST, // O host do seu banco de dados
      port: parseInt(process.env.DB_PORT || '3306', 10), // A porta do seu banco de dados, com fallback para 3306 e conversão para número
      username: process.env.DB_USER, // O usuário do seu banco de dados
      password: process.env.DB_PASSWORD, // A senha do seu banco de dados
      database: process.env.DB_NAME, // O nome do seu banco de dados
      entities: [Usuario, Produto],
      synchronize: false // Mantenha isso como 'false' em produção!
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