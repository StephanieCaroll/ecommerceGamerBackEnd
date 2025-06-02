import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from '../entities/produto.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  criar(@Body() produto: Produto) {
    return this.produtosService.criar(produto);
  }

  @Get()
  listar() {
    return this.produtosService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: number) {
    return this.produtosService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(@Param('id') id: number, @Body() produto: Partial<Produto>) {
    return this.produtosService.atualizar(id, produto);
  }

  @Delete(':id')
  deletar(@Param('id') id: number) {
    return this.produtosService.deletar(id);
  }
}
