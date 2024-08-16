import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    edad: number;

    @Column()
    dni: number;

    @Column()
    curso: string;

    @Column()
    celularResponsable: number;
}