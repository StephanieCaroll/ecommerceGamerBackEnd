import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nome_usuario: string;

  @Column()
  email_usuario: string;

  @Column()
  senha_usuario: string;
}
