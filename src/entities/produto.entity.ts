import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id_produto: number;

  @Column()
  nome_produto: string;

  @Column({ type: 'text', nullable: true })
  descricao_produto: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco_produto: number;

  @Column({ nullable: false })
  estoque_produto: number;
}
