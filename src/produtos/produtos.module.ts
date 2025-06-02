import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from '../entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), HttpModule],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
