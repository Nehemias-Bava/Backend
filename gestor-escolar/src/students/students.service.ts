import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './entities/student.entity';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const STUDENTS_FILE = path.resolve(__dirname, '..', '..', 'data', 'students.json');

@Injectable()
export class StudentsService {
    private students: Student[] = [];

    constructor() {
        this.loadStudents();
    }

    private loadStudents() {
        if (fs.existsSync(STUDENTS_FILE)) {
            const data = fs.readFileSync(STUDENTS_FILE, 'utf-8');
            this.students = JSON.parse(data);
        } else {
            console.log('File not found, initializing with empty array');
            this.students = [];
            this.saveStudents();
        }
    }

    private saveStudents() {
        try {
            fs.writeFileSync(STUDENTS_FILE, JSON.stringify(this.students, null, 2));
        } catch (error) {
            console.error('Error saving students:', error);
        }
    }

    getAllStudents(): Student[] {
        return this.students;
    }

    getStudentById(id: string): Student {
        const student = this.students.find(student => student.id === id);
        if (!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        return student;
    }

    createStudent(student: Student) {
        student.id = uuidv4(); // Genera un ID único
        this.students.push(student);
        this.saveStudents();
    }

    updateStudent(id: string, updatedStudent: Student) {
        const index = this.students.findIndex(student => student.id === id);
        if (index === -1) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        updatedStudent.id = id; // Mantén el mismo ID
        this.students[index] = updatedStudent;
        this.saveStudents();
    }

    deleteStudent(id: string) {
        const index = this.students.findIndex(student => student.id === id);
        if (index === -1) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        this.students.splice(index, 1);
        this.saveStudents();
    }

    getStudentsSortedByGrade(order: 'asc' | 'desc' = 'asc'): Student[] {
        const gradeOrder = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto'];
        return this.students.sort((a, b) => {
            const gradeA = gradeOrder.indexOf(a.grade.toLowerCase());
            const gradeB = gradeOrder.indexOf(b.grade.toLowerCase());
            if (order === 'asc') {
                return gradeA - gradeB;
            } else {
                return gradeB - gradeA;
            }
        });
    }
}