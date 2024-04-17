import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Login } from './login.entity';

@Entity()
export class Filiacao {
  @PrimaryGeneratedColumn()
  id_filiacao: number;

  // relação 1 to n
  @OneToMany(() => Login, (Login) => Login.filiacao)
  @JoinColumn({ name: 'id_login' })
  login: Login;

  @Column({ length: 40 })
  nome: string;

  @Column({ length: 40 })
  endereco: string;

  @Column({ length: 30 })
  cidade: string;

  @Column({ length: 30 })
  bairro: string;

  @Column({ length: 2 })
  uf: string;
}
