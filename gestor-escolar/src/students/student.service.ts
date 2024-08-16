import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';


@Injectable()
export class StudentService {
    private readonly filePath = path.join(__dirname, '../../data/students.json');

    private readData(): any[] {
        const fileContent = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(fileContent);
    }

    private writeData(data: any[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }

    create(createStudentDto: CreateStudentDto): any {
        const students = this.readData();
        const newId = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;
        const newStudent = { id: newId, ...createStudentDto };
        students.push(newStudent);
        this.writeData(students);
        return newStudent;
    }

    findAll(): any[] {
        return this.readData();
    }

    findOne(id: number): any {
        return this.readData().find(student => student.id === id);
    }

    update(id: number, updateStudentDto: UpdateStudentDto): any {
        const students = this.readData();
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return undefined;
        students[index] = { ...students[index], ...updateStudentDto };
        this.writeData(students);
        return students[index];
    }

    remove(id: number): boolean {
        const students = this.readData();
        const newStudents = students.filter(s => s.id !== id);
        if (students.length === newStudents.length) return false;
        this.writeData(newStudents);
        return true;
    }
}