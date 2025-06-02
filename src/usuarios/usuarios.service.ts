import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async criar(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }

  async listarTodos(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async buscarPorId(id: number): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ id_usuario: id });
  }

  async atualizar(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuarioRepository.update(id, usuario);
    return this.usuarioRepository.findOneBy({ id_usuario: id });
  }

  async deletar(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
