import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '../entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criar(@Body() usuario: Usuario) {
    return this.usuariosService.criar(usuario);
  }

  @Get()
  listar() {
    return this.usuariosService.listarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: number) {
    return this.usuariosService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(@Param('id') id: number, @Body() usuario: Partial<Usuario>) {
    return this.usuariosService.atualizar(id, usuario);
  }

  @Delete(':id')
  deletar(@Param('id') id: number) {
    return this.usuariosService.deletar(id);
  }
}
