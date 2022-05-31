import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tests')
export class test {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
