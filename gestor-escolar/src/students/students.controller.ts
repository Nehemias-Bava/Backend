import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    getAllStudents(): Student[] {
        return this.studentsService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id') id: string): Student {
        return this.studentsService.getStudentById(id);
    }

    @Post()
    createStudent(@Body() student: Student) {
        this.studentsService.createStudent(student);
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() updatedStudent: Student) {
        this.studentsService.updateStudent(id, updatedStudent);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        this.studentsService.deleteStudent(id);
    }

    @Get('sort/:order')
    getStudentsSortedByGrade(@Param('order') order: 'asc' | 'desc'): Student[] {
        return this.studentsService.getStudentsSortedByGrade(order);
    }
}