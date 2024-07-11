import { Injectable, NotFoundException } from '@nestjs/common';
import { FileStorageService } from '../file-storage.service';
import { Student } from './entities/student.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StudentsService {
    constructor(private readonly fileStorageService: FileStorageService) {}

    async getAllStudents(): Promise<Student[]> {
        return await this.fileStorageService.readStudentsFile();
    }

    async getStudentById(id: string): Promise<Student> {
        const students = await this.getAllStudents();
        const student = students.find(s => s.id === id);
        if (!student) {
            throw new NotFoundException('Estudiante no encontrado');
        }
        return student;
    }

    async createStudent(student: Student): Promise<void> {
        const students = await this.getAllStudents();
        student.id = uuidv4();
        students.push(student);
        await this.fileStorageService.writeStudentsFile(students);
    }

    async updateStudent(id: string, updatedStudent: Student): Promise<void> {
        const students = await this.getAllStudents();
        const index = students.findIndex(s => s.id === id);
        if (index === -1) {
            throw new NotFoundException('Estudiante no encontrado');
        }
        students[index] = { ...students[index], ...updatedStudent };
        await this.fileStorageService.writeStudentsFile(students);
    }

    async deleteStudent(id: string): Promise<void> {
        const students = await this.getAllStudents();
        const updatedStudents = students.filter(s => s.id !== id);
        if (students.length === updatedStudents.length) {
            throw new NotFoundException('Estudiante no encontrado');
        }
        await this.fileStorageService.writeStudentsFile(updatedStudents);
    }
}