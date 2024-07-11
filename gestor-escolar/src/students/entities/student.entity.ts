import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @ManyToOne(() => Course, course => course.students)
    course: Course;
}