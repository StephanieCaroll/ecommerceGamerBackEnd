import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async listarTodos(): Promise<Produto[]> {
    return this.produtoRepository.find();
  } 

  async criar(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async listar(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    return this.produtoRepository.findOneBy({ id_produto: id });
  }

  async atualizar(id: number, produto: Partial<Produto>): Promise<Produto> {
    await this.produtoRepository.update(id, produto);
    return this.produtoRepository.findOneBy({ id_produto: id });
  }

  async deletar(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}